
import {homeNavFetch,homeContentFetch,homeOptionFetch,homeContentFetch2,foodFetch} from "../api/index";

export const homeNavDataAction = () =>({ 
        type:"GET_HOME_NAV",
        payload:new Promise(resolve=>{
            homeNavFetch().then((data)=>{resolve(data)});
        })     
})
export const homeContentAction = (index,cc,aa) => {
        if(cc !== undefined){
                return {
                    type:"GET_HOME_CON2",
                    payload:new Promise(resolve=>{
                        homeContentFetch(index,cc).then((data)=>{resolve(data)});
                    }) 
                }        
        }else{
            return {
                type:"GET_HOME_CON",
                payload:new Promise(resolve=>{
                    homeContentFetch(index,cc).then((data)=>{resolve(data)});
                })  

            }
        }    
        
}
export const homeOptionAction = () => ({
        type:"GET_HOME_OPT",
        payload:new Promise(resolve=>{
            homeOptionFetch().then((data)=>{resolve(data)});
        })  
})
var sordId1 = '';
var navigateType1 = "";
export const homeContentAction2 = (sordId,navigateType) => { 
    if(sordId){
         sordId1 = sordId;
    }
    if(navigateType){
         navigateType1 = navigateType
    }
    return{
        type:"GET_HOME_CON3",
        payload:new Promise(resolve=>{
            homeContentFetch2(sordId1,navigateType1).then((data)=>{resolve(data)});
        }) 
    }
}

export const FoodAction = (mtWmPoiId)=>{
    console.log(mtWmPoiId)
    return {
        type:"FOOD",
        payload:new Promise(resolve=>{
            foodFetch(mtWmPoiId).then(res=>res.json()).then((data)=>{resolve(data)});
        })  
    }
}
