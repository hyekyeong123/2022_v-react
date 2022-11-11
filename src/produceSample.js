const array = [
  {
    id: 1,
    text:'hello'
  },
  {
    id: 2,
    text:'bye'
  },
  {
    id: 3,
    text:'lalala'
  },
]

// 배열에 새로운 항목 추가
const nextArray = produce(array, draft => {
  draft.push({
    id:4,
    text:'blabla'
  });
  draft[0].text = draft[0].text+'world';
});
