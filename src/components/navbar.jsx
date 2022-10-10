import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <i className='navbar-logo fas fa-check'></i>
        <span>민수 마트 재고 수량 체크 시스템</span>
        <br />
        <span className='navbar-count'>
          관리 물품 종류 : {this.props.totalStock}
        </span>
        <br />
        <span>재고 존재 물품 종류 : {this.props.onStock}</span>
      </div>
    );
  }
}

export default Navbar;
