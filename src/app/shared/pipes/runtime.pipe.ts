import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const minutes = value % 60;
    const hours = (value - minutes) / 60;
    return `${hours}h ${minutes}m`;
  }
}
