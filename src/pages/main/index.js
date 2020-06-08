import React,{Component} from 'react'
import {TabBar} from 'antd-mobile'
import Item1 from './message'
import Item2 from './mall'
import './index.css'
export default class MainLyout extends Component{
    constructor(props){
        super(props);
        this.state = {
          selectedTab: 'world',
          hidden: false,
          fullScreen: false,
        };
    }
    componentDidMount(){
      console.log(this.props.location.params)
    }
    render(){
        return(
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#000000"
          barTintColor="white"
        >
          <TabBar.Item
            title="留言"
            selected={this.state.selectedTab === 'world'}
            onPress={() => {
                this.setState({
                  selectedTab: 'world',
                });
              }}
            icon={<div style={{
              width: '32px',
              height: '32px',
              background:  `url(${require('../../assets/images/main/word_default.png') }) center center /  32px 32px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '32px',
              height: '32px',
              background: `url(${require('../../assets/images/main/word.png') }) center center /  32px 32px no-repeat` }}
            />
            }
            data-seed="logId"
          > 
            <Item1></Item1>
          </TabBar.Item>
          <TabBar.Item
            key="gift"
            title="商城"
            selected={this.state.selectedTab === 'gift'}
            onPress={() => {
                this.setState({
                  selectedTab: 'gift',
                });
              }}
            icon={<div style={{
              width: '28px',
              height: '28px',
              background:  `url(${require('../../assets/images/main/gift_default.png') }) center center /  28px 28px no-repeat`,
            }}
            />
            }
            selectedIcon={<div style={{
              width: '28px',
              height: '28px',
              background: `url(${require('../../assets/images/main/gift.png') }) center center /  28px 28px no-repeat`,
            }}
            />
            }
          >
            <Item2></Item2>
          </TabBar.Item>
          <TabBar.Item
            key="Life"
            selected={this.state.selectedTab === 'index'}
            onPress={() => {
                this.setState({
                  selectedTab: 'index',
                });
              }}
            icon={<div style={{
              width: '32px',
              height: '32px',
              background:  `url(${require('../../assets/images/main/love_default.png') }) center center /  32px 32px no-repeat`,
            }}
            />
            }
            selectedIcon={<div style={{
              width: '32px',
              height: '32px',
              background: `url(${require('../../assets/images/main/love.png') }) center center /  32px 32px no-repeat`,
              animation:'logoChage 2s infinite',
            }}
            />
            }
          >
            <Item2></Item2>
          </TabBar.Item>
          <TabBar.Item
            key="Life"
            title="行程"
            selected={this.state.selectedTab === 'ship'}
            onPress={() => {
                this.setState({
                  selectedTab: 'ship',
                });
              }}
            icon={<div style={{
              width: '28px',
              height: '28px',
              background:  `url(${require('../../assets/images/main/ship_default.png') }) center center /  28px 28px no-repeat`,
            }}
            />
            }
            selectedIcon={<div style={{
              width: '28px',
              height: '28px',
              background: `url(${require('../../assets/images/main/ship.png') }) center center /  28px 28px no-repeat`,
            }}
            />
            }
          >
            <Item2></Item2>
          </TabBar.Item>
          <TabBar.Item
            key="our"
            title="我们"
            selected={this.state.selectedTab === 'our'}
            onPress={() => {
                this.setState({
                  selectedTab: 'our',
                });
              }}
            icon={<div style={{
              width: '28px',
              height: '28px',
              background:  `url(${require('../../assets/images/main/our_default.png') }) center center /  28px 28px no-repeat`,
            }}
            />
            }
            selectedIcon={<div style={{
              width: '28px',
              height: '28px',
              background: `url(${require('../../assets/images/main/our.png') }) center center /  28px 28px no-repeat`,
            }}
            />
            }
          >
            <Item2></Item2>
          </TabBar.Item>
          </TabBar>
        )
    }
}