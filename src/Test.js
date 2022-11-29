import React from 'react';

export default function Test(name) {

 // ******************************************
  return (
    <div>
      {name}
    </div>
  );
};

Test.defaultProps = {
  name:"default name"
}