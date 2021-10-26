// Lesson 8 ============
// const banner = document.querySelector('#book-list');

// console.log('image next sibling is: ', banner.nextSibling);
// console.log('image next el sibling is: ', banner.nextElementSibling);

// console.log('image previous sibling is: ', banner.previousSibling);
// console.log('image previous el sibling is: ', banner.previousElementSibling);

// banner.previousElementSibling.querySelector('p').innerHTML += '<br/> Team Anonymouse'


// Lesson 9 ============
// var btns = document.querySelectorAll("#book-list .delete");

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         console.log(li)
//         li.parentNode.removeChild(li)
//     })
// });


// const link = document.querySelector('#parentId a');

// link.addEventListener('click', function(e){
//     e.preventDefault()
//     console.log('navigation to', e.target.textContent, 'was prevented.')
// })


// Lesson 10 ============
// const list = document.querySelector('#book-list ul');

// list.addEventListener('click', function(e){
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })


// Lesson 11 ============

// //delete books
// const list = document.querySelector('#book-list ul');

// list.addEventListener('click', function(e){
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })

// //add books
// const addForm = document.forms['add-book'];

// addForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     const value = addForm.querySelector('input[type="text"]').value;
//     console.log(value)
// })


// Lesson 12 ============
// //delete books
// const list = document.querySelector('#book-list ul');

// list.addEventListener('click', function(e){
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })

// //add books
// const addForm = document.forms['add-book'];

// addForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     const value = addForm.querySelector('input[type="text"]').value;
    
//     //create elements
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');

//     //add content
//     deleteBtn.textContent = 'delete';
//     bookName.textContent = value;


//     //append to Dom
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
// })


// Lesson 13 ============
// //delete books
// const list = document.querySelector('#book-list ul');

// list.addEventListener('click', function(e){
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })

// //add books
// const addForm = document.forms['add-book'];

// addForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     const value = addForm.querySelector('input[type="text"]').value;
    
//     //create elements
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');

//     //add content
//     deleteBtn.textContent = 'delete';
//     bookName.textContent = value;

//     //add classes
//     bookName.classList.add('name');
//     deleteBtn.classList.add('delete');

//     //append to Dom
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
// })

// // Lesson 14 ============
// //delete books
// const list = document.querySelector('#book-list ul');

// list.addEventListener('click', function(e){
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })

// //add books
// const addForm = document.forms['add-book'];

// addForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     const value = addForm.querySelector('input[type="text"]').value;
    
//     //create elements
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');

//     //add content
//     deleteBtn.textContent = 'delete';
//     bookName.textContent = value;

//     //add classes
//     bookName.classList.add('name');
//     deleteBtn.classList.add('delete');

//     //append to Dom
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
// })

// // Lesson 15 ============
// //delete books
// const list = document.querySelector('#book-list ul');

// list.addEventListener('click', function(e){
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })

// //add books
// const addForm = document.forms['add-book'];

// addForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     const value = addForm.querySelector('input[type="text"]').value;
    
//     //create elements
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');

//     //add content
//     deleteBtn.textContent = 'delete';
//     bookName.textContent = value;

//     //add classes
//     bookName.classList.add('name');
//     deleteBtn.classList.add('delete');

//     //append to Dom
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
// })

// //hide books
// const hideBox = document.querySelector('#hide');

// hideBox.addEventListener('change', function(e){
//     if(hideBox.checked){
//         list.style.display = "none";
//     }else{
//         list.style.display = "initial";
//     }
// })

// // Lesson 16 ============
// //delete books
// const list = document.querySelector('#book-list ul');

// list.addEventListener('click', function(e){
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })

// //add books
// const addForm = document.forms['add-book'];

// addForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     const value = addForm.querySelector('input[type="text"]').value;
    
//     //create elements
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');

//     //add content
//     deleteBtn.textContent = 'delete';
//     bookName.textContent = value;

//     //add classes
//     bookName.classList.add('name');
//     deleteBtn.classList.add('delete');

//     //append to Dom
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
// })

// //hide books
// const hideBox = document.querySelector('#hide');

// hideBox.addEventListener('change', function(e){
//     if(hideBox.checked){
//         list.style.display = "none";
//     }else{
//         list.style.display = "initial";
//     }
// })

// //search-filter books
// const searchBar = document.forms['search-books'].querySelector('input');

// searchBar.addEventListener('keyup', function(e){
//     const term = e.target.value.toLowerCase();
//     const books = list.getElementsByTagName('li')
//     Array.from(books).forEach(function(book){
//         const title = book.firstElementChild.textContent;
//         if(title.toLowerCase().indexOf(term)!= -1){
//             book.style.display = 'block';
//         }else{
//             book.style.display = 'none';
//         }
//     })
// })


// Lesson 17 ============
// //delete books
// const list = document.querySelector('#book-list ul');

// list.addEventListener('click', function(e){
//     if(e.target.className == 'delete'){
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// })

// //add books
// const addForm = document.forms['add-book'];

// addForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     const value = addForm.querySelector('input[type="text"]').value;
    
//     //create elements
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');

//     //add content
//     deleteBtn.textContent = 'delete';
//     bookName.textContent = value;

//     //add classes
//     bookName.classList.add('name');
//     deleteBtn.classList.add('delete');

//     //append to Dom
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
// })

// //hide books
// const hideBox = document.querySelector('#hide');

// hideBox.addEventListener('change', function(e){
//     if(hideBox.checked){
//         list.style.display = "none";
//     }else{
//         list.style.display = "initial";
//     }
// })

// //search-filter books
// const searchBar = document.forms['search-books'].querySelector('input');

// searchBar.addEventListener('keyup', function(e){
//     const term = e.target.value.toLowerCase();
//     const books = list.getElementsByTagName('li')
//     Array.from(books).forEach(function(book){
//         const title = book.firstElementChild.textContent;
//         if(title.toLowerCase().indexOf(term)!= -1){
//             book.style.display = 'block';
//         }else{
//             book.style.display = 'none';
//         }
//     })
// })

// //tabbed content
// const tabs = document.querySelector('.tabs');
// const panels = document.querySelectorAll('.panel');
// tabs.addEventListener('click', function(e){
//     if(e.target.tagName == "LI"){
//         const targetPanel = document.querySelector(e.target.dataset.target);
//         panels.forEach(function(panel){
//             if(panel == targetPanel){
//                 panel.classList.add('active');
//             }else{
//                 panel.classList.remove('active');
//             }
//         })
//     }
// })


// See Lesson 18 at used app.js ============