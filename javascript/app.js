'use strict';

let right = document.getElementById('right-img');
let middle = document.getElementById('middle-img');
let left = document.getElementById('left-img');
let productsNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg','chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', ' water-can.jpg' , 'wine-glass.jpg'];
let productpics = [];

function Products (productName , path){
  this.productName = productName;
  this.path = path;
  this.vote = 0;
  this.show = 0;
  productpics.push(this);
}

function newProduct (){
  for(let i = 0 ; i<productsNames.length ; i++ ) {
    new Products( productsNames[i] ,`../img/${productsNames[i]}` );
  }
  console.log(productpics);
}
newProduct();




