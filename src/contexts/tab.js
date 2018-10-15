import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

const TabConsumer = Consumer



class TabProvider extends Component {

    state = {
        AGE: 21,
        NAME: 'Andrew Johnson',
        JOB: 'Frontend',
        UPDATE_AGE: () => this.UPDATE_AGE_ACTION()
    }

     UPDATE_AGE_ACTION = () => {
         const { AGE } = this.state
         if (AGE < 30) {
            this.setState({AGE: AGE + 1})
         } else {
            this.setState({AGE: 0})
         }
        
    }

    render () {

        return (
            <Provider value={{ ...this.state }}>
            {this.props.children}
            </Provider>
        )
    }
}

export {
  TabProvider,
  TabConsumer,
}