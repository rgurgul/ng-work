import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-superinput',
  standalone: true,
  imports: [],
  template: `
    <div class="border-2 bg-green-300 p-8 text-black" contenteditable="true" #x (input)="changeHandler(x.innerHTML)"></div>
  `,
  styles: ``,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: SuperinputComponent, multi: true }
  ]
})
export class SuperinputComponent implements ControlValueAccessor {
  changeHandler(arg0: string) {
    this.onChange(arg0);
    this.writeValue(arg0);
  }
  value: any;
  onChange!: Function;
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    //throw new Error('3Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('4Method not implemented.');
  }

}
