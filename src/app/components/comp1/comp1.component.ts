import { Component } from '@angular/core';


@Component({
  selector: 'app-comp1',
  standalone: true, // ✅ Important
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {

}
