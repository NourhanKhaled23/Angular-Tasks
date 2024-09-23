1. NavbarComponent
Data Binding Types:
Interpolation:
Used to dynamically display the names of menu items in the navbar.
Updates automatically when the underlying data changes.
Event Binding:
Handles user clicks on menu items.
Responds appropriately by executing the onLinkClick() method, allowing for logging or other interactions.
2. VacationRequestsComponent
Custom Pipe: HighlightPipe

Purpose:
Created to highlight search terms within the name and salary fields, enhancing user experience by visually distinguishing relevant information.
Data Binding Types:

Interpolation:
Displays dynamic data in the HTML template, such as the name of a vacation request.
Automatically updates when the underlying data changes.
Property Binding:
Sets the src attribute of an image to display employee pictures, ensuring that the correct image is shown based on the component's data.
Event Binding:
Responds to user actions, such as input events in the search box.
Executes functions to filter vacation requests based on the user's search input, allowing for dynamic updates to the displayed list.
Two-Way Binding:
Synchronizes input values directly with component properties, especially in forms.
Changes in an input field (e.g., a checkbox) are automatically reflected in the component's state and vice versa, simplifying data management.
