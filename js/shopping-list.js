var btn = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.querySelectorAll('li');
var delBtn = document.querySelectorAll('li .delete');

delBtn.forEach(function(e) {
  e.addEventListener('click', removeListItem);
})

li.forEach(function(e) {
  e.addEventListener('click', toggleLi);
})

function toggleLi() {
  this.classList.toggle('done'); 
}

function inputLength() {
  return input.value.length;
}

function removeListItem(e) { //single click deletes  element
    var item = e.target.parentNode;
    item.parentNode.removeChild(item);
}

/* First click gets the toggle event, then second click would get the delete event
function removeListItem(e) { //Code would require two clicks for delete?
  this.addEventListener('click', function(e) {
    var item = e.target.parentNode;
    item.parentNode.removeChild(item);
  })
}
*/

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
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(createDelBtn()); 
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

