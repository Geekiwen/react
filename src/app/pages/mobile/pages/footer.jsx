import React from "react"
import "../../../static/font/iconfont.css"
import "../../../static/mobile/footer.css"
import { Link,IndexLink } from "react-router"

export default class Footer extends React.Component{
	render(){
		return(
			<div className="footer">
				<ul>
					<li>
						<IndexLink activeClassName="active" to={`/`}>
							<i className="iconfont icon-homepage_fill"></i><span>首页</span>
						</IndexLink>
					</li>
					<li>
						<IndexLink activeClassName="active" to={`/live`}>
							<i className="iconfont icon-live_fill"></i><span>直播</span>
						</IndexLink>
					</li>
					<li>
						<IndexLink activeClassName="active" to={`/category`}>
							<i className="iconfont icon-manage_fill"></i><span>分类</span>
						</IndexLink>
					</li>
					<li>
						<IndexLink activeClassName="active" to={`/mine`}>
							<i className="iconfont icon-people_fill"></i><span>我的</span>
						</IndexLink>
					</li>
				</ul>
			</div>
		)
	}
}