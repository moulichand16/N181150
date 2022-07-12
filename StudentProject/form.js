let f=0;
var pas=" ";
function validation()
{

    
    let a=document.getElementById("first").value;
    if(a.length<4||a.length>20)
    {
        document.getElementById("first").style.border="5px solid red";
        f=f+1;
        setTimeout(funoo,3000);
        
    }
    
    pattern=/^[6-9][0-9]{9}/;
    num=document.getElementById("num").value;
    if(pattern.test(num))
    {
       
    }
    else
    {
        document.getElementById("lb6").innerText="Enter valid number";
        document.getElementById("num").style.border="5px solid red";

    }

    console.log(a); 
    let b=document.getElementById("middle").value;
    if(b.length<4||b.length>20)
    {
        document.getElementById("middle").innerText="Enter a valid name";
        document.getElementById("middle").style.border="5px solid red";
        
        f=f+1;
    }
    let c=document.getElementById("last").value;
    if(c.length<4||c.length>20)
    {
        document.getElementById("last").innerText="enter a valid name";
        document.getElementById("last").style.border="5px solid red";
        f=f+1;
        


    }
    if(a.length>4&&a.length<20&&b.length>4&&b.length<20&&c.length>4&&c.length<20)
    {
        let full=a+" "+b+" "+c;
        document.getElementsByClassName("full").placeholder=full;
    }
    d=document.getElementById("1_1").checked;
    e=document.getElementById("1_2").checked;
    console.log(d);
    console.log(e);
    if(d==e)
    {
        document.getElementById("lb7").innerText="Select one option only";
        document.getElementById("lb7").style.color="red";


    }
   
    console.log(f);
    if(f==0)
    {
        // pas=document.getElementById("2").value;
       

       
        
        
        return true;
    }
    else
    {
        return false;
    }
    

}
function img2()
{
    if(document.getElementById("2").type=='password'){
        document.getElementById("2").type="text";
        document.getElementById("img").src="eye1.png";
        
    }
    else{
        document.getElementById("2").type="password";
        document.getElementById("img").src="eye.png";
    }
}
function full(){
    let y=document.getElementById("first").value;
    let z=document.getElementById("middle").value;
    let a=document.getElementById("last").value;
    
    document.getElementById("fulll").value=y+" "+z+" "+a;
    document.getElementById("first1").innerText=y+" "+z+" "+a;
    let phone=document.getElementById("num").value;
    document.getElementById("first2").value=phone;
    let coun=document.getElementById("ph").value;
    document.getElementById("first3").value=coun;
   
    
   
}
function gend()
{
    let gen=document.getElementById("1_1").checked;
    if(gen==true)
    {
        console.log("hi");
       document.getElementById("first5").innerText="Male";
    }
    if(gen==false)
    {
        document.getElementById("first5").innerText="Female";
    }

}


var hob=document.getElementById("1_3").checked;
var hob1=document.getElementById("1_4").checked;
var hob2=document.getElementById("1_5").checked;
var hob3=document.getElementById("1_6").checked;
hob.addEventListener("keydown",hob);
hob.addEventListener("keydown",hob1);
hob.addEventListener("keydown",hob2);
hob.addEventListener("keydown",hob3);
hob.addEventListener("keydown",hob4);
function hobb()
{
   if(hob)
   {
     var h12="Coding";

   }  
   if(hob1)
   {
     var h13="Singing";
   } 
   if(hob2)
   {
     var h14="Reading Books";
   }
   if(hob3)
   {
    var h15="Piano";
   }
   document.getElementById("first6").innerText=h12+" "+h13+" "+h14+" "+h15;
   

}



function valid()
{
    let pattern=/^[a-z0-9]*\.?([a-z0-9]*)@[a-z]{2,7}((\.)?([a-z]{2}))?\.[a-z]{2,3}$/;
    let mail=document.getElementById("val").value;

   if(pattern.test(mail))
   {
      
    document.getElementById("val").style.border="none";
    document.getElementById("first4").innerText=mail;
   }
   else{
    document.getElementById("val").style.border="5px solid red";
      
    }
}
function age()
{
    let ag=document.getElementById("dob").value;
    alert(ag);
}
function funoo()
{
    document.getElementById("first").style.border="none";
    document.getElementById("middle").style.border="none";
    document.getElementById("last").style.border="none";
    document.getElementById("lb7").innerText=" ";
    document.getElementById("lb7").style.color="none";
    document.getElementById("num").style.border="none";

}
function runn()
{
   document.getElementsByClassName("p1").value=document.getElementById("first");


}
if(validation()==true)
{
    alert("success")
} 
