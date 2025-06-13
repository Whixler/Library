let myLibrary = [];

const title = document.getElementById("titleField");
const author = document.getElementById("authorField");
const pages = document.getElementById("pagesField");
const isRead = document.getElementById("readField");



const newBookBtn = document.querySelector("#newBook");
const table = document.querySelector(".table");
const form = document.querySelector("#form");
const addBook = document.querySelector(".addBook");
const tbody = document.querySelector("tbody");

newBookBtn.addEventListener("click",()=> form.classList.toggle("hide"));
addBook.addEventListener("click", function(e){
  submitForm();
  e.preventDefault();
});

addBookToLibrary("Harry Potter", "J K Rowling", 340, true);
addBookToLibrary("Lord of the rings", "J R Tolkien", 900, false);
addToTable();

function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function submitForm(){
  addBookToLibrary(titleField.value, authorField.value, Number(pagesField.value), readField.checked);
  form.reset();
  form.classList.toggle("hide");
  addToTable();
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    console.log({myLibrary})
}

function addToTable(){
  tbody.innerHTML = "";  
  myLibrary.forEach(item => {
    const tr = tbody.insertRow();
    tr.insertCell().innerText = item.title;
    tr.insertCell().innerText = item.author;
    tr.insertCell().innerText = item.pages;
    tr.insertCell().innerText = item.isRead;
    tr.insertCell().innerHTML = "<input type=\"checkbox\"/>";
    const button = document.createElement("button");
    button.textContent = "Delete";
    tr.insertCell().appendChild(button);
  })
}


