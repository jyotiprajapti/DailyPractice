const array = [
  [1, 2],
  [3, 4],
  [5, [6, 7,[90,89]]],
];
function flattenArray (array){
  let flatArray = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (Array.isArray(array[i])) {
  //     flatArray.push(...flattenArray(array[i]));
  //   } else {
  //     flatArray.push(array[i]);
  //   }
  // }
  array.forEach(element => {
    if(Array.isArray(element)){
flatArray.push(...flattenArray(element))
    }else{
      flatArray.push(element)
    }
  });

  return flatArray;
};

const flatArray = flattenArray(array)
console.log("flat array", flatArray)
