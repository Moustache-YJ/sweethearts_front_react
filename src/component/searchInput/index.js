import React,{Component} from 'react'
import './index.css'
export default class SearchInput extends Component{
    constructor(props){
       super(props)
       this.setState = {}
    }
    render(){
        return(
            <input className="search_input" type={this.props.type?this.props.type:'text'} style={this.props.style} placeholder={this.props.placeholder || '搜索'} value={this.props.value}></input>
        )
    }
} 