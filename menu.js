
x=0;
function b1()
{
   x++;
   document.getElementById('drinks').innerHTML=x;
}

function b2()
{
 if(x<1)
 {
   x=0;
   document.getElementById('drinks').innerHTML=x;
 }
 else
 {
   x--;
   document.getElementById('drinks').innerHTML=x;
 }
}

y=0;
function b3()
{
   y++;
   document.getElementById('pizza').innerHTML=y;
}

function b4()
{
 if(y<1)
 {
   y=0;
   document.getElementById('pizza').innerHTML=y;
 }
 else
 {
   y--;
   document.getElementById('pizza').innerHTML=y;
 }
}
z=0;
function b5()
{
   z++;
   document.getElementById('burger').innerHTML=z;
}

function b6()
{
 if(z<1)
 {
   z=0;
   document.getElementById('burger').innerHTML=z;
 }
 else
 {
   z--;
   document.getElementById('burger').innerHTML=z;
 }
}

xy=0;
function b7()
{
   xy++;
   document.getElementById('bhelpuri').innerHTML=xy;
}

function b8()
{
 if(xy<1)
 {
   xy=0;
   document.getElementById('bhelpuri').innerHTML=xy;
 }
 else
 {
   xy--;
   document.getElementById('bhelpuri').innerHTML=xy;
 }
}

yz=0;
function b9()
{
   yz++;
   document.getElementById('samosa').innerHTML=yz;
}

function b10()
{
 if(yz<1)
 {
   yz=0;
   document.getElementById('samosa').innerHTML=yz;
 }
 else
 {
   yz--;
   document.getElementById('samosa').innerHTML=yz;
 }
}
var t,a,b,c,d,e;
function totalof()
{
  a=x*100;
  b=y*200;
  c=z*250
  d=xy*50
  e=yz*40
  

 t=a+b+c+d+e;
 document.getElementById('subtotal').value=t;

 var sc=t*0.18;
 document.getElementById('servicecharge').value=sc

 var gst=t*0.08;
 document.getElementById('gst').value=gst

 var fin=t+sc+gst
 document.getElementById('total').value=fin

 

 
 
}

function reset()
{
 x=0;
 y=0;
 z=0;
 xy=0
 yz=0
 document.getElementById('name').value="";
 document.getElementById('drinks').innerHTML=0;
 document.getElementById('pizza').innerHTML=0;
 document.getElementById('burger').innerHTML=0;
 document.getElementById('bhelpuri').innerHTML=0;
 document.getElementById('samosa').innerHTML=0;
 document.getElementById('subtotal').value="";
 document.getElementById('servicecharge').value="";
 document.getElementById('gst').value="";
 document.getElementById('total').value="";
}

function genrat(){
  
 document.getElementById('hide').style.display='none';
 document.getElementById('main').style.display='block';
 
 var nam=document.getElementById('name').value;
  document.getElementById('finname').innerHTML=nam;
 var dri=document.getElementById('drinks').innerHTML;
   document.getElementById('findrinks').innerHTML=dri;
 var piz=document.getElementById('pizza').innerHTML
   document.getElementById('finpizza').innerHTML=piz;
 var bur=document.getElementById('burger').innerHTML
   document.getElementById('finburger').innerHTML=bur;
 var bhel=document.getElementById('bhelpuri').innerHTML
   document.getElementById('finbhelpuri').innerHTML=bhel;
 var sam=document.getElementById('samosa').innerHTML;
   document.getElementById('finsamosa').innerHTML=sam;
 var or=document.getElementById('ordernumber').value
   document.getElementById('finorder').innerHTML=or;  
 var sub=document.getElementById('subtotal').value
   document.getElementById('finsub').innerHTML=sub;
 var ser=document.getElementById('servicecharge').value
   document.getElementById('finservice').innerHTML=ser;
 var gst=document.getElementById('gst').value
   document.getElementById('fingst').innerHTML=gst;
 var to=document.getElementById('total').value
 document.getElementById('fintotal').innerHTML=to;

 
 
}

