var btn = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var list = document.querySelectorAll('li');
var delBtn = document.querySelectorAll('li .delete');

delBtn.forEach(function(e) {
  e.addEventListener('click', removeListItem);
})

list.forEach(function(e) {
  e.addEventListener('click', toggleLi);
})

function toggleLi() {
  this.classList.toggle('done'); 
}

function inputLength() {
  return input.value.length;
}

function removeListItem(e) {
  this.addEventListener('click', function(e) {
    var item = e.target.parentNode;
    item.parentNode.removeChild(item);
  })
}

function createDelBtn() {
  var newDelBtn = document.createElement('button');
  var btnTxt = document.createTextNode('X');
  newDelBtn.setAttribute('class', 'delete');
  newDelBtn.appendChild(btnTxt);
  newDelBtn.addEventListener('click', removeListItem);
  return newDelBtn;
}

function createListElement() {
    var li = document.createElement('li');
    li.addEventListener('click', toggleLi); 
//     li.addEventListener('click', removeListItem); removed all lis when removing this new li element
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(createBtn()); 
    ul.appendChild(li); 
    input.value = ''; 
}

function addListFromClick() {
  if(inputLength() > 0) { 
    createListElement() ;
  }
}

function addListFromKeyPress(event) {
  if(inputLength() > 0 && event.keyCode === 13) { 
    createListElement()
  };
}

btn.addEventListener('click', addListFromClick);
input.addEventListener('keypress', addListFromKeyPress);

