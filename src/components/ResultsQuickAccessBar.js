import React from 'react'
import Properties from './PropertiesFix'

export default class ResultsQuickAccessBar extends React.Component{
    constructor(props){
        super(props)

        this.state={
            isCollapsed: false,
        }


    }

    toggleCollapse(event){
        this.setState({isCollapsed: !this.state.isCollapsed})
    }

    render(){
        return <Properties />
    }
}