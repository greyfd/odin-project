let myLibrary = new Array()


function Book (this: any, bookName:string, author:string, pageCount:number, read:boolean) {
  this.bookName = bookName
  this.author = author
  this.pageCount = pageCount
  this.read = read
}

Book.prototype.getInfo = function() {
  return `${this.bookName} by ${this.author}, ${this.pageCount} pages, Read: ${this.read}`
}

let harryPotter = new (Book as any)("Harry Potter", "JK. Rowling", 567, true);


console.log(harryPotter.getInfo())