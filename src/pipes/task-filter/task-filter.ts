import { Pipe, PipeTransform } from '@angular/core';
import {Task} from "../../models/task";
import * as _ from "lodash";


@Pipe({
  name: 'taskFilter',
  pure:false,
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Task[], status: boolean): Task[] {
    return _.filter(tasks, { 'status' : status });
  }
}
