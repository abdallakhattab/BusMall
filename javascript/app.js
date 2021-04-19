'use strict';

let right = document.getElementById('right');
let middle = document.getElementById('middle');
let left = document.getElementById('left');
let productsNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
let productpics = [];
let attempts = 0;
let maxattempts = 25;


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
  console.log(productpics);
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

  while (rightindex === middleindex || rightindex === leftindex || middleindex === leftindex) {

    middleindex = math();
    rightindex = math();
  }
  middle.src = productpics[middleindex].path;
  left.src = productpics[leftindex].path;
  right.src = productpics[rightindex].path;
}
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
}

function click(event) {
  attempts++;
  if (attempts < maxattempts) {
    productpics[rightindex].show++;
    productpics[middleindex].show++;
    productpics[leftindex].show++;
    if (event.target.id === 'right') {
      productpics[rightindex].vote++;
      renderthreeimages();
      console.log(productpics[rightindex].vote);
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
  else {
    finish;
  }
}


function renderList() {
  let ul = document.getElementById('unlist');
  for (let i = 0; i < productsNames.length; i++) {

    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${productpics[i].productName} it has ${productpics[i].vote} Votes and is has ${productpics[i].show} seens`;
  }

}
