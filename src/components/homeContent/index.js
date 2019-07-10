import React,{Component} from "react"
import style from "./index.module.css"
import {connect} from "react-redux"
import {homeContentAction,homeContentAction2} from "../../action/homeNavAction"
import  immutable,{ is } from "immutable"
import {Link} from "react-router-dom"

class HomeContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
        }
        console.log(this.props)
    }
    componentWillMount(){
        console.log("重新创建了")
        if(this.props.navigateType){//进入kingkong的页面触发gethomecon2函数，进入home页面触发gethomecon函数
            this.props.getHomeCon2(null,this.props.navigateType)
        }else{
            this.props.getHomeCon(0)
        }
        if(this.props.getMore){
            this.props.getMore(this.props.getHomeCon)
        }
        if(this.props.refreshData){
            this.props.refreshData(this.props.getHomeCon2)
        }       
    }
    shouldComponentUpdate(newProps,newState){
        for(let key in newProps){                   
                if(newProps[key] !== this.props[key] || !is(newProps[key],this.props[key])){    //只要滚动一直更新，待解决   
                    return true;
                }          
        }
        for(let key in newState){
            if(this.state[key] !== newState[key] || !is(newState[key],this.state[key])){
                return true;
            }
        }
        return false;
    }
    render(){
       
        return(
            <div className={style.bigBox}>
                <div key="aa" className={style.shopList}>
                    <ul>
                        {   
                            this.props.homeConData?this.props.homeConData[0]?this.props.homeConData.map((ite)=>(
                                ite.map((item,index)=>(
                                    <li key={index}>
                                        <Link to={"/waimai/food/" + item.mtWmPoiId}>
                                            <div className={style.left}>
                                                <img className={style.smallImg} alt="icon" src={item.poiTypeIcon}/>
                                                <div>
                                                    <img className={style.brandImg} alt="icon" src={item.picUrl}/>
                                                </div>
                                            </div>
                                            <div className={style.right}>
                                                <div className={style.one}>{item.shopName}</div>
                                                <div className={style.two}>
                                                    <div>
                                                        <div className={style.start}>
                                                            <i></i>
                                                            <i></i>
                                                            <i></i>
                                                            <i></i>
                                                            <i></i>
                                                        </div>
                                                        <span className={style.span1}>{item.wmPoiScore/10}</span>
                                                        <span className={style.span2}>{item.monthSalesTip}</span>
                                                    </div>
                                                    <div className={style.expendTime}>
                                                        <span>{item.deliveryTimeTip}</span>
                                                        <span className={style.ccc}>{item.distance}</span>
                                                    </div>
                                                </div>
                                                <div className={style.three}>
                                                    <span>{item.minPriceTip}</span>
                                                    <span className={style.ccc}>{item.shippingFeeTip}</span>
                                                   {
                                                   item.deliveryType?<span className={style.delivery}></span>:''   
                                                   } 
                                                </div>
                                                {
                                                    item.recommendInfo?
                                                    <div className={style.four}>              
                                                           <img src={item.recommendInfo.icon} alt="icon"/>
                                                        <span className={style.recommend}>{item.recommendInfo?item.recommendInfo.recommendReason:""}</span>
                                                        
                                                    </div>:''
                                                }
                                                <div className={style.five}>
                                                    {
                                                       item.discounts2? item.discounts2.map((it,index)=>(                                                  
                                                            <p key={index}  className={style.fiveP}>
                                                                <img  src={it.iconUrl} alt="activity icon"/>
                                                                <span>{it.info}</span>
                                                            </p>
                                                        )):""
                                                    }
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    ))
                            )):"":''
                        }                     
                    </ul> 
                    <div className={style.loading}>
                        <div className={style.loadingImg}></div>
                        <span>正在加载...</span>
                    </div>                   
                </div> 
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    var cc = "";
    if(state.getIn(['reducer2','homeConData'])){       
        cc = state.getIn(['reducer2','homeConData']).toJS()  
    }   
   return {homeConData:cc}
}
const mapDispatchToProps = (dispatch) => ({
    getHomeCon2(sordId,navigateType){   
        //store.dispatch(homeNavDataAction());
        dispatch(homeContentAction2(sordId,navigateType));
    },
    getHomeCon(n,cc){   
        //store.dispatch(homeNavDataAction());
        dispatch(homeContentAction(n,cc));
    }        
})
export default connect(mapStateToProps,mapDispatchToProps)(HomeContent)