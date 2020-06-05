import React,{Component} from 'react'
export default class Home extends Component{
    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
         console.log('点击了我')
    }
    render(){
        return(
            <button onClick={this.handleClick}></button>
        )
    }
}

