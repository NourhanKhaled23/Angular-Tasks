#  the NavbarComponent:
# uses Data binding Types:
.Interpolation to display the names of menu items dynamically.
.Event binding to handle user clicks and respond appropriately.


# VacationRequestsComponent :
 # Custom Pipe: HighlightPipe
   .The HighlightPipe is created to highlight search terms in the name and salary fields.
   
  # uses Data binding Types:
  Interpolation:
      .To display dynamic data within the HTML template, such as showing the name of a vacation request,
       It updates automatically when the underlying data changes.
  Property Binding:
     .setting the src attribute of an image. 
  Event Binding:
     .To respond to user actions, input events in a search box.(execute functions in response to user interactions, like filtering vacation requests based on 
      the search input).
  Two-Way Binding:
     .synchronize input values directly with component properties, particularly in forms. This allows changes in the input field, a checkbox to be 
      automaticallyreflected in the component's state and vice versa.

