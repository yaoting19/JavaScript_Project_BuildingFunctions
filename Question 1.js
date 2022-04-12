//Forming a database using objects and arrays
var book1 = {isbn:'9780744016697', title:'The Legend of Zelda: Tri Force Heroes', author:'Prima Games'
, format:'Hardcover', price:14.99, stock:2};
var book2 = {isbn:'9780099549482', title:'To Kill a Mockingbird', author:'Harper Lee', format:'Paperback'
, price:4.99, stock:3};
var book3 = {isbn: '9780744016680', title:'The Legend of Zelda: Tri Force Heroes', author:'Prima Games',
format:'Paperback', price:9.99, stock:1};
var book4 = {isbn:'9780062409904', title:'Go Set A Watchman', author:'Harper Lee', format:'Audio Book CD', 
price:10.89, stock:2};
var book5 = {isbn:'9780099529125', title:'Catch-22', author:'Joseph Heller', format:'Paperback', 
price:6.29, stock:0};
var book6 = {isbn:'9781785150289', title:'Go Set A Watchman', author:'Harper Lee', format:'Hardcover',
price:9.89, stock:3};
var book7 = {isbn:'9780554579901', title:'A Clash of Kings', author:'George R. R. Martin', format:'Paperback',
price:4.95, stock:5};
var book8 = {isbn:'9781853260001', title:'Pride and Prejudice', author:'Jane Austin', format:'Paperback',
price:1.99, stock:4};
var book9 = {isbn:'9781784871894', title:'Casino Royale', author:'Ian Fleming', format:'Hardcover',
price:6.79, stock:1};
var list = [book1, book2, book3, book4, book5, book6, book7, book8, book9];
//printAllBooks function
function printAllBooks() {
    for (let i=0; i<list.length; i++) {
        let isbnHypens = list[i].isbn;
        isbnHypens = isbnHypens.split('') //Make isbnHypens into an array
        isbnHypens.splice(3,0,'-'); //Putting - into the array
        isbnHypens.splice(5,0,'-');
        isbnHypens.splice(9,0,'-');
        isbnHypens.splice(15,0,'-');
        isbnHypens = isbnHypens.join(''); //Make isbnHypens back to a string
        list[i].isbn = isbnHypens; //Assign the new ISBN value (with'-') into each book
    }
    return console.table(list);
}
//sell function (Looks more professional)
function sell(isbn) {
    isbn = prompt('Input ISBN please').replace(/\W+/g, '');
    for (i=0; i<list.length; i++) {
        if (isbn == list[i].isbn) {
            list[i].stock--;
            break;
        }
    }
    while (i == 9) {
        alert('No books found!');
        isbn = prompt('Input a valid ISBN').replace(/\W+/g, '');
        for (i=0; i<list.length; i++) {
            if (isbn == list[i].isbn) {
                list[i].stock--;
                break;
            }
        }
    }
    if (list[i].stock <0) {
        alert(list[i].isbn + ' is curretnly out of stock');
    } else {
        alert(list[i].stock + 1 + ' books were in stock. Now only ' + list[i].stock + ' of books are left in stock');
    }
    return isbn;
}
//printByTitle function
function printByTitle(title) {
    title = prompt('Input a book\'s title');
    let j = 0;
    for (i=0; i<list.length; i++) {
        let switchCases = title.toLowerCase();
        let temp = list[i].title.toLowerCase();
        if (switchCases == temp) {
            console.table(list[i]);
            j++;
        }
    }
    if (j == 0) {
        alert('This book cannot be found!');
    }
    return title;
}
//printByAuthor function
function printByAuthor(author){
    let j = 0;
    author = prompt('Insert an author\'s name');
    for (i=0; i<list.length; i++) {
        let switchCases = author.toLowerCase();
        let temp = list[i].author.toLowerCase();
        if (switchCases == temp) {
            console.log(list[i].author + ' is the author of \'' + list[i].title + '\'.');
            j++;
        }
    }
    if (j == 0) {
        alert('This author cannot be found!');
    }
    return author;
}
//printOverPrice function
function printOverPrice(price) {
    let j = 0;
    price = prompt('Insert your budget');
    for (i=0; i<list.length; i++) {
        if (price < list[i].price) {
            console.log('\'' + list[i].title + '\' is over ' + price + ' pounds, the price is ' + list[i].price);
            j++;
        }
    }
    if (j == 0) {
        alert('There are no books over this price.');
    }
    return price;    
}
//search function
function search(text) {
    let j = 100;
    text = prompt('Insert the title or author of the book');
    let checkTi = '';
    let checkAu = '';
    for (i=0; i<list.length; i++) {
        let switchCases = text.toLowerCase().replace(/\W+/g, '');
        let tempTi = list[i].title.toLowerCase().replace(/\W+/g, '');
        let tempAu = list[i].author.toLowerCase().replace(/\W+/g, '');
        if (tempTi.indexOf(switchCases) >= 0) {
            console.table(list[i]);
            j = j * 17; //Change the number so we know whether the text is found in title or author.
            checkTi = list[i].title;
        }
        if (tempAu.indexOf(switchCases) >= 0) {
            console.table(list[i]);
            j = j * 13; //Change the number so we know whether the text is found in title or author.
            checkAu = list[i].author;
        }
    }
    if ((j % 17 == 0) && (text != checkTi)) {
        alert('We have found the book. However, you\'re spelling was incorrect. Please check the table.');
    }
    if ((j % 13 == 0) && (text != checkAu)) {
        alert('We have found the author. However, you\'re spelling was incorrect. Please check the table.');
    }
    if (j == 100) {
        alert('We cannot find any author or title that matches.')
    }
    return text;
}
