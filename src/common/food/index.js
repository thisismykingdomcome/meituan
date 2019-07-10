import React,{Fragment,Component} from "react"
import BScroll from "better-scroll"
import {connect} from "react-redux"
import style from "./index.module.css"
import {FoodAction}  from "../../action/homeNavAction"
import {is,isImmutable} from "immutable"


 

class Food extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    componentWillMount(){
        let mtWmPoiId = this.props.match.params.mtWmPoiId
        console.log(this.props.match.params)
        this.props.getFoodData(mtWmPoiId)
        
    }
    shouldComponentUpdate(newProps,newState){
        console.log(newProps)
        return true
    }
    render(){
        let {shopInfo} = this.props
        console.log(shopInfo)
        return (
            <div>
                <article className={style.bigbig}>
                    <div className={style.bigbox}>
                        <div style={{width:"100%",height:"50px"}}>
                            <div style={{backgroundColor:"rgb(46,47,59)"}}>
                                <div className={style.upup}>
                                    <i className={style.leftArrows}></i>
                                </div>
                            </div>
                        </div>
                        <div className={style.headerbox}>
                            <div className={style.header}>
                                <div className={style.left} style={this.props.shopInfo?{backgroundImage:`url(${this.props.shopInfo.shopPic})`}:{backgroundColor:'red'}}></div>
                                <div className={style.right}>
                                    <div className={style.rightup}>
                                        
                                    {
                                        this.props.shopInfo?
                                        <div className={[style.righttab1,this.props.shopInfo.activityList?null:style.more].join(' ')}>
                                            <span className={style.p1}>{this.props.shopInfo.deliveryTimeDecoded}分钟</span>
                                            <span className={style.p2}>{this.props.shopInfo.distance}</span>
                                        </div>:''                                      
                                    }
                                            
                                        <div className={style.righttab2}>
                                            公告：{shopInfo?shopInfo.bulletin?shopInfo.bulletin:'欢迎光临，很高兴为您服务':''}
                                        </div>
                                    </div>
                                    
                                        {
                                            shopInfo.activityList?
                                            <div className={style.rightdown}>
                                            <div className={style.abc}>
                                                <div className={style.animate}>
                                                    {
                                                        shopInfo?shopInfo.activityList?shopInfo.activityList.map((item,index)=>(
                                                            <div className={style.aone}>
                                                                <div className={style.aone1}>
                                                                    <i className={style.iii}></i>
                                                                    <span className={style.sss}>{item.actDesc}</span>
                                                                </div>
                                                            </div>
                                                        )):'':''
                                                    }
                                                    
                                                    {/** 
                                                        <div className={style.aone}>
                                                        <div className={style.aone1}>
                                                            <i className={style.iii}></i>
                                                            <span className={style.sss}>慢22；满9922减30</span>
                                                        </div>  
                                                        </div>
                                                    **/}

                                                </div>
                                            </div>
                                            </div>:''
                                        }
                                    
                                </div>
                            </div>
                        </div>
                        <div className={style.content}>
                            <nav className={style.nav123}>
                                <div className={style.nav1}>点菜</div>
                                <div className={style.nav1}>评价</div>
                                <div className={style.nav1}>商家</div>
                            </nav>
                        
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({  
    shopInfo:state.getIn(['reducer4','shopInfo']),
    shoppingCart:state.getIn(['reducer4','shoppingCart']),
    categoryList:state.getIn(['reducer4','categoryList'])     
})
const mapDispatchToProps = (dispatch)=>({
    getFoodData(mtWmPoiId){
        dispatch(FoodAction(mtWmPoiId))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Food)

