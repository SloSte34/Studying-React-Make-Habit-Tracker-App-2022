import React, { Component } from 'react';
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

  handleAdd = (habitName) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: habitName, count: 0 },
    ];
    //...를 이용해서 기존의 함수를 복제하고, 추가로 요소를 추가할 때는 ,를 이용해서 뒤에 이렇게 적으면 된다.
    //id는 Date.now()를 이용해서 클릭하는 시간의 밀리세컨드를 부여한다. 아주 빠르게 클릭하지 않는 이상 id가 겹칠 가능성은 적다.
    this.setState({ habits: habits });
  };

  handleReset = () => {
    //기존의 방법
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });
    // this.setState({ habits: habits });

    //성능을 고려한 방법(필요한 부분만 업데이트)
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits: habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalHabit={this.state.habits.length}
          activeHabit={
            this.state.habits.filter((item) => item.count > 0).length
          }
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
