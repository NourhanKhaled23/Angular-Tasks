import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../highlight.pipe';
@Component({
 styleUrl:'./vacation-requests.component.css',
  selector: 'app-vacation-requests',
  standalone: true,
  imports: [CommonModule, FormsModule,HighlightPipe],
  templateUrl: './vacation-requests.component.html',
  
})
export class VacationRequestsComponent {
  imageUrl: string = 'assets/employee.jpeg';
  
  searchQuery: string = ''; 
  vacationRequests = [
    { name: "Ahmad Attar",  submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", selected: false },
    { name: "Ahmad Attar",  submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", selected: false },
    { name: "Mohamed Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", selected: false },
    { name: "Ahmad Attar",  submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "6000 AED", selected: false },
    { name: "Ahmad Attar", submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", selected: false },
    { name: "Ahmad Attar",  submittedOn: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "6000 AED", selected: false },
    
    
  ];

  filteredRequests = [...this.vacationRequests];
  selectAllChecked = false; 

  // Filters vacation requests based on the search query

  filterRequests(event: Event) {
    const input = event.target as HTMLInputElement;
    const query = input.value.toLowerCase();

    this.searchQuery = query; 

    this.filteredRequests = this.vacationRequests.filter(request =>
      request.name.toLowerCase().includes(query) ||
      request.salary.toLowerCase().includes(query)
    );
  }
// Toggles the selection of all requests
toggleSelectAll(event: Event) {
  this.selectAllChecked = (event.target as HTMLInputElement).checked;
  this.filteredRequests.forEach(request => {
    request.selected = this.selectAllChecked;
  });
}
}

