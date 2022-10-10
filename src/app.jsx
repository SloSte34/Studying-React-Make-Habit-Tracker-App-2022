import React, { Component, Fragment } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: '제로콜라', count: 0 },
      { id: 2, name: '팝콘', count: 0 },
      { id: 3, name: '메론바', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
    console.log(habits);
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: habits });
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter(
      (elements) => elements.id !== habit.id
    );
    this.setState({ habits: habits });
  };

  render() {
    return (
      <Fragment>
        <Navbar
          totalStock={this.state.habits.length}
          onStock={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </Fragment>
    );
  }
}

export default App;
