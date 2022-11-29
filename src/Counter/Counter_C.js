import React, {Component} from "react";
class Counter_C extends Component{

  // this 바인딩 하는 법 1. bind() 이용하기
  // constructor(props) {
  //   super(props);
  //   this.handleIncrease = this.handleIncrease.bind(this);
  //   this.handleDecrease = this.handleDecrease.bind(this);
  // }

  // 상태 정의 V1 : (무조건 객체여야함)
  constructor(props) {
    super(props);


    this.state = {
      counter: 0
    }
  }

  // 상태 정의

  // this 바인딩 하는 법 2. 화살표 함수 사용하기
  handleIncrease = () => {
    this.setState({
      counter: this.state.counter+1
    })
  }

  handleDecrease = () => {
    this.setState({
      counter:this.state.counter-1
    })
  }

  // ************************************************************
  render() {
    return(
      <div>
        <h1>{this.state.counter}</h1>
        <button type="button" onClick={this.handleIncrease}>+1</button>
        <button type="button" onClick={this.handleDecrease}>-1</button>
      </div>
    )
  }
}
export default Counter_C;