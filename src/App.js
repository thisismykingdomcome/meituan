import React,{Component,Fragment} from 'react';
import ShopList from "./components/shopList"
import store from "./store/homeStore"
import Home from "./views/Home"
import NotF from './views/notFound/index.js';
import Food from "./common/food/index"
import {Provider} from "react-redux";

import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom"


class App extends Component {
  render(){
    return (
      <Fragment>      
          <Router>
         
            <Provider store={store}>
              <Route path="/waimai/home" component={Home} exact/>
              <Route path="/waimai/kingkong/:navigateType" component={ShopList}/>
              <Route path="/waimai/food/:mtWmPoiId" component={Food}/>
            </Provider>
              <Route path="/404" component={NotF}/>
              
              <Redirect from="/waimai" to="/waimai/home" exact/>
            
            
          </Router>                    
      </Fragment>
    )

  }
}
export default App;
