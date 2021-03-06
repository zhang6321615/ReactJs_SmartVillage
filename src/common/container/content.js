import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'

import index from 'pages/index'
import follow from 'pages/follow'
import Tools from 'pages/tools'
import Music from 'pages/music'
import Todo from 'pages/todo'
import Album from 'pages/album'
import Editor from 'pages/editor'
import TodoList from 'pages/todoList'
import Search from 'pages/search'

import './content.less'

const { Content } = Layout

/**
 * 主内容展示容器
 * 
 * @class Contents
 * @extends {React.Component}
 */
class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
        <Route path="/index" component={index} />
        <Route path="/follow" component={follow} />
        <Route path="/tools" component={Tools} />
        <Route path="/music" component={Music} />
        <Route path="/todo" component={Todo} />
        <Route path="/album" component={Album} />
        <Route path="/editor" component={Editor} />
        <Route path="/todoList" component={TodoList} />
        <Route path="/searchEngine" component={Search} />
      </Content>
    );
  }
}

export default Contents;