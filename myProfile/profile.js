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

    // const editHeader = document.querySelector('.edit-header');
    // console.log('hi')
    // editHeader.style.display = 'none';
    // const profileEdit = document.querySelector('.profile-edit');

       // ---------------- get window width ----------------
       const width = window.innerWidth;
       console.log(width);
   
       if( width <= 425){

        const editHeader = document.querySelector('.edit-header');
        console.log('hi')
        editHeader.style.display = 'none';
        const profileEdit = document.querySelector('.profile-edit');
          //  alert("Please use a desktop to update your profile");
   
         
          //  const profileEdit = document.querySelector('.profile-edit');
           profileInfo = document.querySelector('.form-edit-info .form-info');
           profileEdit.style.display = 'none';
           
           
           const profileContainer = document.querySelector('.profile-container');
           profileContainer.style.height = '100vh';
           profileContainer.classList.remove('d-none');
           profileContainer.classList.add('d-flex');
       
           // -----------  show edit profile --------------
           profileEdit.classList.remove('d-block');
           profileEdit.classList.add('d-none');

           pencil = document.querySelector('.pencil')
           pencil.addEventListener('click', function(){
            console.log('hi')
            profileEdit.style.display = 'block';
            profileEdit.style.tranistion = 'rotate(360deg)'
            profileForm = document.querySelector('.profile-form')
            profileForm.style.display = 'none'
           })
       }


    $('.submit').click(function(e){
        e.preventDefault();
    alert('sa')
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

    // condition
    if( $('input#first-name').val('')==''||
    $('input#last-name').val('')==''||
    $('input#school-form').val('')==''||
    $('input#email-form').val('')==''||
    $('input#emerg-form').val('')==''
    ){
      alert('Please enter all the required details.')
      return
    }
    
    // Reseting profile-edit-form
    $('input#first-name').val('');
    $('input#last-name').val('');
    $('input#school-form').val('');
    $('input#email-form').val('');
    $('input#emerg-form').val('');

    profileInfo.style.transtion = 'all 5s ease-in-out'
    
    })
    
  });
  
  // ------------------- wait for all element to load ends -------------------




