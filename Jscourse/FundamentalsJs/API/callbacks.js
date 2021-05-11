//Entendiendo los callbacks en JS
//TENEMOS QUE HACER REQUESTS EN DIFERENTES CALLBACKS 


//-Multiples callbacks
ObtenerPersonaje(1,function(){
    ObtenerPersonaje(2,function(){
        ObtenerPersonaje(3,function(){})
    })
})