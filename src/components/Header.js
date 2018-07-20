import React from "react"
import { Card } from "mdbreact"

export default class Header extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isMobile: true,
		}
	}

	render() {
		return this.state.isMobile ? (
			<div className="row">
				<div className="col-4">{"user's profile link"}</div>
				<div className="col-4"><b>aqivah</b></div>
				<div className="col-4">hamburger menu</div>
			</div>
		) : (
			""
		)
	}
}
