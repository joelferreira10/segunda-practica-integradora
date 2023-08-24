
console.log("hola mundo");
const form=document.getElementById('form')
console.log(form);
const email=document.getElementById('email')
const password=document.getElementById('password')
const btn=document.getElementById("boton");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("paso por aca");
    fetch('http://localhost:8080/users/loginfront',{
        
        method:'POST' ,
        body:JSON.stringify({
            email:email.value,
            password:password.value
        }),
        headers:{
        "content-type":"application/json"}
    })
        .then(response=>response.json())
        .then(response=>{
            console.log("respuesta",response);
        })
        .catch(error=>console.log(error))
    })