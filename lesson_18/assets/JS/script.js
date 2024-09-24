// Create a Library object:
// The object should have a property books that holds an array of book objects.
// Define methods on the Library object:
// addBook(book): Adds a new book object to the books array.
// checkAvailability(title): Checks if a book with the given title is available.
// borrowBook(title): Changes the isAvailable status of the book to false if the book is available.
// returnBook(title): Changes the isAvailable status of the book to true.
// listAvailableBooks(): Lists all books with isAvailable set to true.

const book1 = { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isAvailable: true };
const book2 = { title: '1984', author: 'George Orwell', isAvailable: true };
const book3 = { title: 'To Kill a Mockingbird', author: 'Harper Lee', isAvailable: false };

class Library{
    constructor(){
        this.books = null;
    }

    addBook(book1 , book2 , book3){

        this.books =  [book1 , book2 , book3];

    }

    checkAvailability(title){

        let arr = this.books;

        let result = arr.filter( i => {
                if (i.title == title) {
                    console.log("book with the given title is available : " + i.isAvailable);

                    return  i.isAvailable;
                }  
            }
        )

        if(result.length > 0){
            return result[0].isAvailable;
        }
        else{
            console.log('book with the given title not available');
        }
    }

    borrowBook(title){
        let arr = this.books;
        let temp = arr.filter( i => {
                    if (i.title == title) {
                        i.isAvailable = false
                        return  console.log("isAvailable status of the book to false if the book is available but if not true : " + i.isAvailable);
                    }
                    // else{
                    //     console.log("isAvailable status of the book to false if the book is available but if not true : " + true);
                    // }
                }
            );

        // if (temp.length == 0) {
        //     console.log("isAvailable status of the book to false if the book is available but if not true : " + true);
        // }

    }

    returnBook(title){
        let arr = this.books;
        let temp = arr.filter( i => {
                    if (i.title == title) {
                        i.isAvailable = true;
                    }
                }
            );
    }

    listAvailableBooks(){
        let arr = this.books;
        let temp = arr.filter( i => {
                    if (i.isAvailable == true) {
                        console.log(i);
                    }
                }
            );

    }

}

let newLibrary = new Library("hello")

newLibrary.addBook(book1 , book2 , book3);

newLibrary.checkAvailability("The Great Gatsby");

newLibrary.borrowBook("The Great Gatsby");

newLibrary.returnBook("To Kill a Mockingbird")

console.log(newLibrary.books);

newLibrary.listAvailableBooks();
