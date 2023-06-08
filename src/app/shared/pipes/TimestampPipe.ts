import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(value: number) {
    return new Date(value * 1000)
  }

}