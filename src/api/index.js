import 'es6-promise';
import 'whatwg-fetch';
import qs from "qs";


export const homeNavFetch = ()=>{
    let result = fetch("homepage/kingkong?_=1561430964836&X-FOR-WITH=TVIOjTo1xrmn1gg%2FHRjzyeUkQi5H9M%2F2Oge5%2BA%2BOHWQpVb6OOs31nl9zHbWJvlkiYWSR%2FlQITevvOIjwxfmHN8IrkHEuFY6mOAVarFiH4exZhPHyt19UkXdHMvpLef4950NGPqj2DR6prOsuSBb7Aw%3D%3D",{
        method:"post",
        credentials: 'include',
        headers: {
            'Accept': 'application/json,text/plain,*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:qs.stringify({
            initialLat: 22.669379,
            initialLng: 113.811528,
            actualLat: 22.669379,
            actualLng: 113.811528,
            geoType: 2,
            wm_latitude: 22669379,
            wm_longitude: 113811528,
            wm_actual_latitude: 22669379,
            wm_actual_longitude: 113811528,
        })
    }).then(res => res.json());
    return result;
}

export const homeContentFetch = (index,cc,)=>{
    let result = fetch("homepage/poilist?_=1561620961923&X-FOR-WITH=CdLUYyf%2F1j61oLbAdrk%2BvkeSlwSNRYAME6WcF7KQP4gv7NECMzayUJcjz43BvEuUPOrziqP3BDj%2FhaMU6mmEH%2FUmn5eX%2BPRo0myEtCYArL93%2Bp51mq3mOz46v9zzbC%2F90%2B6ku08vfalyWsfWkzppew%3D%3D",{
        method:"post",
        credentials:'include',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:qs.stringify({
            startIndex:index || 0,
            sortId:cc || 0,
            multiFilterIds:"" ,
            sliderSelectCode:"" ,
            sliderSelectMin:"",
            sliderSelectMax:"",
            geoType:2,
            rankTraceId:"" ,
            uuid:"33FC0DDAF6FA2A6C07BF3F5B902419806578A9A3CFB6EFDEC8CC184DE1456BA2",
            platform:3,
            partner:4,
            originUrl:"http://h5.waimai.meituan.com/waimai/mindex/home",
            riskLevel:71,
            optimusCode:10,
            wm_latitude:'',
            wm_longitude:'',
            wm_actual_latitude:'',
            wm_actual_longitude:'',
            openh5_uuid:"33FC0DDAF6FA2A6C07BF3F5B902419806578A9A3CFB6EFDEC8CC184DE1456BA2",
            _token:"",
        })
    }).then(res => res.json());
    return result;
}

export const homeOptionFetch = ()=>{
    let result = fetch("poi/filterconditions?_=1561601684182&X-FOR-WITH=zjZULRXEjzLKtZl7Uk17nax9rbS74KLnvW%2FR5qjbmFKxqFYjzy2TgmWjXWIMnSv9or6TOEXzD8nBut88rm4HmorhW5fy2eW3VSfCJFxWYmqIsBCmAnEsLxr4QRb%2FwQHMERTVctLyDYsAVipU4snpSw%3D%3Dpage/kingkong?_=1561430964836&X-FOR-WITH=TVIOjTo1xrmn1gg%2FHRjzyeUkQi5H9M%2F2Oge5%2BA%2BOHWQpVb6OOs31nl9zHbWJvlkiYWSR%2FlQITevvOIjwxfmHN8IrkHEuFY6mOAVarFiH4exZhPHyt19UkXdHMvpLef4950NGPqj2DR6prOsuSBb7Aw%3D%3D",{
        method:"post",
        credentials: 'include',
        headers: {
            'Accept': 'application/json,text/plain,*/*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:qs.stringify({
            geoType: 2,
            wm_latitude:'',
            wm_longitude:'' ,
            wm_actual_latitude:'' ,
            wm_actual_longitude:'',
            openh5_uuid:'33FC0DDAF6FA2A6C07BF3F5B902419806578A9A3CFB6EFDEC8CC184DE1456BA2',
            uuid:'33FC0DDAF6FA2A6C07BF3F5B902419806578A9A3CFB6EFDEC8CC184DE1456BA2'
        })
    }).then(res => res.json());
    return result;
}
export const homeContentFetch2 = (sortId,navigateType)=>{
    let result = fetch("channel/kingkongshoplist?_=1561694760854&X-FOR-WITH=UcWqJFYr8oaPDnZzkh1ZA5V7udJGoXyxkosEbVpIT6guHFB40f0PWeI4%2FNZLHSj70PiDzaqU7IkXdHwtYoBZt7wZl7RcWVpR7ODWAd0Q1E9bQgsls2t5OJnC002imH7kWZcuevsDh1kydKKJLuoZDw%3D%3D",{
        method:"post",
        credentials: 'include',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:qs.stringify({
            startIndex:0,
            sortId:sortId || "" ,
            navigateType:navigateType,
            firstCategoryId:navigateType,
            secondCategoryId:navigateType,
            multiFilterIds:'',
            sliderSelectCode:'',
            sliderSelectMin:'',
            sliderSelectMax:'',
            actualLat:22.669379,
            actualLng:113.811528,
            initialLat:22.669379,
            initialLng:113.811528,
            geoType:2,
            rankTraceId:'',
            uuid:'33FC0DDAF6FA2A6C07BF3F5B902419806578A9A3CFB6EFDEC8CC184DE1456BA2',
            platform:3,
            partner:4,
            originUrl:'http://h5.waimai.meituan.com/waimai/mindex/kingkong?navigateType=910&firstCategoryId=910&secondCategoryId=910&title=%E7%BE%8E%E9%A3%9F',
            riskLevel:71,
            optimusCode:10,
            wm_latitude:22669379,
            wm_longitude:113811528,
            wm_actual_latitude:22669379,
            wm_actual_longitude:113811528,
            openh5_uuid:'33FC0DDAF6FA2A6C07BF3F5B902419806578A9A3CFB6EFDEC8CC184DE1456BA2',
            _token:''
        })
    }).then(res => res.json());
    return result;
}
export const foodFetch = (mtWmPoiId)=>{
    let result = fetch("poi/food?_=1561724444350&X-FOR-WITH=kKZVyxmtrxvFG424PufV747zIWPvmEK1Xr2uX%2BEu9jF9cOY%2BXHDhuTbo7%2F%2BvoCdO2lm81dA%2BpiLZ6Um6BbOEDwaUCwTL8t1AmMaA9CdDag993NV20GvYjKwjgpfIMAbZF0tnWhZnFoZA5fvA88y%2F3g%3D%3D",{
        method:"post",
        credentials:'include',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body:qs.stringify({
            geoType:2,
            mtWmPoiId:mtWmPoiId,
            dpShopId: -1,
            source:'shoplist',
            skuId:'',
            uuid:'33FC0DDAF6FA2A6C07BF3F5B902419806578A9A3CFB6EFDEC8CC184DE1456BA2',
            platform:3,
            partner:4,
            originUrl:'https://h5.waimai.meituan.com/waimai/mindex/menu?dpShopId=&mtShopId=1091730331612249&source=shoplist&initialLat=22.626049&initialLng=113.837908&actualLat=&actualLng=',
            riskLevel:71,
            optimusCode:10,
            wm_latitude:22626049,
            wm_longitude:113837908,
            wm_actual_latitude:0,
            wm_actual_longitude:0,
            openh5_uuid:'33FC0DDAF6FA2A6C07BF3F5B902419806578A9A3CFB6EFDEC8CC184DE1456BA2',
            _token:'',
        })
    })
    return result
}