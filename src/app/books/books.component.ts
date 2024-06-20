import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {


  books!:Observable<Book[]>;
  errorMsg!:string;

  constructor(private bookService:BookService) {
    this.books =  this.bookService.getbooks()
    .pipe(
      catchError(error => {
        this.errorMsg = error.message;
        return of([]);
      })
    )


  }




}
