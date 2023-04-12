let arr = []

function phoneBook(num){
  let existingEntry = arr.find(entry => entry.number === num);
  if(existingEntry){
    existingEntry.count++;
    arr.splice(arr.indexOf(existingEntry),1);
    arr.unshift(existingEntry);

  }else{
    arr.unshift({ number: num, count: 1 });
  }
  return arr;
}

phoneBook(123);
phoneBook(451);
phoneBook(123);
phoneBook(451);
phoneBook(123);
phoneBook(891);
phoneBook(451);
for (let i = 0; i < arr.length; i++) {
  console.log("Number: " + arr[i].number + ", Count: " + arr[i].count);
}