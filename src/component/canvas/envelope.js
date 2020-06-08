import React,{Component} from 'react'
export default class Envelope extends Component{
    render(){
        return (
            // 外部画布的大小通过属性的width、和height来控制，不要使用css来控制
            <canvas id="envelope"></canvas>
        )
    }
}