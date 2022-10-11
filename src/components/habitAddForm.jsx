import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = this.input.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  return (
    <form ref={formRef} className='add-form' onSubmit={onSubmit}>
      {/*form은 button을 누르면 onSubmit이 발동이 된다. submit이 발생이 되면 화면이 refresh된다.*/}
      <input
        ref={inputRef}
        type='text'
        className='add-input'
        placeholder='Habit'
      />
      <button className='add-button'>ADD</button>
    </form>
  );
});

export default HabitAddForm;

/*
pureComponent는 최상위 데이터가 변하지 않으면, 즉 props와 state가 변하지 않으면 render()가 호출되지 않는다.


습관을 추가하기 위해서는 기본적으로 input에 입력이 된 습관을 받아와야한다.
DOM에서는 기본적으로 querySeletor을 통해서 input value를 받아왔다.
React에서는 ref라는 것을 사용한다.
React에서는 DOM을 쓰지 않기 때문에 ref를 사용한다.
*/
// import React, { PureComponent } from 'react';

// class HabitAddForm extends PureComponent {
//   inputRef = React.createRef();
//   //Ref를 쓸 때 쓸 요소 + Ref 이렇게 변수 네이밍을 한다. 이렇게 만들어주고 쓰려는 곳에 ref={} 형식으로 넣으면 된다.

//   formRef = React.createRef();
//   //습관 입력후 form reset을 위해서 Ref를 생성.

//   onSubmit = (event) => {
//     event.preventDefault();
//     //새로고침을 하지 않는다.

//     console.log('submit');

//     console.log(this.inputRef.current.value);
//     //inputRef안에 있는 최근의 value값을 보여준다.

//     const habbitName = this.inputRef.current.value;
//     habbitName && this.props.onAdd(habbitName);
//     //input안에 값이 있다면 props로 들어온 onAdd함수에 습관 이름을 전달해준다.

//     // this.inputRef.current.value = '';
//     //onSubmit이 발동되어서 습관이 추가가 되면 input 부분을 지워준다.

//     this.formRef.current.reset();
//     //이 방법이 좀 더 습관 추가 후 input 부분을 지워주는 정석적인 방법이다.
//   };
//   render() {
//     return (
//       <form ref={this.formRef} className='add-form' onSubmit={this.onSubmit}>
//         {/*form은 button을 누르면 onSubmit이 발동이 된다. submit이 발생이 되면 화면이 refresh된다.*/}
//         <input
//           ref={this.inputRef}
//           type='text'
//           className='add-input'
//           placeholder='Habit'
//         />
//         <button className='add-button'>ADD</button>
//       </form>
//     );
//   }
// }

// export default HabitAddForm;
