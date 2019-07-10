import React,{Fragment} from "react"
import style from "./index.module.css"
import {connect} from "react-redux"
import {homeOptionAction} from "../../action/homeNavAction"
import {is,isImmutable} from "immutable"
import PropTypes from "prop-types"

class HomeOption extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nav : this.props.nav,
            top:this.props.top,
            flag:false,
            defaultTop:this.props.defaultTop
        }
    }
    componentWillMount(){
        this.props.getData()
    }
   
    shouldComponentUpdate(newprops,newState){    
        if(newState.flag){//点击综合排名时
            this.refs.hideList.style.display = "block";
            this.refs.bkg.style.display = "block";
            this.refs.homeOp.style.position = "fixed";         
            this.refs.homeOp.style.top = newprops.defaultTop + "px";
            this.refs.homeOp.style.left = "0rem";   
        }else{
            this.refs.hideList.style.display = "none";
            this.refs.bkg.style.display = "none";
            this.refs.homeOp.style.position = "absolute";
            this.refs.homeOp.style.top = "0";
        }
        if(newprops.nav ){          
            this.refs.homeOp.style.position = "fixed";         
            this.refs.homeOp.style.top = -newprops.top + "px";
            this.refs.homeOp.style.left = "0rem";                
        }else if(!newState.flag){
            this.refs.homeOp.style.position = "absolute";
            this.refs.homeOp.style.top = "0";
        }
        
        
        for(let key in newState){
                if(this.state[key] != newState[key] || !is(this.state[key],newState[key])){
                    return true;
                }       
        }
        for(let key in newprops){
                if(this.props[key] != newprops[key] || !is(this.props[key],newprops[key])){
                    return true;
                }
            
        }
        return false;
        
    }
    render(){
        return (
            
                <div  className={style.bigNav}>
                    <div ref="homeOp" className={style.smallNav}>
                        <div className={style.showList}>
                            <ul>
                             <li onTouchStart={this.handleclick.bind(this)}>综合排名</li>
                            {
                                this.props.optionData?this.props.optionData.map((item,index)=>(
                                  <Fragment key={item.sortId}>
                                        {
                                        item.position === 0?<li  onTouchStart={this.handleclick3.bind(this,item.sortId)}>{item.name}</li>:""
                                        }
                                </Fragment>
                                )):''
                            }
                                <li>筛选</li>
                            </ul>
                        </div>                
                        <div ref="hideList" className={style.hideList}>
                            <ul>
                                {
                                    this.props.optionData?this.props.optionData.map((item)=>(
                                        <Fragment key={item.sortId}>
                                            {
                                            item.position === 1?<li onTouchStart={this.handleclick3.bind(this,item.sortId)}>{item.name}</li>:""
                                            }
                                        </Fragment>
                                    )):''
                                }
                            </ul>
                        </div>
                    </div>
                    <div ref="bkg" onTouchStart={this.handleclick2.bind(this)} className={style.bkg}></div>
                </div>
            
        )
    }
    handleclick3(sortId){
        this.props.func(sortId);
        this.handleclick2()
    }
    handleclick(){
        let c = this.state.flag
        this.setState({
            flag:!c
        });    
    }
    handleclick2(){
        let c = this.state.flag
        this.setState({
            flag:!c
        })
    }   
}
const mapStateToProps = (state)=>({
    optionData:state.getIn(['reducer3','optionData'])?state.getIn(['reducer3','optionData']).toJS():''
})
const mapDispatchToProps = (dispatch)=>({
    getData(){
        dispatch(homeOptionAction())
    }
})
HomeOption.propTypes = {
    optionData: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}
export default connect(mapStateToProps,mapDispatchToProps)(HomeOption)

