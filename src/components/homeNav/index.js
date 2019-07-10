import React,{Fragment} from "react"
import style from "./index.module.css"
import {homeNavDataAction} from "../../action/homeNavAction"
import  { is } from "immutable"
import {connect} from "react-redux"
import {NavLink,Link} from "react-router-dom"


class HomeNav extends React.Component{
    constructor(){
        super();    
        this.state = {
            n:0
        }       
    }    
    componentWillMount(){
        this.props.getHomeNav()
        
    }
    shouldComponentUpdate(newProps,newState){
        if(this.props.homeNavData instanceof Array && this.state.n == 0){
            this.setState({
                n:1
            })
            let height1 = window.getComputedStyle(this.refs.homenav,null)['height'];
            this.props.getHeight(height1)
        }
        for(let key in newProps){                   
                if(newProps[key] !== this.props[key] || !is(newProps[key],this.props[key])){    //只要滚动一直更新，待解决                                          
                    return true;
                }          
        }
        for(let key in newState){
            if(this.state[key] !== newState[key] || !is(newState[key],this.state[key])){
                
               // let c = immutable.fromJS(newState);
               // console.log(c)
                return true;
            }
        }               
       // console.log(newState.get('homeNavData'))
        return false;
    }
    render(){
        return (
            <div ref="homenav" className={style.box}>
                <div className={style.up}>
                    {   
                        this.props.homeNavData?this.props.homeNavData.slice(0,5).map((item,index)=>(
                            <Fragment key={item.cateId}>
                                <div className={index === 0?style.special:style.common}></div>                                
                                <NavLink to={"/waimai/kingkong/"+item.cateId} className={style.smallBox} >
                                    <div className={style.smallUp}>
                                    <img src={item.icon} alt="icon"/>
                                    </div>
                                    <div className={style.smallDown}>{item.name}</div>
                                </NavLink>
                            </Fragment>
                        )):""
                    }
                        <div className={style.special}></div>    
                </div>
                <div className={style.up}>
                    {   
                        this.props.homeNavData?this.props.homeNavData.slice(5,10).map((item,index)=>(
                            <Fragment key={item.cateId}>
                                <div className={index === 0?style.special:style.common}></div>                                
                                <Link to={"/waimai/kingkong/"+item.cateId} className={style.smallBox} href="#">
                                    <div className={style.smallUp}>
                                    <img src={item.icon} alt="icon"/>
                                    </div>
                                    <div className={style.smallDown}>{item.name}</div>
                                </Link>
                            </Fragment>
                        )):""
                    }
                        <div className={style.special}></div>    
                </div>
                

                    
            </div>
        )
    }
    
}
const mapStateToProps = (state)=>{
    var cc = "";
    if(state.getIn(['reducer1','homeNavData']) instanceof Array){       
        cc = state.getIn(['reducer1','homeNavData'])    
    }   
   return {homeNavData:cc}
}
const mapDispatchToProps = (dispatch)=>({
    getHomeNav(){
        //store.dispatch(homeNavDataAction());
        dispatch(homeNavDataAction())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(HomeNav)

