const sidemenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

const themetoggler = document.querySelector('.theme-toogler');

menuBtn.addEventListener('click',()=>{
    sidemenu.style.display ="block"
})
closeBtn.addEventListener('click',()=>{
    sidemenu.style.display ="none"
})

themetoggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables')
    themetoggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themetoggler.querySelector('span:nth-child(2)').classList.toggle('active')

})