import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, debounce, debounceTime, map, of, switchAll, switchMap, timer } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './workers.component.html',
  styles: ``
})
export class WorkersComponent {
  static myValidator(control: AbstractControl): ValidationErrors | null {
    if (control.value) {
      return null;
    }
    return { myValidator: 'masz problem' }
  }

  form: FormGroup = new FormGroup({
    username: new FormControl('zya', [
      Validators.required,
      Validators.email,
      WorkersComponent.myValidator
    ], this.checkUsername.bind(this))
  })

  http = inject(HttpClient);

  checkUsername(control: AbstractControl): Observable<any> {
    return timer(1000).pipe(
      switchMap((val) => this.http.get('https://auth.debugger.pl/exists?username=' + control.value)),
    )
    //return this.http.get('https://auth.debugger.pl/exists?username=' + control.value).pipe(debounceTime(1000))
  }

  constructor(
    private dataService: DataService
  ) {

  }
}
