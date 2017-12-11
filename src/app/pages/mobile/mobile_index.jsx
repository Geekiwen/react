import React from "react"
import Footer from "./pages/footer"


export default class MobileIndex extends React.Component{
	render(){
		return(
			<div>
				{ this.props.children }
				<Footer />
			</div>
		)
	}
}