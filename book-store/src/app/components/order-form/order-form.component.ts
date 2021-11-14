import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  Books: any
  public status:boolean =  false
  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) { 

   }
   orderBookForm = new FormGroup({
     name: new FormControl(''),
     email: new FormControl(''),
     phone: new FormControl(''),
     address: new FormControl('')
   })

   onSubmit(){
    this.orderBookForm.value.bookId = this.Books[0].id
    this.http.post("https://ancient-castle-99651.herokuapp.com/book-store/order-details",this.orderBookForm.value).subscribe((responseData)=>{
          if(responseData){
              this.status = true
              setTimeout(()=>{
                // this.status = false
                this.router.navigateByUrl(`/`);
              },2000)
          }
    })
   }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.http.get(`https://ancient-castle-99651.herokuapp.com/book-store/get-bookBy-id/${params.id}`).subscribe(responseData =>{
          this.Books = responseData
      })
    })
  }

}
