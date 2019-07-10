import adbcefg from "immutable"
const defaultState =  adbcefg.fromJS({
    homeConData:[],
    homeConData2:[]
})

export default (state=defaultState,action) => {
    switch (action.type){
        case "GET_HOME_CON_FULFILLED":
            let data2 = adbcefg.fromJS(action.payload.data.shopList);       
            let zz =   state.setIn(['homeConData'],data2);   
            let ccc = state.set('homeConData',state.get('homeConData').push(data2))     
            //console.log(zz.get('homeNavData'))
            return ccc;
        case "GET_HOME_CON2_FULFILLED":
            let data3= adbcefg.fromJS(action.payload.data.shopList);                      
            let data4 = state.setIn(['homeConData',0],data3);           
            //console.log(zz.get('homeNavData'))
            return data4   
        case "GET_HOME_CON3_FULFILLED":
            let con3data = adbcefg.fromJS(action.payload.data.shopList);                      
            let con3datas = state.setIn(['homeConData2',0],con3data)
              
            console.log(3210)  
            console.log(con3datas.toJS())
            //console.log(zz.get('homeNavData'))
            return con3datas     
        default :
            return state    
    }
    
}