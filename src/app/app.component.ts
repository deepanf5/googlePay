import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GooglePayComponent } from './components/google-pay/google-pay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GooglePayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular17';
}
