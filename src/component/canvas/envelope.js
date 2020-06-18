import React,{Component} from 'react'
export default class Envelope extends Component{
    constructor(props){
      super(props)
      this.envelope = React.createRef()
    }
    componentDidMount(){
        this.initCanvas()
    }
    initCanvas(){
        var ctx = this.envelope.current.getContext("2d")
        ctx.fillStyle="#FF0000";
        ctx.fillRect(0,0,150,75);
        ctx.fillRect(0,0, 100, 100)
    }
    render(){
        return (
            // 外部画布的大小通过属性的width、和height来控制，不要使用css来控制
            <canvas ref={this.envelope} width="300" height="150">
                你的浏览器不支持 canvas，请升级你的浏览器。
            </canvas>
        )
    }
}