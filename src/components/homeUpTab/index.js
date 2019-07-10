import React from "react"
import style from "./index.module.css"
class UpTab extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hhhh:"zzz",
            flag:this.props.flag
        }

    }
    componentDidMount(){
        let height1 = window.getComputedStyle(this.refs.upTab,null)['height'];
        this.props.getHeight(height1)
    }
    shouldComponentUpdate(newprops,newstate){
        // console.log(newprops)
        if(this.props !== newprops){
            if(newprops.flag){
               this.refs.max.style.maxWidth = 0 + "px";
            }else{
                this.refs.max.style.maxWidth = 4 + "rem"; 
            }
            return true;
        }
        return false;
        
    }
    render(){
        return (
            <div ref="upTab" className={style.box}>
                <div ref="max" className={style.left}>
                    <p>福永街道和平社区居委会</p>
                </div>
                <div className={style.right}>
                    <input type="text" defaultValue="请输入商家或商品名字"/>
                </div>
            </div>
        )
    }
}
export default UpTab;

