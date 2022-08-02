import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'obeservable';
  // bookForm:FormGroup;
  // allbooks:Observable<Book[]>;
  // datasved = false;
  // constructor(private formbulider:FormBuilder, private bookservies:BookService){}
  // ngOnInit() {
  //   this.getsoftBooks();
  //   this.bookForm = this.formbulider.group({
  //     name:['',[Validators.required]],
  //     category:['',[Validators.required]]
  //   });
  // }
  // onFormSubmit(){
  //   this.datasved=false;
  //   let book=this.bookForm.value;
  //   this.createBooks(book);
  //   this.bookForm.reset();

  // }
  // createBooks(book:Book) {
  //   this.bookservies.createBook(book).subscribe(
  //     books=>{
  //       this.datasved=true;
  //       this.getsoftBooks();
  //     }
  //   )
  // }
  // getsoftBooks() {
  //   this.allbooks=this.bookservies.getBookFromStore();
  // }
}
