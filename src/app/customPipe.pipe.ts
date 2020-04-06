import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'add', pure: false })
export class CustomPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return value + exponent;
  }
}
