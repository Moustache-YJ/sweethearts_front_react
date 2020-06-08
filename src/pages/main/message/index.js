import React,{Component} from 'react'
import './index.css'
export default class Message extends Component{
    constructor(props){
      super(props)
      this.state = {
        message:[
            {id:1,name:'亲爱的猪猪',creatAt:'2020年12月12日18:22:34'},
            {id:2,name:'亲爱的猪猪',creatAt:'2020年12月12日18:22:34'},
            {id:3,name:'亲爱的猪猪',creatAt:'2020年12月12日18:22:34'},
            {id:4,name:'亲爱的猪猪',creatAt:'2020年12月12日18:22:34'},
            {id:5,name:'亲爱的猪猪',creatAt:'2020年12月12日18:22:34'},
            {id:6,name:'亲爱的猪猪',creatAt:'2020年12月12日18:22:34'},
        ]
      }
      this.handleClick = this.handleClick.bind(this)
      this.renderInfo = this.renderInfo.bind(this)
    }
    componentDidMount(){
        console.log(this.renderInfo())
    }
    handleClick(){
         console.log('点击了我')
    }
    renderInfo(){
        const renderInfo = this.state.message.map((value,index) => {
           return <li className="transparent" key={value.id} style={{animationDelay:`${index*2}s`}}>
                <div className="title">
                    <span>{value.name}</span>
                    <span>{value.creatAt}</span>
                </div>
            </li>
        })
        return renderInfo
    }
    render(){
        return(
            <ul className="mes_ul">
                {this.renderInfo()}
            </ul>
        )
    }
}

