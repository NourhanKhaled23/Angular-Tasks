
## Components

### 1. NavbarComponent

- **Data Binding Types:**
  - **Interpolation:** Dynamically displays the names of menu items, updating automatically when data changes.
  - **Event Binding:** Handles user clicks on menu items, executing the `onLinkClick()` method for appropriate actions.

### 2. VacationRequestsComponent

- **Custom Pipe: HighlightPipe**
  - Highlights search terms within names and salaries, improving user experience.
  
- **Data Binding Types:**
  - **Interpolation:** To display dynamic data within the HTML template, such as showing the name of a vacation request,
       It updates automatically when the underlying data changes.
  - **Property Binding:**  setting the src attribute of an image. 
  - **Event Binding:** To respond to user actions, input events in a search box,(execute functions in response to user interactions, like filtering vacation requests based on 
      the search input).
  - **Two-Way Binding:**.synchronize input values directly with component properties, particularly in forms. This allows changes in the input field, a checkbox to be 
      automaticallyreflected in the component's state and vice versa.
