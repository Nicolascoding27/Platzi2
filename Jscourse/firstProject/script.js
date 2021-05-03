
var result=document.getElementById('result_text')
var play_button=document.querySelector('.Juega')
//Steps to create the game 

//Storage the function that the user creates
//Create the logic ans test it in the console
// 1. Create an array with the option the machine has
// 2. Create a funcitin that evaluates how's the winner 
// 3. Create a function that adds the text to the var result
 
//How to manipulate the options from the DOM
// var x = document.getElementById("mySelect").options.item(0).text;
//How to add text to the h3 
// document.getElementById("demo").innerHTML = x;
function validate(a,b){
    // result.innerHTML='Holi'
    //a and b have to be strings a=cpu,b=user 
    if(a===b){
        result.innerHTML='Play again'
    }
    else{
        switch(a){
            case 'Piedra':
                switch(b){
                    case 'Papel':
                        result.innerHTML='You win'
                    break;
                    case 'Tijera':
                        result.innerHTML='The machine wins'
                    break;
                } 
            }  
            switch(a){
            case 'Tijera':
                switch(b){
                    case 'Papel':
                        result.innerHTML='The machine wins'
                    break;
                    case 'Piedra':
                        result.innerHTML='You win'
                    break;
                }    
            }
            switch(a){
            case 'Papel':
                switch(b){
                    case 'Piedra':
                        result.innerHTML='The machine wins'
                    break;
                    case 'Tijera':
                        result.innerHTML='You win'
                    break;
                } 
            }   
    }
}

function play(){
    const options_cpu=['Piedra','Papel','Tijera']
    let cpu_option=options_cpu[Math.floor(Math.random()*3)];
    const Piedra= document.getElementById('Piedra')
    // const Piedra= document.getElementById('Piedra').value
    const Papel= document.getElementById('Papel')
    const Tijera= document.getElementById('Tijera')
    // if(Piedra.checked==true){
    //     validate(Piedra.value)
    // }
    const user_options_array=[Piedra,Papel,Tijera]
    // console.log(user_options_array.length)
    for(let i=0;i<user_options_array.length;i++){
        if(user_options_array[i].checked===true){
            const option=user_options_array[i].value
            validate(option,cpu_option)
            // validate(cpu_option,option)
        }
    }
}


play_button.addEventListener('click',function (){play()})