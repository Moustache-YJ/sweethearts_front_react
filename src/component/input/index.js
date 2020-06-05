import React,{Component} from 'react'
import './index.css'
export default class Minput extends Component{
    constructor(props){
       super(props)
       this.setState = {}
    }
    render(){
        return(
            <input className="m_input" type={this.props.type?this.props.type:'text'} style={this.props.style} placeholder={this.props.placeholder} value={this.props.value} onChange={(e) => {this.props.onChange(e)}}></input>
        )
    }
} 