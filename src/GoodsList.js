import React, { Component } from 'react';
import Item from './Item'
import axios from 'axios'

class GoodsList extends Component {
  constructor(){
    super()
    this.state={
      allItems:[]
    }
  }

  componentDidMount() {
    axios.get('/items').then(
      res => {
        this.setState({
          allItems: res.data.items
        });
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  }

  handleAddingCartItems(item){
    if (this.props.onAddingCartItems) {
        this.props.onAddingCartItems(item)
    }
  }
  
  render() {
      return (
        <div className="GoodsList">
          <table id="GoodsTable">
          <thead>
            <tr>
              <th>条形码</th>
              <th>商品名</th>
              <th>单位</th>
              <th>单价</th>
              <th>优惠信息</th>
              <th>数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody id="tbody">{            
            this.state.allItems.map((item,i) =><Item itemrow={item} key={i} index={i} onAddingCart={this.handleAddingCartItems.bind(this)}/>)
          }
          </tbody>
        </table>
        </div>
      );
  }
}

export default GoodsList;
