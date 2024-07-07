 
function searchvalue(){


let search=document.getElementById("Search").value;
let lbl=document.getElementById("name");
let lbl1=document.getElementById("name1");
let lbl2=document.getElementById("name2");



fetch(`https://restcountries.com/v3.1/name/${search}`)
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {

    lbl.innerHTML=element.name.official;
    lbl1.innerHTML=element.name.common;
    
    lbl1.innerHTML=`<img src="${element.flags.png}" alt="">`

    
})

console.log(data);
    })



 }
 