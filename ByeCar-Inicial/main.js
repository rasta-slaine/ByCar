// Aqui estou pegando as ids do elementos 
const NextArrow = document.querySelector("#rightArrow")
const PreviousArrow = document.querySelector("#lefttArrow")
const CloseBtn = document.querySelector('#close')
const OpenBtn = document.querySelector('#open')
let Slide1 = document.querySelector("#img1")



//Essa função vai fazer a mudança do slide 
function ToggleSlide() {
    let img = document.querySelector("#img1").src
      
    if (img.indexOf('moto1.svg')!=-1) {
        //mudo o conteudo do slide 
        document.getElementById("title1").innerHTML ="Honda CB 500X"
        document.getElementById('img1').style.width="200px"
        document.getElementById('img1').src  = 'img/moto2.svg'
        
    }
     else {
        //mudo o conteudo do slide 
       document.getElementById("title1").innerHTML ="Scooter Elétrica Voltz EV1"
       document.getElementById('img1').style.width="200px"
       document.getElementById('img1').src = 'img/moto1.svg'; 
   }

}

//essa funcção vai abrir o modal 
function OpenModal(){
    // essa parte já abre o modal ***************************
    let modalEl = document.querySelector('#modal')
    modalEl.style.display ='block'
    //***************************************************/

    //Essa parte eu estou fazendo um checagem pra ver se o src 
    // atual do slide é igual ao do modal pra deixar o conteudo do modal igual ao do slide
    let imgEl = document.getElementById('img1').src
    let img2El = document.getElementById('modalImg').src

    if(imgEl.indexOf('moto1.svg') != -1){
        //mudo o conteudo do modal
        let ModalTextEl = document.getElementById('modalP')
        let ModalTitleEl = document.getElementById('modalh3')

        document.getElementById('modalImg').src = 'img/moto1.svg'
        ModalTextEl.innerHTML = 'O câmbio de 6 marchas da Voltz EV1 oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!'
        ModalTitleEl.innerHTML = 'Scooter Voltz EV1'   


    }else {
        //mudo o conteudo do modal
        document.getElementById('modalImg').src
        let ModalTextEl = document.getElementById('modalP')
        let ModalTitleEl = document.getElementById('modalh3')

        document.getElementById('modalImg').src = 'img/moto2.svg'
        ModalTextEl.innerHTML = 'O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!'
        ModalTitleEl.innerHTML = 'Honda CB 500X'     
    }


}

//Essa funcão eu fecho o modal
function CloseModal(){
    let modalEl = document.querySelector('#modal')
    modalEl.style.display ='none'
}


// coloco o tempo pro slide rodar sozinho
setInterval(ToggleSlide,40000)

// colocos os eventos nos elementos 
NextArrow.addEventListener("click",ToggleSlide)
PreviousArrow.addEventListener("click",ToggleSlide)
CloseBtn.addEventListener("click",CloseModal)
OpenBtn.addEventListener("click",OpenModal)

let imgEle = document.getElementById('img1').src

console.log(imgEle.indexOf('moto1.svg'))