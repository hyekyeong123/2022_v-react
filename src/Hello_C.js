// 클래스형 컴포넌트로 만들기

import React, {Component} from 'react';
import Hello_F from "./Hello_F";

class Hello_C extends Component{
  static defaultProps = {
    name:'이름 없음'
  }

  render() {
    const {color, isSpecial, name} = this.props;
    // ***********************************************
    return(
      <div style={{color}}>
        {isSpecial && <b>*</b>}
        안녕하세요. {name}
      </div>
    )
  }
}

export default Hello_C;