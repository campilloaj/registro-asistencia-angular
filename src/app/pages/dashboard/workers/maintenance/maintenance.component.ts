import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, MatInputModule, MatAutocompleteModule, MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.css'
})
export class MaintenanceWorkerComponent {

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  //filteredOptions:string[] = ['One', 'Two', 'Three']  (input)="_filter($event)"
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

 /* public _filter(e: Event) {
    const filterValue = e.target as HTMLInputElement;
    console.log( filterValue.value)
    this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(filterValue.value));
  }*/

    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

  public saveWorker = ( ) => {
    console.log(this.myControl.value)
  }

}
