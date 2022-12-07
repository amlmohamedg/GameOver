import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(short_description:string,count:number): string {
    return short_description.split("").splice(0,count).join("");
  }

}
