import React from "react"
import {
	CarouselItem,
	Container,
	Carousel,
	View,
	CarouselInner,
} from "mdbreact"

export default class ResultsDetailsBasicInfo extends React.Component {
    constructor(props){
        super(props)

    }
	render() {
		{
			/* render the image from the props, in the carousel. and the other info in a designed fashion*/
		}

		return (
			<div>
                <br />
				<Carousel
					activeItem={1}
					length={4}
					showControls={true}
					showIndicators={false}
					className="z-depth-2"
				>
					<CarouselInner>
						<CarouselItem itemId="1">
							<View>
								<img
									className="d-block w-100"
									src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
									alt="First slide"
								/>
							</View>
						</CarouselItem>
						<CarouselItem itemId="2">
							<View>
								<img
									className="d-block w-100"
									src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg"
									alt="Second slide"
								/>
							</View>
						</CarouselItem>
						<CarouselItem itemId="3">
							<View>
								<img
									className="d-block w-100"
									src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
									alt="Third slide"
								/>
							</View>
						</CarouselItem>
						<CarouselItem itemId="4">
							<View>
								<img
									className="d-block w-100"
									src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg"
									alt="Mattonit's item"
								/>
							</View>
						</CarouselItem>
					</CarouselInner>
				</Carousel>
			</div>
		)
	}
}
