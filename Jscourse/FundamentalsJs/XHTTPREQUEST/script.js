let GET_DATA=document.querySelector('.getdata')
let SHOW_DATA=document.querySelector('.showdata')

//---Creation of the function get data 
const getdata=()=>{
    const objReq=new XMLHttpRequest();
    //--in open the default is true--//
    objReq.open('GET','https://regres.in/api/users');//prepares the open request
    objReq.send()
}
GET_DATA.addEventListener('click',getdata)
// SHOW_DATA.addEventListener('click',showdata)