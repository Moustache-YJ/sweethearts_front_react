import React,{Component} from 'react'
export default class Item2 extends Component{
    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
         console.log('点击了我')
    }
    render(){
        return(
            <p>item2</p>
        )
    }
}

