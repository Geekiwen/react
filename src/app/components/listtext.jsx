import React from "react"
import "../static/listtext.css"
import { getHttp } from "../pages/utils/http"

export default class ListText extends React.Component{

	constructor(){
		super();
		this.state = {
			newsList:[]
		}
	}
	
	componentDidMount(){
		var url = this.props.url;
		var result = getHttp(url);
		result.then(res => {
			return res.json();
		})
		.then(data => {
			this.setState({
				newsList:data
			})
		})
	}

	render(){
		var { newsList } = this.state;
		return(
			<div className="list-text">
				<ul>
					{
						newsList.map(function(element,index){
							return(
								<li key={index}>
									<a href={element.url}>{element.title}</a>
								</li>
							)
						})
					}
					
							
				</ul>
			</div>
		)
	}
}