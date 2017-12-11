import React from "react"
import $ from "jquery"
import "../static/backtop.css"

export default class BackTop extends React.Component{
	
	constructor(){
		super();
		this.state = {
			showClass:"re"
		}
		window.onscroll = () => {
			var scrTop = document.documentElement.scrollTop||document.body.scrollTop;
			if(scrTop>=300){
				this.setState({
					showClass:"change"
				})
			}else{
				this.setState( {
					showClass:"re"
				})
			}
		}
	}

	/*
		在React中，如果要操作DOM，可以使用refs获取当前DOM节点
		ref在设置的时候。必须是全局唯一的
	*/
	
	componentDidMount(){
		var btDiv = this.refs.bt;
		console.log($(btDiv).offset().top);
		console.log(btDiv.offsetTop);
	}

	backTop(event){
		var time_scroll = null;
		time_scroll = setInterval(function(){
			var scrTop = document.documentElement.scrollTop||document.body.scrollTop;
			scrTop = scrTop*0.8;
			document.documentElement.scrollTop = scrTop;
			document.body.scrollTop = scrTop;
			if(scrTop<=0){
				clearInterval(time_scroll);
			}
		},30);
	}

	render(){
		var { showClass} = this.state;
		return(
			<div ref="bt" id="retop" className={showClass} onClick={this.backTop}>return</div>
		)
	}
}