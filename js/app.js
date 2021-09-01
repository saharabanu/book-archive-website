const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click',function(){
     const  searchText=searchInput.value;
  const url= `http://openlibrary.org/search.json?q=${searchText}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>showBooksData(data))
  
})
const showBooksData= books =>{
    const bookList = books.docs
    bookList.forEach(book=>{
        console.log(book)
    })
    

}