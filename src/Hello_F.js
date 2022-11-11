import React from 'react';

function Hello_F({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello_F.defaultProps = {
  name: '이름없음'
}

export default Hello_F;