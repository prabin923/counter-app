let count = 0
function increment(){
  count =count +1
  document.getElementById("count-el").textContent = count;
}
function decrement(){
  count =count - 1
  document.getElementById("count-el").textContent = count;
}
function save (){
  let countStr = count + " - ";
  document.getElementById("save-el").textContent += countStr
  console.log (countStr)

  count = 0
  document.getElementById("count-el").textContent = count;
  console.log(count)
}