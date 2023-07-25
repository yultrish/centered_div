

window.addEventListener('load', () => {

    console.log('variable.js is working');

    const switched = document.querySelector('.switch');
    
    switched.addEventListener('click', function(e) {
        console.log('hello')
        e.preventDefault();

        document.body.classList.toggle('theme-dark');
    });

    const width = window.innerWidth;
    
    menu = document.querySelector('.menu')
    menu.addEventListener('click', function(){
        list = document.querySelector('ul')
        console.log('list')
        if(width <= 800){
            list = document.querySelector('ul')
            list.style.display = 'block'  
         }
         return;

    })


});