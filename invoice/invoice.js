// $(document).ready(function (){
//     alert('js is working')
// })
firstName = document.querySelector('#first-name')
formInvoice = document.querySelector('.form-invoice')
invoiceBranch = document.querySelector('.branch-name')
invoicePhone = document.querySelector('.phone')
invoiceEmail = document.querySelector('.email')
invoiceJob = document.querySelector('.invoice-job')
invoiceOwner = document.querySelectorAll('.invoice-owner')
invoiceAccNumber = document.querySelectorAll('.acc-no')

// form selectors
firstName = document.querySelector('#first-name')
lastName = document.querySelector('#last-name')
accountName = document.querySelector('#account-name')
accountNumber = document.querySelector('#account-number')
branchName = document.querySelector('#branch')
profession = document.querySelector('#profession')
phone = document.querySelector('#phone')
email = document.querySelector('#email')
FormDate = document.querySelector('#date')
invoiceInfo = document.querySelector('.invoice-information')
trendbtn = document.querySelector('.trend') 
trends = document.querySelector('.trends')

function ivoiceDisplay(){
    invoiceOwner.forEach(function(owner){
        owner.innerHTML = `${firstName.value}  ${lastName.value}`
    invoiceAccNumber.forEach(function (accNo){
        accNo.innerHTML = `${accountNumber.value}`
    invoicePhone.innerHTML = `Phone: ${phone.value}` 
    invoiceEmail.innerHTML = `Email: ${email.value}` 
    invoiceJob.innerHTML = `Profession: ${profession.value}`
    invoiceBranch.innerHTML = `${branchName.value}`
    invoiceInfo.style.display = 'block' 
    formInvoice.style.display = 'none' 
    })    
    })

    if (
        firstName.value === '' ||
        lastName.value === '' ||
        accountName.value === '' ||
        accountNumber.value === '' ||
        branchName.value === '' ||
        profession.value === '' ||
        phone.value === '' ||
        email.value === '' ||
        FormDate.value === ''
      ) {
        alert('Please enter all the required details.');
        return;

        // invoiceInfo.style.display = 'none'

      }
}
formInvoice.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('form')
    // formInvoice.style.display = 'none'
    ivoiceDisplay()
})

trendbtn.addEventListener('click', function(){
    trends.style.display = 'none'
    invoiceInfo.style.marginTop = 'unset'
    formInvoice.style.marginTop = 'unset'
    
})

// $(document).ready(function(){
//     //   alert('hi')

// firstName = $('#first-name').val()
// formInvoice = $('.form-invoice')
// invoiceBranch = $('.branch-name')
// invoicePhone = $('.phone')
// invoiceEmail = $('.email')
// invoiceJob = $('.invoice-job')
// invoiceOwner = $('.invoice-owner')
// invoiceAccNumber = $('.acc-no')

// branchName = document.$('#branch')
// branchName.text = firstName.val()

// })

// formInvoice.submit(function(e){
//     e.preventDefault()
//     console.log('form')
//     // formInvoice.style.display = 'none'
//     // ivoiceDisplay()

//     branchName = $('#branch')
// branchName.text(firstName)
// })

