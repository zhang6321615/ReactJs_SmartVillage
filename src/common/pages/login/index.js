import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import createHistory from 'history/createHashHistory';

import './index.less'

const history = createHistory();

/**
 * 登录页组件
 * 
 * @class LoginPage
 * @extends {React.Component}
 */
class LoginPage extends React.Component {

    // 组件加载完成
    componentDidMount() {
        // Debug 提示用户名和密码
        this.openNotificationWithIcon('info');
    }

    // 渲染
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="loginpagewrap">
                <div className="box">
                    <p>登录管理中心</p>
                    <div className="loginWrap">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input placeholder="Username" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input type="password" placeholder="Password" />
                                )}
                            </Form.Item>
                            <Button type="primary" htmlType="submit" className="loginBtn">登录</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }

    // 处理提交
    handleSubmit = (e) => {
        e.preventDefault();
        let n = this.props.form.getFieldsValue().username;
        let p = this.props.form.getFieldsValue().password;
        if (n === '123' && p === '123') {
            // 表单的路由处理
            history.push('/index');
        } else {
            this.openNotificationWithIcon('success');
        }
    }

    // 提示用户名和密码
    openNotificationWithIcon = (type) => {
        return notification[type]({
                 message: '用户名和密码',
                 description: '都是：123',
                 duration: 6
               });
    }
}

let Login = Form.create()(LoginPage);
export default Login;