import React from "react"
import GuoNei from "../../../../json/guonei"
import "../../../../static/imgtext.css"

export default class ImgText extends React.Component{

	changeTime(time){
		var currentTime = new Date().getTime();
		var finalTime = currentTime - time;
		var days=Math.floor(finalTime/(24*3600*1000))  
   	 	//计算出小时数  
    	var leave1=finalTime%(24*3600*1000)    //计算天数后剩余的毫秒数  
    	var hours=Math.floor(leave1/(3600*1000))  
    	//计算相差分钟数  
    	var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数  
    	var minutes=Math.floor(leave2/(60*1000))
    	if(days){	
    		return days+"天前";
    	}else if(hours){
    		return hours+"小时前";
    	}else if(minutes){
    		return minutes+"分钟前";
    	}
	}
	
	render(){
		var that = this;
		return(
			<div className="imgtext-list">
				{
					GuoNei.map(function(ele,index){
						return(
							<div key={index} className="imgtext">
								<a href="#" className="na_pic">
									<img src={ele.img} alt="台当局着手处理“公投法” 恐提“领土变更公投”" width="140" height="88" />
								</a>
								<div className="na_detail">
									<div className="news_title">
										<h3>
											<a href="#">{ele.title}</a>
										</h3>
									</div>
									<div className="news_tag">
										<div className="keywords">
			                                <a href="#">{ele.block1}</a>
			                                <a href="#">{ele.block2}</a>
			                                <a href="#">{ele.block3}</a>
			                            </div>
			                            <span className="time">{that.changeTime(ele.time)}</span>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}
