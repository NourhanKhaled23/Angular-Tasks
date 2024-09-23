import { Component } from '@angular/core';
import { VacationRequestsComponent } from './vacation-requests/vacation-requests.component';
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  standalone: true, 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent ,VacationRequestsComponent] 
})
export class AppComponent {
  title = 'Your App Title';
}
