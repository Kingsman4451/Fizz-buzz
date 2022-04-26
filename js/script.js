let elForm = document.querySelector(".form");
let elMainNumber = document.querySelector("#big-number");
let elNumber1 = document.querySelector("#number-1");
let elNumber2 = document.querySelector("#number-2");

let listFizz = document.querySelector(".fizz");
let listFizzBuzz = document.querySelector(".fizzbuzz");
let listBuzz = document.querySelector(".buzz");

let clearBtn = document.querySelector(".clear");


let fizzBuzz = [];
let fizz = [];
let buzz = [];


elForm.addEventListener("submit", function(e){
  e.preventDefault();

  listFizzBuzz.innerHTML = "";
  listFizz.innerHTML = "";
  listBuzz.innerHTML = "";

  let mainNumberValue = Number(elMainNumber.value);
  let firstNumberValue = Number(elNumber1.value);
  let secondNumberValue = Number(elNumber2.value);

  if(isNaN(elMainNumber.value)){
    elMainNumber.style.borderColor = "red";
    elMainNumber.value = "";
    return;
  }else{
    elMainNumber.style.borderColor = "#ced4da"
  }

  if(isNaN(elNumber1.value)){
    elNumber1.style.borderColor = "red";
    elNumber1.value = "";
    return;
  }else{
    elNumber1.style.borderColor = "#ced4da"
  }
  
  if(isNaN(elNumber2.value)){
    elNumber2.style.borderColor = "red";
    elNumber2.value = "";
    return;
  }else{
    elNumber2.style.borderColor = "#ced4da"
  }

  for(var i = 1; i <= mainNumberValue; i++) {
    if((i % firstNumberValue == 0) && (i % secondNumberValue == 0)){
      let newFizBuzzLi = document.createElement("li");
      newFizBuzzLi.textContent = i;
      fizzBuzz.push(i);
      listFizzBuzz.append(newFizBuzzLi);
    }
    if(i % firstNumberValue == 0){
      let newFizLi = document.createElement("li");
      newFizLi.textContent = i;
      fizz.push(i);
      listFizz.append(newFizLi);
    }
    if(i % secondNumberValue == 0){
      let newBuzzLi = document.createElement("li");
      newBuzzLi.textContent = i;
      buzz.push(i);
      listBuzz.append(newBuzzLi);
    }
  }
  elNumber1.value = "";
  elNumber2.value = "";
})

clearBtn.addEventListener("click", function(e){
  listFizzBuzz.innerHTML = "";
  listFizz.innerHTML = "";
  listBuzz.innerHTML = "";
  fizzBuzz = [];
  fizz = [];
  buzz = [];
})
