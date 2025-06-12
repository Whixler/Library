let myLibrary = [];

const title = document.getElementById("titleField");
const author = document.getElementById("authorField");
const pages = document.getElementById("pagesField");
const isRead = document.getElementById("readField");

const newBookBtn = document.querySelector("#newBook");
const table = document.querySelector(".table");
const form = document.querySelector("#form");
const addBook = document.querySelector(".addBook")

newBookBtn.addEventListener("click",()=> form.classList.toggle("hide"));
addBook.addEventListener("click", function(e){
  submitForm();
  e.preventDefault();
});

addBookToLibrary("Harry Potter", "J K Rowling", 340, true);
addBookToLibrary("Lord of the rings", "J R Tolken", 900, false);

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
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    console.log({myLibrary})
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

console.log(myLibrary);