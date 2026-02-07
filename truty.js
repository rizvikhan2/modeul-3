
// ex1
let marks; //false
marks = 0; //false
marks =90; //true
marks = ''; //false
marks = ' '; // true
marks ='0'; // true
marks = true; //true
marks = false; //false
marks = undefined; //undifinde
marks = null; //null
marks = {} //true
marks = [] //true


console.log('value of data',marks)

if(marks){
    console.log('This marks is truly great..',)
}
else(
    console.log(marks,"It's not true, it's false")
)


