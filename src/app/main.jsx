import React,{Component} from "react"
import {render} from "react-dom"
import MediaQuery from "react-responsive"
import { Router,Route,hashHistory,IndexRoute } from "react-router"
import 'antd/dist/antd.css'
import "./static/init.css"
import PCIndex from "./pages/pc/pc_index"
import Guoji from "./pages/pc/pages/guoji"
import Guonei from "./pages/pc/pages/guonei"
import Junshi from "./pages/pc/pages/junshi"
import Shishang from "./pages/pc/pages/shishang"
import Tiyu from "./pages/pc/pages/tiyu"
import Yule from "./pages/pc/pages/yule"
import Shouye from "./pages/pc/pages/shouye"
import PersonCenter from "./pages/pc/pages/personcenter"

// 移动端
import MobileIndex from "./pages/mobile/mobile_index"
import MobileShouye from "./pages/mobile/pages/shouye"
import MobileMine from "./pages/mobile/pages/mine"
import MobileLive from "./pages/mobile/pages/live"
import MobileCategory from "./pages/mobile/pages/category"

class Main extends Component{
	render(){
		return(
			<div>
				{/* PC端 */}
				<MediaQuery query="(min-device-width: 1224px)">
					<Router history={hashHistory}>
						<Route path="/" component={PCIndex}>
							<IndexRoute component={Shouye}></IndexRoute>
							<Route path="/yule" component={Yule}></Route>
							<Route path="/guoji" component={Guoji}></Route>
							<Route path="/guonei" component={Guonei}></Route>
							<Route path="/junshi" component={Junshi}></Route>
							<Route path="/tiyu" component={Tiyu}></Route>	
							<Route path="/shishang" component={Shishang}></Route>	
						</Route>
						<Route path="/center" component={PersonCenter}></Route>
					</Router>
				</MediaQuery>
				{/* 移动端 */}
				<MediaQuery query="(max-device-width: 1224px)">
					<Router history={hashHistory}>
						<Route path="/" component={MobileIndex}>
							<IndexRoute component={MobileShouye}></IndexRoute>
							<Route path="/mine" component={MobileMine}></Route>
							<Route path="/live" component={MobileLive}></Route>	
							<Route path="/category" component={MobileCategory}></Route>	
						</Route>
					</Router>
				</MediaQuery>
			</div>
		)
	}
}

render(<Main />,document.getElementById("root"))