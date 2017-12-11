import React from "react"
import { Carousel } from 'antd'
import "../static/swiper.css"

export default class Swiper extends React.Component{
	render(){
		
		var {swiperobj,swiperkey} = this.props;

		var currentArr1 = [
			"http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner1.jpg",
			"http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner2.jpg"
		]

		var currentArr2 = [
			"http://cms-bucket.nosdn.127.net/f39e88bb0a4b45b7b236225b0990af1120171207212707.jpeg?imageView&thumbnail=300y400",
			"http://cms-bucket.nosdn.127.net/c5d93a8a30aa4c07b3bdeb95d6fc5d1320171208083507.jpeg?imageView&thumbnail=300y400"
		]
		var currentArr;
		if(swiperkey == "1"){
			currentArr = currentArr1;
		}
		if(swiperkey == "2"){
			currentArr = currentArr2;
		}	
		return(
			<Carousel className="swiper">
			    <div>
			    	<img style={swiperobj} src={currentArr[0]} alt=""/>
			    </div>
			    <div>
			    	<img style={swiperobj} src={currentArr[1]} alt=""/>
			    </div>
			</Carousel>
		)
	}
}