import React,{Component} from "react"
import PCHeader from "./pc_header"
import "../../static/pc_index.css"

export default class PCIndex extends Component{
	render(){
		return(
			<div className="pc-index">
				<PCHeader />
				{ this.props.children }
			</div>
		)
	}
}

