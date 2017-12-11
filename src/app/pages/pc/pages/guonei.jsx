import React,{Component} from "react"
import Swipeable from 'react-swipeable'
import "../../../static/guonei.css"
import Hot from "./components/hot"
import ImgText from "./components/imgtext"
import { BackTop } from 'antd'
import MyBackTop from "../../../components/backtop"

const IMG_2 = `http://pic-bucket.nosdn.127.net/photo/0001/2017-12-08/D54I2HQ400AP0001NOS.jpg?imageView&thumbnail=600y300`;
const IMG_3 = `http://news.163.com/photoview/00AN0001/2285102.html`;
const IMG_4 = `http://news.163.com/photoview/00AN0001/2285222.html`;
const IMG_5 = `http://pic-bucket.nosdn.127.net/photo/0001/2017-12-06/D50NERT66VVV0001NOS.jpg?imageView&thumbnail=600y300`;
const IMAGES = [IMG_2, IMG_3, IMG_4, IMG_5];
const IMG_WIDTH = "600px";
const IMG_HEIGHT = "300px";

const RIGHT = '-1';
const LEFT = '+1';

const buttonStyles = {
  height: IMG_HEIGHT,
  color: "#eeeeee",
  fontSize: "2em",
};

export default class Guonei extends Component{
	
	constructor(props, context) {
	   super(props, context);
	   this.state = { imageIdx: 0 };
	}

	onSwiped(direction) {
	    const change = direction === RIGHT ? RIGHT : LEFT;
	    const adjustedIdx = this.state.imageIdx + Number(change);
	    let newIdx;
	    if (adjustedIdx >= IMAGES.length) {
	      newIdx = 0;
	    } else if (adjustedIdx < 0) {
	      newIdx = IMAGES.length - 1
	    } else {
	      newIdx = adjustedIdx;
	    }
	    this.setState({ imageIdx: newIdx });
  	}



	render(){

		const { imageIdx = 0 } = this.state;
	    const imageStyles = {
		    width: IMG_WIDTH,
		    height: IMG_HEIGHT,
		    backgroundImage: `url(${IMAGES[imageIdx]})`
    	};

		return(
			<div className="guonei-container">
				<div className="container-left">
					<Swipeable
		              className="callout secondary"
		              style={{ display: "inline-block", touchAction: 'none' }}
		              trackMouse
		              preventDefaultTouchmoveEvent
		              onSwipedLeft={()=>this.onSwiped(LEFT)}
		              onSwipedRight={()=>this.onSwiped(RIGHT)}>
                	  <div style={imageStyles} >
	                <button
	                  onClick={()=>this.onSwiped(RIGHT)}
	                  className="hollow float-left"
	                  style={buttonStyles}>&lt;</button>
	                <button
	                  onClick={()=>this.onSwiped(LEFT)}
	                  className="hollow float-right"
	                  style={buttonStyles}>&gt;</button>
                	</div>
            		</Swipeable>
            		<ImgText />
				</div>
				<div className="container-right">
					<Hot />
				</div>
				<MyBackTop />
			</div>
		)
	}
}

