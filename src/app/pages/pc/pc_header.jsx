import React,{Component} from "react"
import { Menu, Icon,Button,Modal,Tabs,Form, Input,message } from 'antd';
import { Link } from "react-router"
import "../../static/pc_header.css"
import { postHttp } from "../utils/http"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class PCHeader extends Component{

	constructor(){
		super();
		this.state = {
			isLogin:false,
		    current: 'home',
		    visible:false,
		    action:"login",
		    username:"未知"
		}
	}
	
	componentWillMount(){
		if(localStorage.getItem("username")){
			this.setState({
				username:localStorage.getItem("username"),
				isLogin:true
			})
		}
	}


	handlerMenuClick(event){
		if(event.key == "unlogin"){
			this.setState({
				visible:true
			})
		}
		this.setState({
			current:event.key
		})
	}

	handlerModal(event){
		this.setState({
      		visible: false,
    	});
	}

	componentDidMount() {
    	this.props.form.validateFields();
  	}

	// 表单提交事件
	handlerUser(event){
		event.preventDefault();
		var formValues = this.props.form.getFieldsValue();
		// 网络请求
		if(this.state.action == "login"){
			// 登录
			var result = postHttp("http://localhost:3000/login",{
				username:formValues.userName,
				password:formValues.password
			});
			result.then(res => {
				return res.json();
			})
			.then(data => {
				if(!data.msg){
					if(data){
						this.setState({
							username:data[0].username,
							visible:false,
							isLogin:true
						})
						// 本地存储
						localStorage.setItem("username",data[0].username);
					}
				}else{
					message.info(data.msg);
				}
			})
			.catch(error => {
				console.log(error)
			})
		}else{
			// 注册
			var result = postHttp("http://localhost:3000/register",{
				username:formValues.reguserName,
				password:formValues.regpassword
			});
			result.then(res => {
				return res.json();
			})
			.then(data => {
				message.info('注册成功，请登录');
				this.setState({
					visible:false
				})
			})
			.catch(error => {
				console.log(error)
			})
		}
		
	}

	// 判断登录还是注册
	handlerTabs(key){
		if(key == "1"){
			this.setState({
				action:"login"
			})
		}else{
			this.setState({
				action:"reg"
			})
		}
	}

	// 登出
	logout(event){
		this.setState({
			isLogin:false
		})
		localStorage.removeItem("username")
	}

	render(){

		var { getFieldDecorator} = this.props.form;

		var { isLogin } = this.state;
		var showLogin = isLogin 
		?
		<Menu.Item className="login" key="login">
		 	<Button type="dashed">{ this.state.username }</Button>
        	<Button type="primary">
				<Link to={`/center`}>
					个人中心
				</Link>
        	</Button>
        	<Button type="dashed" onClick={this.logout.bind(this)}>登出</Button>
   		</Menu.Item>
        :
		<Menu.Item className="login" key="unlogin">
           登录|注册
        </Menu.Item>
		return(
			<div>
				<Menu
					onClick={this.handlerMenuClick.bind(this)}
			        selectedKeys={[this.state.current]}
			        mode="horizontal">
					<Menu.Item key="home">
			        	<Link to={`/`}>
			        		<Icon type="home" />
			          		首页
			        	</Link>
			        </Menu.Item>
			        <Menu.Item key="yule">
			         	<Link to={`/yule`}>
			         		<Icon type="meh-o" />
			          		娱乐
			         	</Link>
			        </Menu.Item>
			        <Menu.Item key="tiyu">
			        	<Link to={`/tiyu`}>
			        		<Icon type="reload" />
			          		体育
			        	</Link>
			        </Menu.Item>
			        <Menu.Item key="guonei">
			         	<Link to={`/guonei`}>
			         		<Icon type="upload" />
			          		国内
			         	</Link>
			        </Menu.Item>
			        <Menu.Item key="guoji">
			        	<Link to={`/guoji`}>
			        		<Icon type="environment-o" />
			          		国际
			        	</Link>
			        </Menu.Item>
			        <Menu.Item key="junshi">
			         	<Link to={`/junshi`}>
			         		<Icon type="cloud-upload-o" />
			          		军事
			         	</Link>
			        </Menu.Item>
			        <Menu.Item key="shishang">
			          	<Link to={`/shishang`}>
			          		<Icon type="skin" />
			          		时尚
			          	</Link>
			        </Menu.Item>
			       	{ showLogin }
				</Menu>
				
				{/* 登录对话框 */}
				<Modal
		          title="登录|注册"
		          visible={this.state.visible}
		          onOk={this.handlerModal.bind(this)}
		          onCancel={this.handlerModal.bind(this)}>
		          
				{/* 登录与注册tab切换 */}

					<Tabs defaultActiveKey="1" onChange={this.handlerTabs.bind(this)}>
					    <TabPane tab="登录" key="1">
					    	{/* 登录表单 */}
							<Form layout="horizontal" onSubmit={this.handlerUser.bind(this)}>
						        <FormItem>
						          {getFieldDecorator('userName', {
						            rules: [{ required: true, message: 'Please input your username!' }],
						          })(
						            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
						          )}
						        </FormItem>
						        <FormItem>
						          {getFieldDecorator('password', {
						            rules: [{ required: true, message: 'Please input your Password!' }],
						          })(
						            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
						          )}
						        </FormItem>
						        <FormItem>
						          <Button
						            type="primary"
						            htmlType="submit">
						            Log in
						          </Button>
						        </FormItem>
						    </Form>
					    </TabPane>
					    <TabPane tab="注册" key="2">
					    	{/* 注册表单 */}
					    	<Form layout="horizontal" onSubmit={this.handlerUser.bind(this)}>
						        <FormItem>
						          {getFieldDecorator('reguserName', {
						            rules: [{ required: true, message: 'Please input your username!' }],
						          })(
						            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
						          )}
						        </FormItem>
						        <FormItem>
						          {getFieldDecorator('regpassword', {
						            rules: [{ required: true, message: 'Please input your Password!' }],
						          })(
						            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
						          )}
						        </FormItem>
						        <FormItem>
						          <Button
						            type="primary"
						            htmlType="submit">
						            Log in
						          </Button>
						        </FormItem>
						    </Form>
					    </TabPane>
					</Tabs>

		        </Modal>

			</div>
		)
	}
}

export default PCHeader = Form.create({})(PCHeader);