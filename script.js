const content = document.getElementsByTagName("p");
const plusButton = document.querySelectorAll(".plusClick");
const minusButton = document.querySelectorAll(".minusClick");
const section = document.querySelectorAll('.accordion-btn');
console.log(section[0].children);   // console.log(content.length);
// console.log(plusButton.length); 
// console.log(minusButton.length);
section.forEach((element, index) => {
    element.addEventListener("click",() =>{
        console.log(typeof content[index].style.display);
        console.log(content[index].style.display);
        if(content[index].style.display === 'none' || content[index].style.display === "" ){
            content[index].style.display = 'block';
            minusButton[index].style.display = 'block';
            plusButton[index].style.display = 'none';
        }else{
            content[index].style.display = 'none';
            minusButton[index].style.display = 'none';
            plusButton[index].style.display = 'block';
        }
    });

        
});
