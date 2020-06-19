import React,{Component} from 'react'
import './index.css'
import SearchInput from '../../../component/searchInput/index'
export default class Item2 extends Component{
    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
    }
    render(){
        return(
           <div className="mall">
               <div className="m_nav">
                    <SearchInput></SearchInput>
                    <div>
                        <img src={require('../../../assets/images/public/sort.png')} alt="分类"/>
                    </div>
               </div>
           </div>
        )
    }
}

