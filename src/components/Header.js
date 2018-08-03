import React from "react"
import { Card, Fa } from "mdbreact"
import "./../css/Header.css"

export default class Header extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isMobile: true,
		}
	}

	render() {
		return this.state.isMobile ? (
			<div className="row header z-depth-1 mb-3 animated slideInDown sticky-top">
				<div className="col-4 text-left px-4">
					<Fa icon="user" />
				</div>
				<div className="col-4">
					<b>aqivah</b>
				</div>
				<div className="col-4 text-right px-4">
					<Fa icon="bars" onClick={this.props.toggleMenu} />
				</div>
			</div>
		) : (
			""
		)
	}
}
