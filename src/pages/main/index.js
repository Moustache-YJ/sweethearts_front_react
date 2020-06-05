import React,{Component} from 'react'
import {TabBar} from 'antd-mobile'
import Item1 from './item1'
import Item2 from './item2'
export default class MainLyout extends Component{
    constructor(props){
        super(props);
        this.state = {
          selectedTab: 'redTab',
          hidden: false,
          fullScreen: false,
        };
    }
    render(){
        return(
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Life"
            key="Life"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
                this.setState({
                  selectedTab: 'redTab',
                });
              }}
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            badge={0}
            data-seed="logId"
          >
            <Item1></Item1>
          </TabBar.Item>
          <TabBar.Item
            title="Life"
            key="Life"
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
                this.setState({
                  selectedTab: 'blueTab',
                });
              }}
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            badge={1}
            data-seed="logId"
          >
            <Item2></Item2>
          </TabBar.Item>
          </TabBar>
        )
    }
}