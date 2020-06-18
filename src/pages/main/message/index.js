import React,{Component} from 'react'
import './index.css'
import mes_data from '../../../mock/message'
export default class Message extends Component{
    constructor(props){
      super(props)
      this.state = {
        message:mes_data
      }
      this.handleClick = this.handleClick.bind(this)
      this.renderInfo = this.renderInfo.bind(this)
    }
    componentDidMount(){
    }
    handleClick(){
    }
    renderInfo(){
        const renderInfo = this.state.message.map((value,index) => {
           return <li className="transparent" key={value.createTime} style={{animationDelay:`${index*2}s`}}>
                <div className="title">
                    <span>{value.lover}</span>
                    <span>{value.createTime}</span>
                </div>
                <div className="mes_context">
                    {value.content}
                </div>
            </li>
        })
        return renderInfo
    }
    render(){
        return(
            <div className="message">
                <div className="mes_tar">
                    <img src={require('../../../assets/images/public/add.png')} alt="添加"/>
                </div>
                <ul className="mes_ul">
                    {this.renderInfo()}
                </ul>
            </div>
        )
    }
}

