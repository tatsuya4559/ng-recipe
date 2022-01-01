import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform<T extends {[k: string]: any}>(value: T[], filterString: string, propName: string): T[] {
    if (value.length === 0) {
      return value;
    }
    return value.filter(item => item[propName] === filterString);
  }

}
