export default defineAppConfig({
  pages: [
    'pages/workshop/index',
    'pages/making/index',
    'pages/product/index',
    'pages/order/index',
    'pages/recipe/index',
    'pages/smoke/index',
    'pages/drying/index',
    'pages/sales/index',
    'pages/craft/index'
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#F5F0EB',
    navigationBarTitleText: '徽墨制作坊',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#8C7B6B',
    selectedColor: '#2C1810',
    backgroundColor: '#FFFFFF',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/workshop/index',
        text: '工坊'
      },
      {
        pagePath: 'pages/making/index',
        text: '制墨'
      },
      {
        pagePath: 'pages/product/index',
        text: '成品'
      },
      {
        pagePath: 'pages/order/index',
        text: '订单'
      }
    ]
  }
})
