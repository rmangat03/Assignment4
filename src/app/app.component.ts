import { Component } from '@angular/core';
import { recipeManagement } from './recipeManagement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [recipeManagement]
})
export class AppComponent {
  title = 'app';
}
