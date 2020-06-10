import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByField'
})
export class SortByFieldPipe implements PipeTransform {

  transform(value: any, args: string): any {
    switch (args) {
      case 'name':
        value.sort((a, b) => (a.name > b.name) ? 1 : -1)
        return value
      case 'date':
        value.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        return value
      case 'forks':
        value.sort((a, b) => (a.name > b.name) ? 1 : -1)
      default: return value
    }
  }

}
