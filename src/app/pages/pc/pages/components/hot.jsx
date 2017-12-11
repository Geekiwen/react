import React from "react"
import "../../../../static/hot.css"
import HotJson from "../../../../json/hot"

export default class Hot extends React.Component{
	render(){
		return(
			<div className="hot">
				<h2></h2>
				<ul>
					{
						HotJson.map(function(ele,index){
							return <li key={index}><a href={ele.url}>{ele.title}</a></li>
						})
					}
				</ul>
			</div>
		)
	}
}