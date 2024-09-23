import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuItems = [
    { name: 'Home' },
    { name: 'Profiles' },
    { name: 'Reports' },
    { name: 'Vacation Requests' },
    { name: 'Settings' }
  ];

  constructor() {}

  onLinkClick(link: string) {
    console.log(`Navigating to ${link}`);
  }
}
