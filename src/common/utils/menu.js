export const allMenu = [{
    name: '首页',
    url: 'index',
    icon: 'home',
  }, {
    name: '商城管理',
    url: 'music',
    icon: 'shop',
    children: [{
      name: '订单管理',
      url: 'music'
    }, ]
  }, {
    name: '物业管理',
    url: 'tool',
    icon: 'tool',
    children: [{
        name: '小应用',
        url: 'tools'
      },
      {
        name: '富文本编辑器',
        url: 'editor'
      },
      {
        name: '待办事项',
        url: 'todoList'
      },
    ],
  }, {
    name: '广告管理',
    url: 'pic',
    icon: 'edit',
    children: [{
      name: '时光相片',
      url: 'album'
    }, ],
  }, {
    name: '数据中心',
    url: 'search',
    icon: 'search',
    children: [{
      name: '搜索引擎',
      url: 'searchEngine'
    }, ],
  }, {
    name: '用户管理',
    url: 'dev',
    icon: 'apple-o',
    children: [{
      name: '更多模块开发中',
      url: 'todo'
    }, ],
  }, {
    name: '内容管理',
    url: 'follow',
    icon: 'schedule',
     children: [{
      name: '搜索引擎',
      url: 'searchEngine'
    }, ]
  }, {
    name: '友邻管理',
    url: 'friend',
    icon: 'team',
    children: [{
      name: '搜索引擎',
      url: 'searchEngine'
    }, ]
  }, {
    name: '生活服务',
    url: 'shenghuo',
    icon: 'heart-o',
    children: [{
      name: '搜索引擎',
      url: 'searchEngine'
    }, ]
  },{
    name: '积分商城',
    url: 'jifen',
    icon: 'calculator',
    children: [{
      name: '搜索引擎',
      url: 'searchEngine'
    }, ]
  },{
    name: '分成管理',
    url: 'fencheng',
    icon: 'pay-circle-o',
    children: [{
      name: '搜索引擎',
      url: 'searchEngine'
    }, ]
  },{
    name: '系统设置',
    url: 'system',
    icon: 'setting',
    children: [{
      name: '搜索引擎',
      url: 'searchEngine'
    }, ]
  }
  
]
