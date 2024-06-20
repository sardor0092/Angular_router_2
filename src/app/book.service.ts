import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  private booksApiUrl = '/api/book';
  errorMsg!: string;


  constructor(private http:HttpClient) { }

  getbooks():Observable<any> {

return this.http.get(this.booksApiUrl)
.pipe(
  catchError(error =>  {



    if(error.error instanceof ErrorEvent){
     this.errorMsg = `Error: ${error.error.message}`;
    }

    else {

      this.errorMsg = this.getServerErrorMessage(error);


   
    }

 return throwError(this.errorMsg)

  })
)


    
  }

  private getServerErrorMessage(error:HttpErrorResponse):string {
    switch(error.status){
      
      case 404: {
        return `Not Found: ${error.message}`;
      }


      case 403: {
        return `Access Denid: ${error.message}`;
      }


      case 500: {
        return `Internal Server error: ${error.message}`;
      }

      default:{
        return `Server: ${error.message}
        }`
      }



    }
  }





}
