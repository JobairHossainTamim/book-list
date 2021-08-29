const titleInput=document.getElementById('title');
const authorInput=document.getElementById('author');
const IsbnInput=document.getElementById('isbn');
const bookList=document.getElementById('book-list');

function submit(){
if(titleInput.value =='' && authorInput.value == '' && IsbnInput.value == ''){
    alert('Please enter all the option of value');
}
else{
    const bookRow=document.createElement('tr');
    const newTitle=document.createElement('th');
    newTitle.innerHTML=titleInput.value;
    bookRow.appendChild(newTitle);
    // 
    const newAuthor=document.createElement('th');
    newAuthor.innerHTML=authorInput.value;
    bookRow.appendChild(newAuthor);
    // 
    const newIsbn=document.createElement('th');
    newIsbn.innerHTML=IsbnInput.value;
    bookRow.appendChild(newIsbn);
    //remove single item
    const remove=document.createElement('th');
    remove.innerHTML =`<button onclick="dataRemove()" class="btn btn-default">Remove Data</button>`;
    bookRow.appendChild(remove);

    // 
    bookList.appendChild(bookRow);
}
   
}
function dataRemove(){
    bookList.addEventListener('click', function(event){
        event.preventDefault();
     event.target.parentNode.parentNode.remove();
    });   
}