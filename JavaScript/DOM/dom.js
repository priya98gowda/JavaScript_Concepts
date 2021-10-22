console.log(".......GET ELEMENT BY ID............");

const element=document.getElementById("test");
console.log('element :',element);
 console.log('ELEMENT TEXT : '+element.innerText);
 console.log('ELEMENT HTML : '+element.innerHTML);
 console.log('ELEMENT TEXT CONTENT : '+element.textContent);
8
//  element.innerText='Good Afternoon!!!';
element.innerHTML='<button>Good Afternoon!!!</button>';


 console.log(".....Document Write........");
 document.write('Welcome to JS class')

 console.log("........Create Element.........");
 const pElement=document.createElement('p');
 pElement.textContent='Monday Mock';
 console.log('Element created by DOM' +pElement);
console.log('..............Appending Child...........');
document.body.appendChild(pElement);
 element.insertAdjacentHTML('afterend','<p>Monday Strict Mock</p>')

 console.log("..........................................");
 const h1Element=document.getElementsByTagName("h1");
 console.log('h1Element : ',h1Element);

 const demoelement=document.querySelectorAll('.demo');
 console.log("demoelement : ",demoelement);

 const h1Elements=document.querySelector('h1');
 console.log("h1Elements :",h1Elements);

 const pElements=document.querySelectorAll('p');
 console.log("pElements : ",pElements);

 console.log(".......................................");
    element.style.color='red';
    element.style.background='blue'
    element.style.textAlign='center'
    element.style.height='40px'
    element.style.width='490px'
    element.style.marginLeft='390px'
    
console.log("..........................");
const randomtextElement=document.getElementById('randomtext');
//randomtextElement.className='randomtext';
randomtextElement.classList='randomtext randomtext1';

for(let i=0;i<demoelement.length;i++)
{
    demoelement[i].className='randomtext';
}


// for(let elementid of demoelement)
// {
//     // elementid.style.color='red';    
//     // elementid.style.border='1px solid blue';
//     elementid.className='randomtext';


// }