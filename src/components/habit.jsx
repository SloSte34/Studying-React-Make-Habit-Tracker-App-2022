import React, { Component } from 'react';

class Habit extends Component {
  componentDidMount() {
    console.log(`habit : ${this.props.habit.name} is mounted. `);
  }

  componentWillUnmount() {
    console.log(`habit : ${this.props.habit.name} will unmount.`);
  }

  handleIncrement = () => {
    //state object 안에 있는  count를 증가 한 뒤 state를 업데이트 해야 한다.
    //this.state.count ++ ;
    //this.state.count += 1;
    //위와 같은 방법으로 count를 업데이트 하면 React는 state가 업데이트 되었는지 안되었는지 모른다.
    //React state를 업데이트 할 때는 반드시 setState를 써야 한다.
    // this.setState({ count: this.state.count + 1 });
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    // const count = this.state.count - 1; //count를 누를 때 마다 업데이트
    // this.setState({ count: count < 0 ? 0 : count }); //count가 0보다 작으면 0을 count에 할당. 아니면 그대로 count 보여주기.
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    console.log(this.props.habit);
    const { name, count } = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>

        <button
          className='habit-button habit-increase'
          onClick={this.handleIncrement}
        >
          <i className='fas fa-plus-square'></i>
        </button>

        <button
          className='habit-button habit-decrease'
          onClick={this.handleDecrement}
        >
          <i className='fas fa-minus-square'></i>
        </button>

        <button
          className='habit-button habit-delete'
          onClick={this.handleDelete}
        >
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
