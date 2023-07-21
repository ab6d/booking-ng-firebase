import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timestampToDate',
    standalone: true
})
export class TimestampToDatePipe implements PipeTransform {
  transform(timestamp: any): Date {
    return timestamp.toDate();
  }
}
