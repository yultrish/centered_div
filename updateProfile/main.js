// alert("javascript is working")

const uploadButton = document.querySelector('div.img-profile div.iconDiv');
const uploadInput = document.querySelector('.trick-upload input[type=file]');

uploadButton.addEventListener('click', function() {
    uploadInput.click();
});
