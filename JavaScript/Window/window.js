console.log("......ACCESSING WNDOW OBJECT...........");
var str='hello';
console.log(`str : ${str}`);
console.log("window str :"+ window.str);


function getName(){
    return 'jyothsna';
}
console.log('getname : ',getName());
console.log('Get name window : '+window.getName());
console.log(window);
console.log('   ');

console.log("......ACCESSING WNDOW HEIGHT AND WIDTH...........");
console.log('inner height' ,window.innerHeight);
console.log('inner width ',window.innerWidth);

console.log(".........................................");
/* window.alert("Hi Hello");
window.confirm('Are you Der!!!')
const iseligible=window.confirm('Is your age greater than 18');
console.log(` Is Eligible : ${iseligible}`);
if(iseligible)
    document.write('Eligible');
else    
    console.log('not eligible');
 */



    // const age=window.prompt('Please enter your age : ',30)  //default value is:30
    // console.log(`Age : ${age}`);
    // if(age>18){
    // // document.write( ' '+ 'Eligible');
    // window.open("https://www.flipkart.com");
    // }
    // else
    // {    window.open("https://www.firstcry.com");
    //     // console.log('not eligible');
    // }



    console.log('location',location);
    console.log('history ',history);
    console.log('navigator ',navigator);

    navigator.geolocation.getCurrentPosition(loc=>{
        console.log('location ',loc);
    });

        