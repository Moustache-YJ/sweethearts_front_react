import React,{Component} from 'react'
import { Route,Redirect } from 'react-router'
import home from '../pages/home'
import main from '../pages/main'
import login from '../pages/login'
import app from '../App'
import { BrowserRouter } from "react-router-dom";
export default class RouterList extends Component{
    render(){
        return (
            <BrowserRouter>
                <Route path="/" component={app}>
                <Redirect from='/' to='/login'></Redirect>
                    <Route path="/login" component={login}></Route>
                    <Route path="/home" component={home}></Route>
                    <Route path="/main" component={main}></Route>
                </Route>
            </BrowserRouter>
        )
    }
}