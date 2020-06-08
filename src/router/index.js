import React,{Component} from 'react'
import { Route } from 'react-router'
import home from '../pages/home'
import main from '../pages/main'
import login from '../pages/login'
import envelope from '../component/canvas/envelope.js'
import { BrowserRouter } from "react-router-dom";
export default class RouterList extends Component{
    render(){
        return (
            <BrowserRouter>
                <Route path="/home" component={home}></Route>
                <Route path="/main" component={main}></Route>
                <Route path="/login" component={login}></Route>
                <Route path="/envelope" component={envelope}></Route>
            </BrowserRouter>
        )
    }
}