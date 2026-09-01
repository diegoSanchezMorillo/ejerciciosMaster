

const box = document.getElementById("name") as HTMLInputElement;
const button = document.getElementById("btn") as HTMLButtonElement;


button.addEventListener("click",() =>{
    console.log(box.value);
})