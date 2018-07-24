import React from "react"
import ResultsQuickAccessBar from "./ResultsQuickAccessBar"
import ResultsDetailsBasicInfo from "./ResultsDetailsBasicInfo"

export default class ResultDetails extends React.Component {
	constructor(props) {
		super(props)
		console.log("results details page")
		console.log(props)

		this.state = {
			//store all properties, and store current property.
			//pass all props to the bar that pops the modal up. on selection, update the current property.
			currentProperty: this.props.location.state.currentProperty,

			queryValues: this.props.location.state.queryValues,
			quickAccessBarIsCollapsed: false,
			tabsToggled: true,
		}

		this.collapseQuickAccessBar = this.collapseQuickAccessBar.bind(this)
		console.log(this.state.queryValues)
		this.toggleTabs = this.toggleTabs.bind(this)
	}

	toggleTabs() {
		this.setState({ tabsToggled: !this.state.tabsToggled })
	}

	collapseQuickAccessBar() {
		this.setState({
			quickAccessBarIsCollapsed: !this.state.quickAccessBarIsCollapsed,
		})
	}

	render() {
		const { id } = this.props.match.params

		return (
			<div>
				<br />
				<ResultsQuickAccessBar
					queryValues={this.state.queryValues}
					onClick={this.collapseQuickAccessBar}
				/>
				{this.state.quickAccessBarIsCollapsed ? (
					""
				) : (
					<div>
						<h4>{this.state.currentProperty.title}</h4>
						<ul className="nav nav-tabs nav-justified">
							<li className="nav-item" onClick={this.toggleTabs}>
								<a
									className={
										this.state.tabsToggled
											? "nav-link active black-text"
											: "nav-link black-text"
									}
								>
									{"Basic Info"}
								</a>
							</li>
							<li className="nav-item" onClick={this.toggleTabs}>
								<a
									className={
										this.state.tabsToggled
											? "nav-link black-text"
											: "nav-link active black-text"
									}
								>
									{"Maps & More"}
								</a>
							</li>
						</ul>
						{this.state.tabsToggled ? (
							<ResultsDetailsBasicInfo property={this.state.currentProperty}/>
						) : (
							<div>{"maps toggled"}</div>
						)}
					</div>
				)}
			</div>
		)
	}
}
