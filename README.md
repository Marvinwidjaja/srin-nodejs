# srin-nodejs
Run application on http://localhost:5000/

Import [SRIN-Node.postman_collections.json](https://github.com/Marvinwidjaja/srin-nodejs/blob/main/SRIN-Node.postman_collection.json) into Postman to test each API endpoints available


Available API endpoints are 


GET

"http://localhost:5000/books" - Get all available books

GET 

"http://localhost:5000/books/findGenre/$GenreName" - Get books with $GenreName. $GenreName is case-sensitive therefore be careful with capitalization

POST

"http://localhost:5000/books/addBook" - add books with the following JSON raw body</br>(String title, String author, String genre, Integer pages, Integer year_published)
<pre>
{</br>
   "title": "Book_NAME",</br>
   "author": "AUTHOR_NAME",</br>
   "genre": "GENRE", </br>
   "pages": $PAGES,</br>
   "year_published" : $YEAR_PUBLISHED</br>
}
</pre>

PUT

"http://localhost:5000/books/editBook/$id" - edit books by adding $id in the request. Edit books with the same JSON raw body as above</br>(String title, String author, String genre, Integer pages, Integer year_published)
<pre>
{</br>
   "title": "Book_NAME",</br>
   "author": "AUTHOR_NAME",</br>
   "genre": "GENRE", </br>
   "pages": $PAGES,</br>
   "year_published" : $YEAR_PUBLISHED</br>
}
</pre>

DELETE

"http://localhost:5000/books/deleteBook/$id" - delete books by specifying their $id
