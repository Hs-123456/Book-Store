import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {  
  filteredData : string = '' ;
  Books: any
  title="List of All Books"
  constructor(private route: Router, http: HttpClient) { 
    http.get('http://localhost:5000/book-store/get-all-books').subscribe(res =>{
      this.Books = res;
      console.log(this.Books)
    })
  }

  changeRoute(id: any){
    this.route.navigateByUrl(`/order-form-component/${id}`);
  
  }

  ngOnInit(): void {
   
  }

}
