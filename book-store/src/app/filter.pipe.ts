import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filteredData: string, propName: string): any[] {
    const bookTitle:any = [];
    if(!value || filteredData === '' || propName === ''){
      return value;
    }
    value.forEach((book:any)=>{
     if(book[propName].trim().toLowerCase().includes(filteredData.toLowerCase())){
       bookTitle.push(book);
     }
    })
   return bookTitle;
  }

}
