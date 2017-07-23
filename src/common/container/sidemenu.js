import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import { allMenu } from 'utils/menu'

/**
 * 侧滑导航栏
 * 
 * @class SideMenu
 * @extends {React.component}
 */
class SideMenu extends React.component {

    constructor(props){
        super(props);
        
    }

    render() {
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
    }
}

export default SideMenu;