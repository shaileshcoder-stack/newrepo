import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class CustomPipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
