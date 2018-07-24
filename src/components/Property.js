import React from "react"
import { Fa } from "mdbreact"
import { Link } from "react-router-dom"
import "./../css/Property.css"
import PATHS from "./pathConstants"

export default class Property extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			liked: false,
		}
		this.handleLiked = this.handleLiked.bind(this)
	}

	handleLiked(event) {
		this.setState({ liked: !this.state.liked })
	}

	render() {
		const property = this.props.property
		return (
			<div key={property.id}>
				<div className="property-card z-depth-2 animated fadeInDown">
					<Fa
						icon="heart"
						size="2x"
						className={this.state.liked ? "liked animated bounce" : "like"}
						onClick={this.handleLiked}
					/>

					<Link
						to={{
							pathname: `${PATHS.SEARCH_RESULTS}/${property.id}`,
							state: {
								currentProperty: property,
								queryValues: this.props.queryValues,
							},
						}}
					>
						<img
							src="http://ofirsrl.com/wp-content/uploads/2018/03/beautiful-home-pic-beautiful-home-pictures-house-design-photos.jpg"
							className="img-fluid property-image"
						/>
						<div className="dark-background">
							<b>
								<div className="icon-shower">
									{property.numBathrooms} <Fa icon="shower" />
								</div>

								<div className="icon-bed">
									{property.numBedrooms} <Fa icon="bed" />
								</div>
							</b>
						</div>
						<div className="property-title">
							<b>3 bedroom house in the edge of Accra</b>
						</div>
					</Link>
				</div>

				<br />
			</div>
		)
	}
}
