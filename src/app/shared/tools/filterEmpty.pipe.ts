import { Pipe, Injectable, PipeTransform } from '@angular/core';

/**
 * 去除空项
 */
@Pipe({
    name: 'filterEmpty',
    pure: false
})
@Injectable()
export class FilterEmptyPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item != null);
    }
}