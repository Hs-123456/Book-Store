import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {  
  filteredData : string = '' ;
  Books: any
  title="List of All Books"
  constructor(http: HttpClient) { 
    http.get('http://localhost:5000/book-store/get-all-books').subscribe(res =>{
      this.Books = res;
      console.log(this.Books)
    })
  }

  ngOnInit(): void {
  }

}
