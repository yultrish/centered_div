// ------------------- wait for all element to load -------------------
$(document).ready(function () {
    console.log("main javascript file is working");
    
// const uploadInput = document.querySelector('.trick-upload input[type=upload]')

// uploadButton.addEventListener('click', function() {
//     console.log('hi')
//     uploadInput.click();
// });
  
const uploadButton = document.querySelector('div.profile-image div.profile-icon-container');
  
    uploadButton.addEventListener("click", function () {
      document.querySelector("input[type=file]").click();
      $("input[type=file]").on("change", function () {
        var input = this;
        if (input.files && input.files[0]) {
          var reader = new FileReader();
  
          reader.onload = function (e) {
            $("#image").attr("src", e.target.result);
          };
  
          reader.readAsDataURL(input.files[0]);
        }
      });
    });

    
    $('.submit').click(function(e){
        e.preventDefault();
    
    // profile form inputs
    let StudentName = $('input#name');
    let schoolName = $('input.school')
    let email = $('input#email')
    let contact = $('input#emerg')
    
    // profile-edit-form inputs
    let firstName = $('input#first-name').val();
    let lastName = $('input#last-name').val()
    let schoolForm = $('input#school-form').val()
    let emailForm = $('input#email-form').val()
    let contactForm = $('input#emerg-form').val()
    
    // taking data from profile-edit-form
    StudentName.val(firstName + ' ' +  lastName);
    schoolName.val(schoolForm)
    email.val(emailForm)
    contact.val(contactForm)
    
    // Reseting profile-edit-form
    $('input#first-name').val('');
    $('input#last-name').val('');
    $('input#school-form').val('');
    $('input#email-form').val('');
    $('input#emerg-form').val('');
    
    })
    
  });
  
  // ------------------- wait for all element to load ends -------------------




