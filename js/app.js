 const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const bookContainer =document.getElementById('book-container');
// search text empty error massage  
const errorMessage = document.getElementById('error');
// booklist length error  
const errorType = document.getElementById('error-handle');
// get book found number  
const bookFoundNumbers = document.getElementById('book-numbers');
errorMessage.style.display ='none'
errorType.style.display ='none';
bookFoundNumbers.style.display ='none';

searchButton.addEventListener('click',function(){
  bookFoundNumbers.textContent='';
     const  searchText=searchInput.value;
    //  input value clear 
     searchInput.value ='';
    
    //  show data clear 
     bookContainer.textContent ='';
     if(searchText===''){
      
       showError()

     }
 else{
  errorMessage.style.display = 'none'
  const url= `http://openlibrary.org/search.json?q=${searchText}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>showBooksData(data))
 }
  
})
// error arrow function  
const showError=()=>{
 errorMessage.style.display = 'block'
 bookFoundNumbers.style.display ='none';
}
const showBooksData= books =>{
  bookFoundNumbers.textContent ='';
    const bookList = books.docs.slice(0,20)
    // console.log(bookList)
    if(bookList.length===0){
      bookFoundNumbers.style.display ='none';
      bookFoundNumbers.textContent=''; 
      errorType.style.display ='block';
     errorType.innerText='No Result Found';
     
    return;
    }
    else{
      errorMessage.style.display = 'none'
      errorType.style.display ='none';
      bookFoundNumbers.style.display ='block';
      bookFoundNumbers.innerText =`Books Found ${bookList.length}`
     
    
    } 
    bookList.forEach(book=>{
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `<div class="card h-100 shadow-lg">
        <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg " class="card-img-top img-fluid" alt="...">
        <div class="card-body">
        <h3 class="card-title ">Book Name:<span class="text-warning"> ${book.title}</span></h3>

           <h4>Author:<span class="text-warning"> ${book.author_name ? book.author_name :'Not Found Author'}</span></h4>

          <h5 class="">Publisher:<span class="text-warning"> ${book.publisher ? book.publisher :'Not Show Publisher'}</span></h5>
          
          <p class="card-text fw-bold">First Published:<span class="text-warning"> ${book.first_publish_year ? book.first_publish_year:'N/a'}</span></p>
        </div>
      </div>`
      bookContainer.appendChild(div)
     
    })
   
    
}