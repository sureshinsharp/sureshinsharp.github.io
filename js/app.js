// //EXAMING THE DOCUMENT OBJECT
//
// // console.dir(document);
// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // document.title = "Chane title by script";
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all);
// // console.log(document.all[18]);
// // document.all[19].textContent="hello";
// // console.log(document.forms);
// // console.log(document.links);
// // console.log(document.images);
//
//
// //GET ELEMENT BY ID
// // console.log(document.getElementById('header-title'));
// // var headerTitle = document.getElementById('header-title');
// // var header = document.getElementById('header');
// // console.log(header);
// // headerTitle.textContent = "Hello";
// // headerTitle.innerText = "Good bye";
// // console.log(headerTitle.textContent);
// // console.log(headerTitle.innerText);
// // headerTitle.innerHTML = "<h3>Hello</h3>"
// // header.style.borderBottom = "solid 2px #333";
//
//
// //GET ELEMENT BY CLASS NAME
// // var items = document.getElementsByClassName('list-item');
// // console.log(items);
// // console.log(items[0]);
// // items[1].style.color = "green";
// // items[1].style.fontWeight = "bold";
// // items[1].textContent = "Hello 2";
// //
// // // Wrong
// // // items.style.backgroundColor = "yellow";
// //
// // for(var i=0;i < items.length;i++){
// //   // console.log(i);
// //    items[i].style.backgroundColor = "#efefef";
// // }
//
//
// //GET ELEMENT BY TAG NAME
// // var items = document.getElementsByTagName('li');
// // console.log(items);
// // console.log(items[0]);
// // items[1].style.color = "green";
// // items[1].style.fontWeight = "bold";
// // items[1].textContent = "Hello 2";
// //
// // // Wrong
// // // items.style.backgroundColor = "yellow";
// //
// // for(var i=0;i < items.length;i++){
// //   // console.log(i);
// //    items[i].style.backgroundColor = "#efefef";
// // }
//
//
// //QUERY SELECTER
// // var header = document.querySelector('#header');
// // // console.log(header);
// // header.style.borderBottom = "solid 3px #333";
// //
// // var input = document.querySelector('input');
// // console.log(input);
// // input.value='hello world';
// //
// // var submit = document.querySelector('button[type="button"]');
// // submit.type = "submit";
// // submit.textContent = "SEND";
//
//
// //QUERY SELECTER ALL
// // var title = document.querySelectorAll('.title');
// // console.log(title);
// //
// // title[0].textContent = "Hello";
// //
// // var odd = document.querySelectorAll('li:nth-child(odd)');
// // var even = document.querySelectorAll('li:nth-child(even)');
// //
// // for(var i = 0; i < odd.length; i++){
// //   odd[i].style.backgroundColor = "#efefef";
// //   even[i].style.backgroundColor = "#cccccc";
// // }
//
//
// //TRAVERSING THE DOM
//
// // var itemGroup = document.querySelector('.list-item-group');
// //PARENT NOD
// // console.log(itemGroup);
// // console.log(itemGroup.parentNode);
// // itemGroup.parentNode.style.backgroundColor = "#efefef";
// // console.log(itemGroup.parentNode.parentNode);
//
// //PARENT ELEMENT
// // console.log(itemGroup);
// // console.log(itemGroup.parentElement);
// // itemGroup.parentNode.style.backgroundColor = "#efefef";
// // console.log(itemGroup.parentElement.parentElement);
//
//
// // var itemGroup = document.querySelector('.list-item-group ul');
// //CHILD NODS
// // console.log(itemGroup);
// // console.log(itemGroup.childNodes);
//
// // console.log(itemGroup.children);
// // console.log(itemGroup.children[1]);
// // itemGroup.children[1].style.backgroundColor = "yellow";
//
// //First Child
// // console.log(itemGroup.firstChild);
//
// //First Element child
// // console.log(itemGroup.firstElementChild);
// // itemGroup.firstElementChild.textContent = "Hi this is a text";
//
//
// //Last Child
// // console.log(itemGroup.lastChild);
//
// //Last Element child
// // console.log(itemGroup.lastElementChild);
// // itemGroup.lastElementChild.textContent = "Hi this is a text";
//
// var itemGroup = document.querySelector('.list-item-group');
// //Next Siblings
// // console.log(itemGroup.nextSibling);
//
// //Next Eliment Siblings
// // console.log(itemGroup.nextElementSibling);
// // itemGroup.nextElementSibling.textContent = "Hi this is a text";
//
// //Previous Siblings
// // console.log(itemGroup.previousSibling);
//
// //Previous Eliment Siblings
// // console.log(itemGroup.previousElementSibling);
// // itemGroup.previousElementSibling.textContent = "Hi this is a text";
//
//
// // Create a div
// // var newDiv = document.createElement('div');
// // // add class
// // newDiv.className="hello";
// // // add id
// // newDiv.id="hello";
// // // add attribute
// // newDiv.setAttribute('title','say hello');
// //add text node
// // var newDivText = "Hello div";
// // var newDivText = document.createTextNode("Hello div");
// // newDiv.appendChild(newDivText);
// // newDiv.textContent = newDivText;
// // console.log(newDiv);
// // var container = document.querySelector('.header');
// // var h1 = document.querySelector('.header h1');
//
// // container.insertBefore(newDiv,h1);
//
// // console.log(h1);
//
//
// //EVENTS
//
// var button = document.getElementById("button").addEventListener('click',function(){console.log("123");});
//
// var button = document.querySelector(".btn").addEventListener('click',buttonClick) ;
// //
// //
// //
// function buttonClick(e) {
// //   // console.log("clicked");
// //   // document.getElementById('header-title').textContent="Change header text";
// //   // document.querySelector('.container').style.backgroundColor = "#efefef";
// //
// //   // console.log(e);
// //   // console.log(e.target);
// //   // console.log(e.target.id);
  // console.log(e.target.className);
  // console.log(e.target.classList);
// //   //
// //   // var output = document.getElementById('output');
// //   // output.innerHTML = '<h3>'+e.target.className+'</h3>'
// //   // console.log(e.type);
// //
// //   // console.log(e.clientX);
// //   // console.log(e.clientY);
// //   // console.log(e.offsetX);
// //   // console.log(e.offsetY);
// //
// //   // console.log(e.altKey);
// //   // console.log(e.ctrlKey);
// //   // console.log(e.shiftKey);
// }
//
//
// var button = document.querySelector(".btn");
// var output = document.getElementById('output');
//
// // button.addEventListener('click',runEvent);
// // button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);
//
// var box = document.getElementById("area");
//
// // box.addEventListener('mouseenter',runEvent);
// // box.addEventListener('mouseleave',runEvent);
//
// // box.addEventListener('mouseover',runEvent);
// // box.addEventListener('mouseout',runEvent);
//
// // box.addEventListener('mousemove',runEvent);
//
// // var input = document.querySelector("input[type='text']");
// // input.addEventListener('keydown',runEvent);
// // input.addEventListener('keypress',runEvent);
// // input.addEventListener('keyup',runEvent);
//
// // input.addEventListener('focus',runEvent);
// // input.addEventListener('blur',runEvent);
//
// // input.addEventListener('cut',runEvent);
// // input.addEventListener('copy',runEvent);
// // input.addEventListener('paste',runEvent);
//
// // input.addEventListener('input',runEvent);
//
// // var selecter = document.getElementById('selecter');
//
// // selecter.addEventListener('change',runEvent);
// // selecter.addEventListener('input',runEvent);
//
// // var form = document.querySelector('form');
// // form.addEventListener('submit',runEvent);
//
//
//
// // function runEvent(e) {
// //   e.preventDefault();
// //   console.log("EVENT TYPE : "+e.type);
//   // output.innerHTML = "<h3>"+e.target.value+"</h3>";
//   // output.innerHTML = '<h3>'+e.offsetX+'</h3><h3>'+e.offsetY+'</h3>';
//
//   // box.style.backgroundColor = "rgb("+e.offsetX +","+ e.offsetY +","+ 50+")"
//   // console.log(e.target.value);
//
// // }






//************************************
//*******FORM SUBMIT******************


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit',addItem);

//add items
function addItem(e) {
  e.preventDefault();

  var newItem = document.getElementById('item');

  // create li
  var li = document.createElement('li');
  //add class
  li.className = "list-item";
  //add input text to li in
  li.appendChild(document.createTextNode(newItem.value));
  // add li to item list (ul)
  itemList.appendChild(li);


  // create delete button
  var delBtn = document.createElement('button');
  //add classes to delet buttn
  delBtn.className = "delete";
  //add delete button for text
  delBtn.appendChild(document.createTextNode('X'));

  li.appendChild(delBtn);


  newItem.value = "";

}


//Remove Item
itemList.addEventListener('click',removeItem);

function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      console.log(e.target.parentElement);
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


//Filte item
var filteItem = document.getElementById('filter');

filteItem.addEventListener('keyup',filteItems);

function filteItems(e) {
  //convert to lovercase letter
  var text = e.target.value.toLowerCase();
  //get list item by tag name
  var items = itemList.getElementsByTagName('li');

  // convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
      console.log(item);
    }
    else {
      item.style.display = 'none';
    }
    // console.log(itemName);
  });
}
