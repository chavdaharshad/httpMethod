import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
bookUrl="/api/book";
  constructor(private http:HttpClient) { }
  createBook(book:Book) {
   let httpHeaders = new HttpHeaders()
   .set('Content-Type','application/json');
 
   return this.http.post<Book[]>(this.bookUrl, book)
  }

  getBookFromStore():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl)
  }
}
