import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <i className='navbar-logo fas fa-check'></i>
        <span>My Habit Tracker</span>
        <br />
        <span className='navbar-count'>
          Total Habit : {this.props.totalHabit}
        </span>
        <br />
        <span>Active Habit : {this.props.activeHabit}</span>
      </div>
    );
  }
}

export default Navbar;
