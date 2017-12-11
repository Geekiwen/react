import React from "react"
import "../static/guireader.css"
import newsShouyeLeft from "../json/news_shouye_left"
export default class GuiReader extends React.Component{
	render(){

		var datatype = this.props.datatype;
		var newsList;
		if(datatype == "json1"){
			newsList = newsShouyeLeft;
		}
		return(
			<div className="guireader">
				<h2>
					<span>新闻各有态度</span>
				</h2>
				<div className="gui-list">
					<ul className="gui-ul">
						{
							newsList.map(function(element,index){
								return(
									<li key={index}>
										<div className="gui-list-cur">
											<a href={element.url}>
												<h3>
			                                		{ element.title }
			                            		</h3>
											</a>
											<ul>
												{
													element.newlist.map(function(element,index){
														return(
															<li key={index} className="cur-list">
																<a href={element.url}>{element.title}</a>
															</li>
														)
													})
												}
											</ul>
										</div>
									</li>
								)
							})
						}

						
					</ul>
				</div>
			</div>
		)
	}
}