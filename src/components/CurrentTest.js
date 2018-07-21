import React from "react"
import { Card, Fa } from "mdbreact"
import "./../css/Test.css"

export default class Test extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			liked: false,
		}

		this.liked = this.liked.bind(this)
	}

	liked(event) {
		this.setState({
			liked: !this.state.liked,
		})
	}
	render() {
		return (
			<div>
				<div className="property-card z-depth-2 animated fadeInDown">
					<img
						src="http://ofirsrl.com/wp-content/uploads/2018/03/beautiful-home-pic-beautiful-home-pictures-house-design-photos.jpg"
						className="img-fluid property-image"
					/>
					<div className="dark-background">
						<b>
							<div className="icon-shower">
								3 <Fa icon="shower" />
							</div>
							<Fa
								icon="heart"
								size="2x"
								className={this.state.liked ? "liked animated bounce" : "like"}
								onClick={this.liked}
							/>

							<div className="icon-bed">
								2 <Fa icon="bed" />
							</div>
						</b>
					</div>
					<div className="property-title">
						<b>3 bedroom house in the edge of Accra</b>
					</div>
				</div>
				<br />
				<div className="property-card z-depth-2 animated fadeInDown">
					<img
						src="https://s.hdnux.com/photos/41/22/11/8725090/5/920x920.jpg"
						className="img-fluid property-image"
					/>
					<div className="dark-background">
						<div className="icon-shower">
							3 <Fa icon="shower" />
						</div>

						<div className="icon-bed">
							2 <Fa icon="bed" />
						</div>
					</div>
					<Fa
						icon="heart"
						size="2x"
						className={this.state.liked ? "liked animated bounce" : "like"}
						onClick={this.liked}
					/>
					<div className="property-title">
						<b>3 bedroom house in the heart of Accra</b>
					</div>
				</div>
				<br />
				<div className="property-card z-depth-2 animated fadeInDown">
					<img
						src="https://st.hzcdn.com/simgs/c951427e000c436f_4-0975/mediterranean-exterior.jpg"
						className="img-fluid property-image"
					/>
					<div className="dark-background">
						<div className="icon-shower">
							3 <Fa icon="shower" />
						</div>

						<div className="icon-bed">
							2 <Fa icon="bed" />
						</div>
					</div>
					<div className="property-title">
						<b>3 bedroom house in the heart of Accra</b>
					</div>
				</div>
				<br />
				<div className="property-card z-depth-2 animated fadeInDown">
					<img
						src="https://cdn.vox-cdn.com/thumbor/LbtDPTzYR1R1DOrwDsoD_NTStno=/0x0:1086x724/1200x800/filters:focal(457x276:629x448)/cdn.vox-cdn.com/uploads/chorus_image/image/58077319/thumb_7348_finished_print_1024.0.jpg"
						className="img-fluid property-image"
					/>
					<div className="dark-background">
						<div className="icon-shower">
							3 <Fa icon="shower" />
						</div>

						<div className="icon-bed">
							2 <Fa icon="bed" />
						</div>
					</div>
					<div className="property-title">
						<b>3 bedroom house in the heart of Accra</b>
					</div>
				</div>
				<br />
				<div className="property-card z-depth-2 animated fadeInDown">
					<img
						src="https://st.hzcdn.com/simgs/c951427e000c436f_4-0975/mediterranean-exterior.jpg"
						className="img-fluid property-image"
					/>
					<div className="dark-background">
						<div className="icon-shower">
							3 <Fa icon="shower" />
						</div>

						<div className="icon-bed">
							2 <Fa icon="bed" />
						</div>
					</div>
					<div className="property-title">
						<b>3 bedroom house in the heart of Accra</b>
					</div>
				</div>
				<br />
			</div>
		)
	}
}
