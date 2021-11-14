import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { FilterPipe } from './filter.pipe';
const routes : Routes = [
  { path: "", component: BooksListComponent},
  { path: "order-form-component/:id", component: OrderFormComponent}
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksListComponent,
    OrderFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
