import { Component } from '@angular/core';

@Component({
  selector: 'app-coordinate-form',
  templateUrl: './coordinate-form.component.html',
  styleUrls: ['./coordinate-form.component.css']
})
export class CoordinateFormComponent {

  onSubmit(): void {
    console.log('hi');
  }
}
