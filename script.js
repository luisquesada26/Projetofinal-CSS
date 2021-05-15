const menuSection = document.querySelector(".menu-section")

const studiesLink = document.getElementById('studiesLink')
const SecStudiesLink = document.getElementById('studies')
const SeccStudiesLink = document.querySelector('.studies')

const experiencesLink = document.getElementById('experiencesLink')
const SecExperiencesLink = document.getElementById('experiences')

const projectsLink = document.getElementById('projectsLink')
const SecProjectsLink = document.getElementById('projects')

const contactLink = document.getElementById('contactLink')
const SecContactLink = document.getElementById('contact')

const form = document.querySelector("#form-contac")

const campoNome = form.querySelector('[name="nome"]')
const campoEmail = form.querySelector('[name="email"]')
const campoAsunto = form.querySelector('[name="asunto"]')
const campoMensaje = form.querySelector('[name="mensaje"]')


// Toggle

menuSection.addEventListener("click",()=>{
    menuSection.classList.toggle("on")
})

// Padding

studiesLink.addEventListener('click', ()=>{
    SecStudiesLink.style.paddingTop = "120px"
    SecExperiencesLink.style.paddingTop = "40px"
    SecProjectsLink.style.paddingTop = "40px"
    SecContactLink.style.paddingTop = "40px"
})

experiencesLink.addEventListener('click', ()=>{
    SecStudiesLink.style.paddingTop = "40px"
    SecExperiencesLink.style.paddingTop = "120px"
    SecProjectsLink.style.paddingTop = "40px"
    SecContactLink.style.paddingTop = "40px"
})

projectsLink.addEventListener('click', ()=>{
    SecStudiesLink.style.paddingTop = "40px"
    SecExperiencesLink.style.paddingTop = "40px"
    SecProjectsLink.style.paddingTop = "120px"
    SecContactLink.style.paddingTop = "40px"
})

contactLink.addEventListener('click', ()=>{
    SecStudiesLink.style.paddingTop = "40px"
    SecExperiencesLink.style.paddingTop = "40px"
    SecProjectsLink.style.paddingTop = "40px"
    SecContactLink.style.paddingTop = "120px"
})

//Formulario

form.addEventListener("submit", function (evento){
    evento.preventDefault()
    
    if(campoNome.value == "" || campoAsunto.value == "" || campoEmail.value == "" || campoMensaje == ""){
        alert("Debe preecher os campos")
    }else if(!validarEmail(campoEmail.value)){
        alert("Email invalido")
    }else{
        alert("Enviado")
    }
  
})

function validarEmail(email) {
    return /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+(\.[a-zA-Z0-9._]+)+$/.test(email);
}



//Api


fetch(`https://api.github.com/users/luisquesada26/repos`)
    .then(resp => resp.json())
    .then(datos => {
       for(let i=0; i<2; i++ ){
           createlinha(datos[i],"body-table" )
       }
    })


function createlinha(dato, id){
    const body = document.querySelector(`#${id}`)
    const linha = document.createElement('tr')
    const nome = document.createElement('td')
    const repositorio = document.createElement('td')

    const link = document.createElement('a')
    link.href = dato.svn_url
    link.textContent = dato.svn_url

    repositorio.appendChild(link)
    
    nome.textContent = dato.name
    
    
    linha.appendChild(nome)
    linha.appendChild(repositorio)
    
    return body.append(linha)
}
