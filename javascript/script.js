

let myLibrary = [
    new Book("jr higgins", "Road to sheep", "a book about sheeps", false), 
    new Book("jr ", "Road to blood", "a book about bloods. aaaaaa. sdsdsdsdsd. sdsdsdsdsdsdsdsdssd.  sdsdssddds asasasas", false), 
];

function Book(author, title, description, read) {
  // the constructor...
//   this.id = id;
  this.author = author;
  this.title = title;
  this.description = description;
  this.read = read;

}

function addBookToLibrary() {
  // do stuff here
    let addBook = document.querySelector("#add__button");
    let form = document.querySelector("#add__form");
    let author = document.querySelector("#author");
    let title = document.querySelector("#title");
    let description = document.querySelector("#description");
    let subButton = document.querySelector("#add__content");
    addBook.addEventListener("click", () => {
        
        if(form.classList.contains("form__hidden")) {
            form.classList.remove("form__hidden");
            form.classList.toggle("form__show");
        } else {
            form.classList.add("form__hidden");
            form.classList.toggle("form__show");
        }
        
        

    });


    subButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(author.value);
        console.log(title.value);
        console.log(description.value);
        myLibrary.push(new Book(author.value, title.value, description,value));
        displayBook();
    });

    


}


addBookToLibrary();

function displayBook() {
    
    // createContainer();
    // createContainer(myLibrary[0]);
    // createContainer(myLibrary[1]);

    myLibrary.forEach((elem) => {
        createContainer(elem);
        
    })



}

function createContainer(data) {
    // data.read = false;
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let h4 = document.createElement("h4");
    let del = document.createElement("button");
    let read = document.createElement("button");
    let divTwo = document.createElement("div");

    h2.innerText = data.title;
    p.innerText = data.description;
    h4.innerText = data.author;
    read.innerText = "Not Read";
    del.innerText = "Remove";
    del.setAttribute("id", "delete");
    div.classList = "book__style";
    divTwo.classList = "inside__buttons";
    divTwo.appendChild(read);
    divTwo.appendChild(del);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(h4);
    div.appendChild(divTwo);
    
    document.querySelector("#books").appendChild(div);
    read.addEventListener("click", (e) => {
        data.read = !data.read;
        div.classList.toggle("read");
        console.log(data.read);
        read.innerText = data.read ? "Finished" : "Not Read";
    });
    del.addEventListener("click", (e) => {
       div.remove();
    });

}





displayBook();