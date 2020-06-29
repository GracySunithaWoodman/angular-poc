import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenate'
})
export class ConcatenatePipe implements PipeTransform {

  transform(value: string, value2?: string): string {
    return value + " " + value2;
  }

}
