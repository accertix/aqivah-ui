import React from 'react'
import {Fa } from 'mdbreact'
import "./../css/Property.css"


export default class Property extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            liked: false,
        }
    }
}