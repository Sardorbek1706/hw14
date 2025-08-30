class BookList {
  constructor() {
    this.books = [];
    this.favoriteBook = "";
  }
  addBook(title, author) {
    this.books.push({ title, author });
  }
  setFavoriteBook(title) {
    this.favoriteBook = title;
  }
  getBooksList() {
    this.books.forEach(b => console.log(`${b.title}, muallif: ${b.author}`));
  }
  getFavoriteBook() {
    console.log("Sevimli kitob:", this.favoriteBook);
  }
}

const myBooks = new BookList();
myBooks.addBook("Alkimyogar", "Paulo Coelho");
myBooks.addBook("1984", "George Orwell");
myBooks.setFavoriteBook("1984");
myBooks.getBooksList();
myBooks.getFavoriteBook();
