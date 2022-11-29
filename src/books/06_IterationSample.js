import React, {useState} from 'react';

export default function IterationSample() {
  const [names, setNames] = useState([
    {id:1, text:'snowMan'},
    {id:2, text:'ice'},
    {id:3, text:'show'},
    {id:4, text:'wind'}
  ])

  const [inputText , setInputText] = useState('');
  const [nextId, setNextId] = useState(5);
  const onChange = e => setInputText(e.target.value)

  const nameList = names.map(name => <li key={name.id}  onDoubleClick={() => dataDelete(name.id)} >{name.text}</li>)

  const dataPlus = () => {
    const nextNames = names.concat({
      id:nextId,
      text:inputText
    })
    setNextId(nextId +1)
    setNames(nextNames);
    setInputText("");
  }

  const dataDelete = (deleteId) => {
    const nextNames = names.filter(name => name.id !== deleteId);
    setNames(nextNames);
  }

  // ******************************************
  return (
    <>
      <input type="text" value={inputText} onChange={onChange}/>
      <button type="button" onClick={dataPlus}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};