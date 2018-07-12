import React from 'react'



export default class ResultDetails extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            //store all properties, and store current property.
            //pass all props to the bar that pops the modal up. on selection, update the current property.
        }

    }

    render(){
        return(
        <div>
            <br />bar that links to modal showing all property details
            <br /> <br />Display property details here 
            <br /> carousel of images
            <br /> BASIC INFO, MAPS & RATINGS,  [probably be grouped into tabs]
            <br /> title, option to like/save the property for later.
            <br /> description.
            <br /> num Bedrooms, num Bathrooms, size + unit of measurement, numPlots, project name by developer, unitName
            <br /> location
            <br /> street address
            <br /> update property history as well, if liked.
        </div>
        )
    }
}