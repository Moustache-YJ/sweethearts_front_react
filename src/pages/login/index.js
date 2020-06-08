import React,{ Component } from "react"
import './index.css'
import Minput from '../../component/input'
import {Button} from 'antd-mobile'
export default class Login extends Component{
   constructor(props){
       super(props)
       this.state = {
           logo:require('../../assets/images/login/logo.png'),
           account:'',
       }
       this.handleLogin = this.handleLogin.bind(this)
   }
   handleLogin(){
    this.props.history.push({pathname:'/main',params:{id:'123'}})
   }
   render(){
       return(
           <div className="main">
               <img className="logo" src={this.state.logo} alt='logo'/>
               <div className="form">
                    <Minput value={this.state.account}  placeholder="请输入账号" onChange={(e)=>{this.setState({account:e.target.value})}}></Minput>
                    <Minput value={this.state.password} type="password" placeholder="请输入密码" onChange={(e)=>{this.setState({password:e.target.value})}} style={{marginTop:'10px'}}></Minput>
                    <div className="tip">
                        <span>忘记密码?</span>
                        <span>点击注册</span>
                    </div>
                    <Button style={{marginTop:'10px'}} type="ghost" onClick={this.handleLogin}>登录</Button>
               </div>
           </div>
       )
   }
}