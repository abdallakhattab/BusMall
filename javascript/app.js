'use strict';

let right = document.getElementById('right');
let middle = document.getElementById('middle');
let left = document.getElementById('left');
let productsNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', ' water-can.jpg', 'wine-glass.jpg'];
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

let rightindex = math();
let middleindex = math();
let leftindex = math();

while (rightindex === middleindex || rightindex === leftindex || middleindex === leftindex) {

  middleindex = math();
  rightindex = math();
}

//left.setAttribute('src' , 'productpics[rightindex].path');
middle.src = productpics[middleindex].path;
left.src = productpics[leftindex].path;
right.src = productpics[rightindex].path;
// right.setAttribute('src' , 'productpics[rightindex].path');
// left.setAttribute('src' , 'productpics[leftindex].path');
// middle.setAttribute('src' , 'productpics[middleindex].path');

console.log(typeof productpics[rightindex].path);
left.addEventListener('click', click);
middle.addEventListener('click', click);
right.addEventListener('click', click);
function click(event) {
  attempts++;
  if (attempts <= maxattempts) {
    if (event.target.id === right) {
      Products.productpics[rightindex].vote++;
      console.log(attempts);
    }
    else if (
      event.target.id === middle) {
      Products.productpics[middleindex].vote++;
    }
    else if (event.target.id === left) {
      Products.productpics[leftindex].vote++;
    } else {
      //renderList();
    }
  }
}



// function renderList() {
//   let ul = document.getElementById('unList');
//   for (let i = 0; i < productsNames.length; i++) {
//     let li = document.createElement('li');
//     ul.appendChild(li);
//     li.textContent = `${productsNames[i].productName} it has ${productsNames[i].votes} Votes`;
//   }

// }
