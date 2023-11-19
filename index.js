const ul = document.querySelector('ul');
const list_items = Array.from(document.querySelectorAll('nav ul li'));

const toggle_btn = document.querySelector('i.fa-solid');

function move_nav_bar() {
    if(toggle_btn.classList.contains('fa-toggle-on')){
        toggle_btn.classList.remove('fa-toggle-on');
        toggle_btn.classList.add('fa-toggle-off');
        ul.classList.add('nav-hidden');
    }else{
        toggle_btn.classList.remove('fa-toggle-off');
        toggle_btn.classList.add('fa-toggle-on');   
        ul.classList.remove('nav-hidden');
    }
}

function hide_nav_after_click(){
    if(window.innerWidth < 612){
         move_nav_bar();
    }
}

list_items.forEach((list_item)=>{
    list_item.addEventListener('click',move_nav_bar);
})

toggle_btn.addEventListener('click',move_nav_bar);