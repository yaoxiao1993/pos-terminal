# pos-terminal
### 需求描述
我们需要使用实现前端，具体页面样式可以自定义  
页面需求：
1. 列表页面
  - 页面上有列表，所有商品的信息(名称，单位，单价，优惠信息)
  - 每个商品可以加入购物车，并且可以选择加入购物车的商品数量。
2. 购物车页面
  - 从列表页面可以进入购物车页面，购物车页面列出所有你选择的商品,页面底部有确认购买按钮。
  - 确认购买后，将购物车内的信息传到后端。


### 作业要求
- 页面的编写需要使用react框架，前后端交互用express框架

### 如何使用
作业仓库由react-create-app初始化，
你可以通过以下命令启动：
#### 安装依赖
npm install
#### 运行
1. 安装mongoDB，创建test数据库，创建items collection，并向items中插入如下数据：
```
{ barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00, promotion: '买二送一' },
{ barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00, promotion: '买二送一' },
{ barcode: 'ITEM000002', name: '苹果', unit: '斤', price: 5.50, promotion: '无' },
{ barcode: 'ITEM000003', name: '荔枝', unit: '斤', price: 15.00, promotion: '无' },
{ barcode: 'ITEM000004', name: '电池', unit: '个', price: 2.00, promotion: '无' },
{ barcode: 'ITEM000005', name: '方便面', unit: '袋', price: 4.50, promotion: '买二送一'
```
2. 开启后台express服务器
```
node index.js
```
3. 运行react
```
npm start
```
