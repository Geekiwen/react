import React,{Component} from "react"
import { Menu, Icon,Button } from 'antd';
import { Link } from "react-router"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class IsLogin extends Component{

	constructor(){
		super();
		this.state = {
		    isLogin:false,
		    current:"login"
		}
	}

	render(){
		var { isLogin } = this.state;

		var showLogin = isLogin 
		?
		<Menu.Item className="login" key="login">
		 	<Button type="dashed">iwen</Button>
        	<Button type="primary">
				<Link to={`/center`}>
					个人中心
				</Link>
        	</Button>
        	<Button type="dashed">登出</Button>
   		</Menu.Item>
        :
		<Menu.Item className="login" key="unlogin">
           登录|注册
        </Menu.Item>
		return(
			
		)
	}
}

