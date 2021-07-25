const closed = document.querySelector(".closed"),
card = document.querySelector(".card"),
animate = document.querySelector(".pop"),
popUp = document.querySelector(".popup"),
wrapper = document.querySelector(".wrapper"),
header = document.querySelector(".nav-links");

// popUp всплытие и удаления 
closed.addEventListener('click', ()=>{
    wrapper.classList.remove('popup-active');
    popUp.style.display = 'none';
    animate.classList.remove('animate')
    animate.style.display = 'none';
});


// активный класс для сылок
header.addEventListener("mouseover", ()=>{
    for(let i = 0; i < header.children.length; i++){    
        header.children[i].addEventListener("click", () =>{
            for(let j = 0; j < header.children.length; j++){
                header.children[j].classList.remove("active");
            }
            header.children[i].classList.add("active");
        })
    }
})


//  счетчик для вызова poup
const headerClick = () => {
    let count = 1;
    header.addEventListener("click", ()=>{
        console.log(count);
        if(count === 3){
            wrapper.classList.add('popup-active');
            popUp.style.display = 'flex';
            animate.classList.add('animate')
            animate.style.display = 'block';
            return count = 1;
        }    
        count = count + 1;
        
    })
}
headerClick();

