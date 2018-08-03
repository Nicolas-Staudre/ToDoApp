import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";
import "moment/locale/fr";

@Pipe({
  name: 'moment',
})
export class MomentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(date: string) {
    return moment(date, 'YYYY-MM-DD').fromNow();
  }
}
