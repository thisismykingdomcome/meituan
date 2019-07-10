import React from "react"


export default ()=>(Wrapper)=>{
    return class extends React.Component{
        constructor(props){
            super(props);


            this.state = {
                mine:this.props.mine || "",
                movie:this.props.movie || "",
                sell:this.props.sell || ""
            }
            
        }
        render(){
            let {mine,movie,sell} = this.state;
  
            return (                     
                <Wrapper  mine={mine} movie={movie} sell={sell}></Wrapper>                                                        
              
            )
        }
    }
}