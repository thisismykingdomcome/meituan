import React,{Fragment,PureComponent} from "react"
import HomeOption from "../homeOption"
import HomeContent from "../homeContent"
import style from "./index.module.css"
import {Router,Route} from "react-router-dom"

export default class ShopList extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            startY:0,
            startTop:0,
            upTabHeight:0,
            margintop:0,
            moveY:0,
            getHomeCon2:null,
            sordId:null,
            flag:true,
            navigateType:this.props.match.params.navigateType
        }
        
    }
    
    componentDidMount(){
     
        this.setState({
            upTabHeight:parseFloat(window.getComputedStyle(this.refs.upTab,null)['height'])
        })
    }
    componentWillUpdate(newProps,newState){
        
    }
    render(){
        return (
            <div className={style.bigbig}>
                <div className={style.bigbox}  ref="bigbox"
                    onTouchStart={this.touchStart.bind(this)}
                    onTouchMove={this.touchMove.bind(this)}
                    onTouchEnd={this.touchEnd.bind(this)} 
                >   
                    <div ref="upTab" className={style.box}>
                        <div className={style.right}>
                            <input type="text" defaultValue="请输入商家或商品名字"/>
                        </div>
                    </div>
                    <div ref="op" className={style.op} style={{'display':"block"}}> 
                        <HomeOption func={this.func.bind(this)}/>
                    </div>  
                    <Route path={"/waimai/kingkong/"+this.props.match.params.navigateType} render={()=>
                        {   let {navigateType} = this.state
                            return <Fragment>
                                    {navigateType == 910?<h1>错的不是我，是世界</h1>:
                                    navigateType == 101574?<h1>生于影，死于影</h1>:
                                    <h1>尔等为何而战！？</h1>  }
                                    <HomeContent refreshData={this.refreshData.bind(this)} navigateType={this.props.match.params.navigateType}/> 
                                </Fragment>}}/>                       
                </div>
            </div>
        )
    }
    refreshData(getHomeCon2){
        this.setState({ 
            getHomeCon2:getHomeCon2
        })
    }
    func(sordId){
        this.state.getHomeCon2(sordId)
    }
    touchStart(e){
        this.setState({
            startY:e.touches[0].pageY,
            flag:false
        })
        
    }
    touchMove(e){    
        this.setState({
            flag:true
        })
        let move = e.touches[0].pageY - this.state.startY;          
        let top1 = parseFloat(window.getComputedStyle(this.refs.bigbox,null)['top']);
        //console.log(top1)
        if( move >= -top1 ){
           // console.log(move)
            this.refs.bigbox.style.marginTop = -top1;
            this.setState({
                moveY:this.state.startY - top1
            })
        }else{
            this.refs.bigbox.style.marginTop = move + "px";
            this.setState({
                moveY:e.touches[0].pageY,
            })
        }
        //console.log(top1 + move)
        if(top1 + move <= -this.state.upTabHeight){
            this.refs.op.style.position = "fixed";
            this.refs.upTab.style.marginBottom = "0.86rem"
        }else{
            this.refs.op.style.position = "static";
            this.refs.upTab.style.marginBottom = "0";
        }      
        // if(this.state.startY -  e.touches[0].pageY >= this.state.upTabHeight + 10){
            
    
        //    this.refs.op.style.top = "0";
        //    this.refs.op.style.left = "0";

        // }else{
        //     this.refs.op.style.position = "static"

        //     this.refs.op.style.top = "0";
        //     this.refs.op.style.left = "0";
        // }
    }
    touchEnd(e){
        let {startY,moveY} = this.state;
        let cc = parseFloat(window.getComputedStyle(this.refs.bigbox,null)['top'])
      
        //console.log(moveY + "     " +"  " + "  "+startY)
        if(this.state.flag){
            this.refs.bigbox.style.top = moveY - startY + cc+"px";
            this.refs.bigbox.style.marginTop = 0 + "px";
        }else{
            this.refs.bigbox.style.top = cc + "px";
            this.refs.bigbox.style.marginTop = 0 + "px";
        }
        
    }
}