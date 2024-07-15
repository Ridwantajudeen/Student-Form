
      var currentTab = 0; // Current tab is set to be the first tab (0)
        showTab(currentTab); // Display the current tab
        
        function showTab(n) {
          // This function will display the specified tab of the form...
          var x = document.getElementsByClassName("step");
          x[n].style.display = "block";
          //... and fix the Previous/Next buttons:
          if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
          } else {
            document.getElementById("prevBtn").style.display = "inline";
          }
          if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = "Submit";
          } else {
            document.getElementById("nextBtn").innerHTML = "Next";
          }
          //... and run a function that will display the correct step indicator:
          fixStepIndicator(n)
        }
        
        function nextPrev(n) {
          // This function will figure out which tab to display
          var x = document.getElementsByClassName("step");
          /// Exit the function if any field in the current tab is invalid or not selected
          if (n == 1 && (!validateForm() || !allDropdownsSelected())) return false;
          // Hide the current tab:
          x[currentTab].style.display = "none";
          // Increase or decrease the current tab by 1:
          currentTab = currentTab + n;
          // if you have reached the end of the form...
          if (currentTab >= x.length) {
            // ... the form gets submitted:
            document.getElementById("signUpForm").submit();
            return false;
          }
          // Otherwise, display the correct tab:
          showTab(currentTab);
        }


   
function allDropdownsSelected() {
    // Check if all dropdowns have a selected value
    var dropdowns = document.querySelectorAll("select.custom-select");
    for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].value === "") {
            dropdowns[i].classList.add("invalid"); // Add invalid class to dropdown
            return false;
        } else {
            dropdowns[i].classList.remove("invalid"); // Remove invalid class from dropdown
        }
    }
    return true;
}
        
        function validateForm() {
          // This function deals with validation of the form fields
          var x, y, i, valid = true;
          x = document.getElementsByClassName("step");
          y = x[currentTab].getElementsByTagName("input");
          
          // A loop that checks every input field in the current tab:
          for (i = 0; i < y.length; i++) {
            // If a field is empty...
            if (y[i].value == "") {
              // add an "invalid" class to the field:
              y[i].className += " invalid";
              // and set the current valid status to false
              valid = false;
            }
           
        
        }
          // If the valid status is true, mark the step as finished and valid:
          if (valid) {
            document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
          }
          return valid; // return the valid status
        }
        
        function fixStepIndicator(n) {
          // This function removes the "active" class of all steps...
          var i, x = document.getElementsByClassName("stepIndicator");
          for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
          }
          //... and adds the "active" class on the current step:
          x[n].className += " active";
        }



       
   
    
        $(document).ready(function() {
            // Initially, disable all dropdowns except the first one
            $('#secondDropdown, #thirdDropdown, #fourthDropdown, #fifthDropdown').prop('disabled', true);

            // Listen for change events on the first dropdown
            $('#firstDropdown').change(function() {
                // If a value is selected in the first dropdown
                if ($(this).val()) {
                    // Enable the second dropdown
                    $('#secondDropdown').prop('disabled', false);
                } else {
                    // If no value is selected, disable the second dropdown and subsequent ones
                    $('#secondDropdown, #thirdDropdown, #fourthDropdown, #fifthDropdown').prop('disabled', true);
                }
            });

            // Repeat the same process for the subsequent dropdowns
            $('#secondDropdown').change(function() {
                if ($(this).val()) {
                    $('#thirdDropdown').prop('disabled', false);
                } else {
                    $('#thirdDropdown, #fourthDropdown, #fifthDropdown').prop('disabled', true);
                }
            });

            $('#thirdDropdown').change(function() {
                if ($(this).val()) {
                    $('#fourthDropdown').prop('disabled', false);
                } else {
                    $('#fourthDropdown, #fifthDropdown').prop('disabled', true);
                }
            });

            $('#fourthDropdown').change(function() {
                if ($(this).val()) {
                    $('#fifthDropdown').prop('disabled', false);
                } else {
                    $('#fifthDropdown').prop('disabled', true);
                }
            });
        });
    
