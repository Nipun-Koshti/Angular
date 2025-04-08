import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { VariableComponent } from './component/variable/variable.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First-app';
}
