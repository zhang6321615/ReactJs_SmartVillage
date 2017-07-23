import React from 'react';
import { Row, Col, Card, Timeline, Icon, Tabs } from 'antd';
// import EchartsViews from './EchartsViews';
// import EchartsProjects from './EchartsProjects';
import b1 from 'images/minren.jpg';
import b2 from 'images/zuozu.jpg';
import b3 from 'images/xiaoying.jpg';
import b4 from 'images/chutian.jpg';
import PhoneNum from './components/phonenum';

// Tab切换小组件
import Age from '../tools/components/age'
import Bmi from '../tools/components/bmi'
import Salary from '../tools/components/salary'
import House from '../tools/components/house'

import './index.less'

const TabPane = Tabs.TabPane

/**
 * 首页界面
 * 
 * @class index
 * @extends {React.Component}
 */
class index extends React.Component {

    // 渲染
    render() {
        return (
            <div>
                <PhoneNum/>
                {/* gutter 为栅格间隔  */}
                <Row gutter={16}>
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <div className="pb-m">
                                    <h3>家庭信息</h3>
                                    <small>2个待完成，1个正在进行中</small>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <Timeline>
                                    <Timeline.Item color="#108ee9">
                                        <p>更多模块开发中</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <p>使用ts重构(正在开发)</p>
                                    </Timeline.Item>
                                    <Timeline.Item color="green">引人Redux,Fetch</Timeline.Item>
                                    <Timeline.Item color="green">引人Less,React-Router(4.x)</Timeline.Item>
                                    <Timeline.Item color="green">初始化项目</Timeline.Item>
                                </Timeline>
                            </Card>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="cloud-box">
                            <Card>
                                <div className="pb-m">
                                    <h3>实时数据</h3>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">鸣人</a>
                                            <span className="text-muted">终于当上火影了！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={b2} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">佐助</a>
                                            <span className="text-muted">吊车尾~~</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={b3} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">小樱</a>
                                            <span className="text-muted">佐助，你好帅！</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a className="pull-left w-40 mr-m">
                                            <img src={b4} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a className="block">雏田</a>
                                            <span className="text-muted">鸣人君。。。那个。。。我。。喜欢你..</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <div className="cloud-box">
                            <Card>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="t1" key="1"><Age /></TabPane>
                                    <TabPane tab="t2" key="2"><Age /></TabPane>
                                    <TabPane tab="t3" key="3"><Salary/></TabPane>
                                    <TabPane tab="t4" key="4"><Bmi/></TabPane>
                                    <TabPane tab="t5" key="5"><House/></TabPane>
                                </Tabs>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default index;