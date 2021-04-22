'use strict';

let right = document.getElementById('right');
let middle = document.getElementById('middle');
let left = document.getElementById('left');
let productsNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
let productpics = [];
let attempts = 0;
let maxattempts = 25;
let arrayofindex = [];
let arrayofvotes = [];
let arrayofshow = [];

//let stringlsvotes = JSON.parse(lsvotes);


function Products(productName, path) {
  this.productName = productName;
  this.path = path;
  this.vote = 0;
  this.show = 0;
  productpics.push(this);
}

function newProduct() {
  for (let i = 0; i < productsNames.length; i++) {
    new Products(productsNames[i], `../img/${productsNames[i]}`);
  }
  //console.log(productpics);
}
newProduct();

function math() {
  return Math.floor(Math.random() * productpics.length);

}
math();
let rightindex;
let middleindex;
let leftindex;
function renderthreeimages() {
  rightindex = math();
  middleindex = math();
  leftindex = math();

  while (rightindex === middleindex || rightindex === leftindex ||
    middleindex === leftindex || arrayofindex.includes(rightindex) || arrayofindex.includes(middleindex) || arrayofindex.includes(leftindex)) {

    middleindex = math();
    rightindex = math();
    leftindex = math();

  }
  arrayofindex[0] = leftindex;
  arrayofindex[1] = middleindex;
  arrayofindex[2] = rightindex;
  middle.src = productpics[middleindex].path;
  left.src = productpics[leftindex].path;
  right.src = productpics[rightindex].path;
}
//console.log(arrayofindex);
renderthreeimages();

//left.setAttribute('src' , 'productpics[rightindex].path');

// right.setAttribute('src' , 'productpics[rightindex].path');
// left.setAttribute('src' , 'productpics[leftindex].path');
// middle.setAttribute('src' , 'productpics[middleindex].path');

//console.log(typeof productpics[rightindex].path);
let cont = document.getElementById('cont');
cont.addEventListener('click', click);

let btn = document.getElementById('btn');
btn.addEventListener('click', finish);
function finish() {
  renderList();

  cont.removeEventListener('click', click);
  chart();
}

function click(event) {
  attempts++;
  if (attempts <= maxattempts) {
    productpics[rightindex].show++;
    productpics[middleindex].show++;
    productpics[leftindex].show++;
    //arrayofindex.push(rightindex, middleindex, leftindex);
    console.log(arrayofindex);

    if (event.target.id !== 'cont'){
      if (event.target.id === 'right') {
        productpics[rightindex].vote++;

        renderthreeimages();
        console.log(arrayofvotes);

      }
      else if (
        event.target.id === 'middle') {
        productpics[middleindex].vote++;
        renderthreeimages();
      }
      else if (event.target.id === 'left') {
        productpics[leftindex].vote++;
        renderthreeimages();
      }
    }
    setdata();
  }
  else {
    finish;

  }

}


function renderList() {
  let ul = document.getElementById('unlist');
  for (let i = 0; i < productsNames.length; i++) {
    arrayofvotes.push(productpics[i].vote);
    arrayofshow.push(productpics[i].show);
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${productpics[i].productName} it has ${productpics[i].vote} Votes and is has ${productpics[i].show} seens`;
  }
  //console.log(arrayofvotes);
}

function chart(){
  let ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: productsNames,
      datasets: [{
        label: 'no of votes',
        data: arrayofvotes,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
      },{
        label:'no. of Shown',
        data: arrayofshow,
        backgroundColor:[
          'rgb(30,36,195)'
        ],
        borderWidth: 1
      }]
    }
  });
}

//console.log(arrayofvotes);
//console.log(stringlsvotes);
function setdata (){
  console.log(productpics);
  let productpicsstr = JSON.stringify(productpics);
  localStorage.setItem('arrayofpics' , productpicsstr);

}
function getdata(){
  let data = localStorage.getItem('arrayofpics');
  
  if ( data !== null){
    let lsdata = JSON.parse(data);
    productpics = lsdata;
  }
}

getdata();
