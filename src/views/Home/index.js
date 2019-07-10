import React from 'react';
import TabBottom from "../../components/tabbottom/index"
import UpTab from "../../components/homeUpTab/index"
import HomeNav from "../../components/homeNav/index.js"
import style from "./index.module.css"
import HomeOption from "../../components/homeOption/"
import HomeContent from "../../components/homeContent"
import BScroll from "better-scroll"

export default class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            flag:false,
            nav:false,
            navWidth:0,
            upTabWidth:0,
            top:0,
            defaultTop:0,
            h1Height:0,
            val:"",
            getWay:''
        }
    }
    getNavHeight(val){
        this.setState({
           navWidth:val 
        })
    }
    getUpTabHeight(val){
        this.setState({
            upTabWidth:val
        })
    }
    render(){
        let {flag,nav,top,defaultTop} = this.state;
        return ( 
            <div>
                <UpTab getHeight = {this.getUpTabHeight.bind(this)} flag={flag}/>
                <div ref="big"  className={style.content}>
                    <div style={{height:"max-content"}} >
                        <HomeNav getHeight={this.getNavHeight.bind(this)} />
                        <h1 ref="h1">附近商家</h1>
                        <HomeOption func={this.updateContent.bind(this)} defaultTop={defaultTop} nav={nav} top={top}/>
                        <HomeContent getMore={this.getMores.bind(this)}/>
                    </div>
                </div>
                <TabBottom mine="aa" movie="zzz" sell="ccc"/>
            </div>
        )
    };
    getMores(val){
        this.setState({
            val:val
        })
    }
    updateContent(sortId){
console.log("哈哈哈"+sortId)
console.log(this)
        this.state.val(0,sortId)
    }
    componentDidMount(){         
        let wrapper = this.refs.big;
        let scroll1= new BScroll(wrapper,{  
            click:true,     
            bounce:true,
            scrollbar:true,
            pullUpLoad:{
                threshold: 50,                
            },
            pullDownRefresh:{
                threshold:30,
            },
            probeType:2
        })
        let bigHeight = parseFloat(window.getComputedStyle(this.refs.big,null)['height']);
        let h1Height = parseFloat(window.getComputedStyle(this.refs.h1,null)['height']);
        this.setState({
            h1Height:h1Height
        })
        
        scroll1.on('scroll',(pos) => {     
                                    
            let {navWidth,upTabWidth} = this.state;   
                  
            let height1 = -(parseFloat(navWidth) - parseFloat(upTabWidth))
            let height2 = -(parseFloat(navWidth) + h1Height - parseFloat(upTabWidth))           
            if( pos.y <= height1 && pos.y > height2){
                // this.setState =({
                //     flag:true
                // },function(){
                //     console.log("修改成功")
                // });                               
                // this.forceUpdate(()=>{this.state.flag = true})
                this.setState({
                   flag:true,
                   nav:false,                  
                })                             
            }else if(pos.y <= height2){
                console.log()           
                this.setState({
                    nav:true,
                    top:pos.y - parseFloat(upTabWidth) 
                })               
            }else{
                this.setState({
                    flag:false,
                    nav:false
                 })                
            }
            
        })
        let n =0;
        scroll1.on('pullingUp',()=>{
              n++;
              console.log("n的值为"+n)
            this.state.val(n)
            scroll1.refresh()
            scroll1.finishPullDown()
        })
    }
    shouldComponentUpdate(cc,newState){
     
        let {navWidth,h1Height,upTabWidth} = newState;     
        if(this.state.h1Height == 0 && newState.h1Height != 0){           
            this.setState({
                defaultTop:parseFloat(h1Height)
            })
        } 
        
        for(const key in this.state){
            for(var keys in newState){
                if(this.state[key] != newState[keys]){
                    return true;
                }
            }
        }
        for(const propkey in cc){
            for(var propkeys in this.props){
                if(this.props[propkeys] != cc[propkey]){
                    return true;
                }
            }
        }
        return false
    }
    componentDidUpdate(){
          
    }
    
    
} 