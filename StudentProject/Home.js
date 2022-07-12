
var names=["Moulichand"];
var pass=["1234"];
var idnum2=["N181150"];
var mails=["moulichand918@gmail.com"];
var numbers=["6309785374"];
var genders=["male"];
var dobs=["16-06-2003"];


var cout=0;

function navch(){
// {alert("hi")
    if(document.getElementById("navq").style.display=="none")
    {
        document.getElementById("navq").style.display="block";
        document.getElementById("vetnav").style.display="none";
        cout=20;
        document.getElementById("tab").style.zIndex=1;


    }
   else
    {
        document.getElementById("navq").style.display="none";
        document.getElementById("vetnav").style.display="block";
        cout=0
        document.getElementById("tab").style.zIndex=-1;

    }
    console.log(cout);
}
let imgs=["bck1.jpg","bckp.jpg","blp.jpg","blue.jpg","div1.jpg"];
let i=0;
function imgsl()
{
    if(i==0)
    {
        i=4;
    }
    else{
        i--;
    }
    document.getElementById("imgb").src=imgs[i];
    
}
function imgsl1()
{
    if(i==4)
    {
        i=0;
    }
    else
    {
        i++;
    }
    document.getElementById("imgb").src=imgs[i];
}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those wo don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  function gmap()
  {

    document.getElementById("div-2").style.display="none";
    document.getElementById("fff").style.display="none";
    document.getElementById("mapp").style.display="block";
    document.getElementById("tab").style.display="none";
    document.getElementById("kk").style.display="none";
    document.getElementById("division1").style.display="none";
    document.getElementById("dashboard").style.display="none";
    
    document.getElementById("login3").style.display="none";
    document.getElementById("login4").style.display="none";
    document.getElementById("login5").style.display="none";
    

  }
  function normal()
  {
    document.getElementById("login4").style.display="none";
    document.getElementById("login5").style.display="none";
    document.getElementById("div-2").style.display="block";
    document.getElementById("fff").style.display="block";
    document.getElementById("mapp").style.display="none";
    document.getElementById("tab").style.display="block";
    document.getElementById("kk").style.display="inline";
    document.getElementById("division1").style.display="none";
    document.getElementById("login3").style.display="none";
    document.getElementById("dashboard").style.display="none";
  


  }
  function signup(){
    document.getElementById("div-2").style.display="none";
    document.getElementById("fff").style.display="none";
    document.getElementById("mapp").style.display="none";
    document.getElementById("tab").style.display="none";
    document.getElementById("kk").style.display="none";

    // document.getElementById("mist").style.display="block"
    document.getElementById("division1").style.display="block";
    document.getElementById("dashboard").style.display="none";
  
    

 
  
    // document.getElementById("ol").style.display="block";




  }

  function login211()

  {
    document.getElementById("login4").style.display="none"
    document.getElementById("div-2").style.display="none";
    document.getElementById("fff").style.display="none";
    document.getElementById("mapp").style.display="none";
    document.getElementById("tab").style.display="none";
    document.getElementById("kk").style.display="none";

    // document.getElementById("mist").style.display="block"
    document.getElementById("division1").style.display="none";
    document.getElementById("login3").style.display="block";
    document.getElementById("dashboard").style.display="none";

    
  }
  














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
    
    pattern2=/^[6-9][0-9]{9}/;
    num=document.getElementById("num").value;
    if(pattern2.test(num))
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
    let data1=document.getElementById("idnum1").value;
    let pattern1=/^(N|n)(1)[0-9]{5}/;
    if(!(pattern1.test(data1)))
    {
      document.getElementById("idnum1").style.border="5px solid red";
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
        pas=document.getElementById("2").value;
        idnumb=document.getElementById("idnum1").value;
        fullname=document.getElementById("fulll").value;
        gmail=document.getElementById("val").value;
        number=document.getElementById("num").value;
        gender1=document.getElementById("first5").value;
        dateob=document.getElementById("dob").value;
        names.push(fullname);
        pass.push(pas);
        idnum2.push(idnumb);
        mails.push(gmail);
        numbers.push(number);
        genders.push(gender1);
        dobs.push(dateob);
        console.log(names);
        console.log(pass);
        console.log(idnum2);
        console.log(mails);
        console.log(numbers);
        console.log(genders);
        console.log(dobs);

      
        console.log(pas);

       

       
        
        
        
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
    let pattern3=/^[a-z0-9]*\.?([a-z0-9]*)@[a-z]{2,7}((\.)?([a-z]{2}))?\.[a-z]{2,3}$/;
    let mail=document.getElementById("val").value;

   if(pattern3.test(mail))
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


function valid2()
  {
   
    let data=document.getElementById("stdid").value;
    let inspas=document.getElementById("stdps").value;
    let pattern4=/^(N|n)(1)[0-9]{5}/;
    if(pattern4.test(data))
    {


      
      document.getElementById("login3").style.display="none";
      document.getElementById("div-2").style.display="none";
      document.getElementById("fff").style.display="none";
      document.getElementById("mapp").style.display="none";
      document.getElementById("tab").style.display="none";
      document.getElementById("kk").style.display="none";
      document.getElementById("dashboard").style.display="block";
      document.getElementById("division1").style.display="none";
      document.getElementById("login4").style.display="none";

              document.getElementById("name").innerText=idnum2[i];
              document.getElementById("class1").innerText=names[i];
              document.getElementById("section").innerText=numbers[i];
              document.getElementById("hgen").innerText=genders[i];
              document.getElementById("dashboard").style="block";
              document.getElementById("imgs").src="photo.jpg";
      
      console.log(names);
      console.log(pass);
      console.log(idnum2);
      console.log(mails);
      console.log(numbers);
      console.log(genders);
      console.log(dobs);

    // document.getElementById("mist").style.display="block"
  //  let i=0;
  //     if(idnum2[i]==data)
  //     {
  //       if(pass[i]==inspas)
  //       {
  //         console.log('hi');
      
  //             document.getElementById("division1").style.display="none";
  //             document.getElementById("name").innerText=idnum2[i];
  //             document.getElementById("class1").innerText=names[i];
  //             document.getElementById("section").innerText=numbers[i];
  //             document.getElementById("hgen").innerText=genders[i];
  //             document.getElementById("dashboard").style="block";
  //             document.getElementById("imgs").src="photo.jpg";
    

  //       }
  //     }
    
  
      // if(idnum2[0]==data)
      // {
      //
      
      // }
    
      
     
    
    }
  }
  function valid3()
  {
    let data=document.getElementById("stdid1").value;
    let inspas=document.getElementById("stdps1").value;
    let pattern4=/^(N|n)(1)[0-9]{5}/;
    if(pattern4.test(data))
    {


      document.getElementById("login3").style.display="none";
      document.getElementById("div-2").style.display="none";
      document.getElementById("fff").style.display="none";
      document.getElementById("mapp").style.display="none";
      document.getElementById("tab").style.display="none";
      document.getElementById("kk").style.display="none";
      document.getElementById("dashboard").style.display="block";
      document.getElementById("division1").style.display="none";
      document.getElementById("login4").style.display="none";

              document.getElementById("name").innerText=idnum2[i];
              document.getElementById("class1").innerText=names[i];
              document.getElementById("section").innerText=numbers[i];
              document.getElementById("hgen").innerText=genders[i];
              document.getElementById("dashboard").style="block";
              document.getElementById("imgs").src="photo.jpg";
      
      console.log(names);
      console.log(pass);
      console.log(idnum2);
      console.log(mails);
      console.log(numbers);
      console.log(genders);
      console.log(dobs);
    }
  }
  function csestd()
  {
    
    document.getElementById("div-2").style.display="none";
    document.getElementById("fff").style.display="none";
    document.getElementById("mapp").style.display="none";
    document.getElementById("tab").style.display="none";
    document.getElementById("kk").style.display="none";

    document.getElementById("login5").style.display="none";
    // document.getElementById("mist").style.display="block"
    document.getElementById("division1").style.display="none";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("login4").style.display="block";  

  }

  function valid4()
  {
    console.log("ok");
    let data=document.getElementById("stdid2").value;
    let inspas=document.getElementById("stdps2").value;
    let pattern4=/^(f|F)(1)[0-9]{5}/;
    if(pattern4.test(data))
    {


      document.getElementById("login3").style.display="none";
      document.getElementById("div-2").style.display="none";
      document.getElementById("fff").style.display="none";
      document.getElementById("mapp").style.display="none";
      document.getElementById("tab").style.display="none";
      document.getElementById("kk").style.display="none";
      document.getElementById("dashboard").style.display="block";
      document.getElementById("division1").style.display="none";
      document.getElementById("login4").style.display="none";
      document.getElementById("login5").style.display="none";

              document.getElementById("name").innerText="F181150";
              document.getElementById("class1").innerText=names[i];
              document.getElementById("section").innerText=numbers[i];
              document.getElementById("hgen").innerText=genders[i];
              document.getElementById("dashboard").style="block";
              document.getElementById("imgs").src="photo.jpg";
      
      console.log(names);
      console.log(pass);
      console.log(idnum2);
      console.log(mails);
      console.log(numbers);
      console.log(genders);
      console.log(dobs);
    }
  }
  
  function faculty()
  {
    
    document.getElementById("div-2").style.display="none";
    document.getElementById("fff").style.display="none";
    document.getElementById("mapp").style.display="none";
    document.getElementById("tab").style.display="none";
    document.getElementById("kk").style.display="none";
     document.getElementById("login3").style.display="none";
    // document.getElementById("mist").style.display="block"
    document.getElementById("division1").style.display="none";
    document.getElementById("dashboard").style.display="none";
    document.getElementById("login4").style.display="none";
    document.getElementById("login5").style.display="block";  

  }
  function img3()
  {
    // alert("hi")
    document.getElementById("imk").style.display="none";
    document.getElementById("iml").style.display="block";
  }
  function imgh()
  {
    document.getElementById("imk").style.display="block";
    document.getElementById("iml").style.display="none";
  }  
  
  function not(){
    // alert("hi")
    let a=document.getElementById("tab2").firstElementChild;
    a.remove();
    document.getElementById("tab2").append(a);
    setTimeout(not,5000);
  }


  