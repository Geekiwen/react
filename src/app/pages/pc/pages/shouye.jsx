import React,{Component} from "react"
import "../../../static/shouye.css"
import GuiReader from "../../../components/guireader"
import ListText from "../../../components/listtext"
import Swiper from "../../../components/swiper"

export default class Showye extends Component{
	render(){

		var swiperobj1 = {
			width:"100%",
			height:"250px"
		}

		var swiperobj2 = {
			height:"400px"
		}

		return(
			<div className="contentsize">
				<div className="sizeLeft">
					<GuiReader datatype="json1"/>
				</div>
				<div className="sizeCenter">
					<ListText url="http://www.wwtliu.com/sxtstu/news/juhenews.php?type=top&count=4"/>
					<ListText url="http://www.wwtliu.com/sxtstu/news/juhenews.php?type=yule&count=4"/>
					<Swiper swiperobj={swiperobj1} swiperkey="1"/>
				</div>
				<div className="sizeRight">
					<Swiper swiperobj={swiperobj2} swiperkey="2"/>
				</div>
			</div>
		)
	}
}

