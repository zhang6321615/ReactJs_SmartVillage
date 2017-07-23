import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon, Layout } from 'antd'
import { allMenu } from 'utils/menu'
import Top from './header'
import Contents from './content'
import Footer from './bottom'

import './index.less'

const SubMenu = Menu.SubMenu;
const { Sider } = Layout

/**
 * 主界面组件 导航 / Header、Content、Footer
 * 
 * @class Container
 * @extends {React.Component}
* */
class Container extends React.Component {

  constructor(props){
    super(props);
    // 属性定义
    this.state = {
      theme: 'dark',
      current: 'index',
      collapsed: false,
      mode: 'inline',  // 水平垂直展现
    }
  }

  // 组件加载完成
  componentDidMount() {
    this.handleClick([], 'index')
  }

  // 渲染
  render() {
    return (
      <Layout className="containAll">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="leftMenu">

          { <Icon className="logo white" type="appstore"  /> }
          { <span className="name white">智慧社区</span> } 
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            defaultOpenKeys={['']}
            selectedKeys={[this.state.current]}
            className="menu"
            mode={this.state.mode}>
            {
              // 遍历所有菜单配置文件
              allMenu.map((subMenu) => {
                // 包含子菜单的导航
                if (subMenu.children && subMenu.children.length) {
                  return (
                    <SubMenu key={subMenu.url} title={<span><Icon type={subMenu.icon} /><span>{subMenu.name}</span></span>}>
                      {subMenu.children.map(menu => (
                        <Menu.Item key={menu.url}><Link to={`/${menu.url}`}>{menu.name}</Link></Menu.Item>
                      ))}
                    </SubMenu>
                  )
                } else {
                  // 没有子菜单的导航
                  return (
                    <Menu.Item key={subMenu.url}>
                      <Link to={`/${subMenu.url}`}>
                        <Icon type={subMenu.icon} /><span className="nav-text">{subMenu.name}</span>
                      </Link>
                    </Menu.Item>
                  ) 
                }
              })
            }
          </Menu>
        </Sider>
        <Layout>
          <Top toggle={this.toggle} collapsed={this.state.collapsed} clear={this.clear} />
          <Contents />
          <Footer />
        </Layout>
      </Layout>
    );
  }

  // 改变主题
  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  // Toggle按钮
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? 'inline' : 'vertical',
    });
  }

  // 恢复到首页
  clear = () => {
    this.setState({
      current: 'index',
    });
  }

  // 处理点击
  handleClick = (e, special) => {
    this.setState({
      current: e.key || special,
    });
  }

}

export default Container;






/* <div className="switch">
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div> */