//array: is a group of element arranged in a sequential manner

var arr = [];
console.log(arr);
console.log(arr.length);
arr[0] = 10;
arr[1] = 'raju'
arr[2] = true
arr[3] = 4.5
arr[4] = null;
console.log(arr);
console.log(arr.length);
console.log(arr[3]);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.log('==================')
var fruits = ['mango', 'apple', 'orange', 'papaya'];
console.log(fruits.length)
console.log(fruits)
fruits[4] = 'guava'
console.log(fruits)
fruits[3] = 'kiwi'
console.log(fruits)
for (var i in fruits) {
    console.log(i + ' ' + fruits[i])
}

console.log('==================')
var books = [];
books[0] = 'Java';
console.log(books)
books.push('JavaScript')
console.log(books)
books.push('C++')
console.log(books)
books.forEach(book => {
    console.log(book)
})

console.log('==================')
for(var b of books){
    console.log(b)
}