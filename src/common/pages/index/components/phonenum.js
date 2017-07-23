import React from 'react';
import {Input, Row, Col, Select} from 'antd';

const Search = Input.Search;
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

/**
 * 用户电话号码输入框
 * 
 * @class TelPhoneNum
 * @extends {React.Component}
 */
class TelPhoneNum extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            phonenum: '',
            familys: ['家庭1', '家庭2', '家庭3', '家庭4']
        }
    }

    render() {

        const selectAfter = <Select defaultValue={this.state.familys[0]} style={{ width: 200 }}>
            {
                this.state.familys.map((family, index) => {
                    return (<Option key={this.state.familys.indexOf(family)}>{family}</Option>)
                })
            }
        </Select>
        
        return (
            <Row type="flex" className="rowItem">
	  	  			<Col>
                        <Search addonBefore="用户手机号: " addonAfter={selectAfter} placeholder="请输入手机号" style={{ width: 500 }} onSearch={value => console.log(value)}/>
	  	  			</Col>
  	  		</Row>
        );
    }

    onChange = (value) => {
        console.log(value);
        this.setState({phonenum: value});
    }
}

export default TelPhoneNum;