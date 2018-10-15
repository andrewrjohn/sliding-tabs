import React, { Component } from 'react'
import styled from 'styled-components'

const TabHeader = styled.table`
margin-left: auto;
margin-right: auto;
`

const TabName = styled.th`
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    font-size: 28px;
`



const TabIndicator = styled.div`
height: 5px;
background: white;
left: ${props => props.left + 15}px;
position: absolute;
width: ${props => props.width - 30}px;
margin-left: auto;
margin-right: auto;
margin-top: 5px;
transition: all 200ms ease-in-out;
border-radius: 50px;
`
const TabContent = styled.div`
    width: 600px;
    height: 400px;
    background: white;
    border: 2px solid black;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => props.isActive && `margin-left: ${window.innerWidth-600}px;`}
    ${props => props.isActive && `margin-right: ${window.innerWidth-600}px;`}
    ${props => props.isActive && `left: ${window.innerWidth/2 - 300}px;`}
    transition: all 200ms ease-in-out;
`

export default class Tabs extends Component {
    constructor (props) {
        super(props)

        this.state = {
            activeTab: this.props.tabs[0],
           next: this.props.tabs[1],
           previous: '',
           history: [],
           open: false,
        }
    }

    componentDidMount () {

        this.setState({ 
            left: document.getElementById(this.props.tabs[0]).getBoundingClientRect().left,
            top: document.getElementById(this.props.tabs[0]).getBoundingClientRect().top,
            width: document.getElementById(this.props.tabs[0]).getBoundingClientRect().width,
            height: document.getElementById(this.props.tabs[0]).getBoundingClientRect().height,
        })
    }

    switchTab (tab, index) {
        this.setState({ previous: this.props.tabs[index-1], next: this.props.tabs[index+1], currentIndex: index, activeTab: tab, left: document.getElementById(tab).getBoundingClientRect().left, width: document.getElementById(tab).getBoundingClientRect().width, height: document.getElementById(tab).getBoundingClientRect().height, top: document.getElementById(tab).getBoundingClientRect().top })
    }

  render() {

    return (
        <div>
      <TabHeader>
          <tbody>

<tr>
{
    this.props.tabs.map((tab, index) =>
    <TabName id={tab} key={tab} onClick={() => this.switchTab(tab, index)} isActive={this.state.activeTab === tab && true}>{tab}</TabName>
    )
    }
</tr>
          </tbody>
        
        
      </TabHeader>
         <TabIndicator left={this.state.left} width={this.state.width} height={this.state.height} top={this.state.top}>
         </TabIndicator>

         <div style={{display: 'flex', flexDirection: 'row', marginTop: '30px', position: 'absolute'}}>

             {
                 
                    this.props.tabs.map(tab =>
                    <TabContent isActive={this.state.activeTab === tab && true}>{tab}</TabContent>
                    )
                    
             }
         </div>
      </div>
    )
  }
}
