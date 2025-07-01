import { Component } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';
import { Comp2Component } from '../comp2/comp2.component';
import { Comp3Component } from '../comp3/comp3.component';
import { Comp4Component } from '../comp4/comp4.component';
import { Comp5Component } from '../comp5/comp5.component';
import { Comp6Component } from '../comp6/comp6.component';
import { Comp7Component } from '../comp7/comp7.component';
import { Comp8Component } from '../comp8/comp8.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Comp1Component,Comp2Component,Comp3Component,Comp4Component,Comp5Component,Comp6Component,Comp7Component,Comp8Component], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
