//**************************** Question 1********************/

// var a=prompt("Enter any number");
// var b=prompt("Enter any number");
// var result;
// function power(a,b){
//    result=Math.pow(a,b)
//    document.write(result);
// }
// power(a,b);

//************************* Question 2********************/



// var year=prompt("Enter the year")
// function leapYear(year){
//     if(year%4===0){
//         document.write(year+" is a leap year");
//     }
//     else{
//         document.write(year+" is not a leap year");
//     }
// }
// leapYear(year);

// var a=+prompt("Enter any number");
// var b=+prompt("Enter any number");
// var c=+prompt("Enter any number");
// var s;
// var area;

//**************************** Question 3********************/


// function side(a,b,c){
//     s=( a + b + c );
//     s=s/2;
//     document.write("Side of triangle :"+s+"</br>");
//     area=s*(s-a)*(s-b)*(s-c);

// }


// function area(a,b,c){
//     side(a,b,c);
//     document.write("Area of triangle :"+area);
// }
// area(a,b,c);


//**************************** Question 4********************/


// var sub1=+prompt("Enter number of math");
// var sub2=+prompt("Enter number of English");
// var sub3=+prompt("Enter number of Urdu");
// var tMarks=300;

// function main(){
//     percent(sub1,sub2,sub3);
//     average(sub1,sub2,sub3)
// }
// function percent(sub1,sub2,sub3){
//     var par=((sub1+sub2+sub3)/tMarks)*100;
//     par=par.toFixed(2);
//     document.write("Percentage "+par+"%"+"</br>");
// }
// function average(sub1,sub2,sub3){
//     var aver=(sub1+sub2+sub3)/3;
//     aver=aver.toFixed(2);
//     document.write("Average "+aver);
// }
// main();


//******************************** Question 5********************/


// var word="Quaid-e-Azam is the founder of Pakistan";
// var user=prompt("Enter your word")
// var arr;
// var bool=false;
// function index(user){
//   for(var i=0; i<=word.length; i++){
//       if(user===word[i]){
//           bool=true;
//           document.write("Index of "+ user +" is "+ [i]+"</br>");
//         //   break             //if we use break so it will display just starting index of user input. 
//       }
//   }
//   if(bool==false){
//       document.write("Word is not present")
//   }
// }
// index(user); 


//******************************* Question 6********************/


// function removeVowel(){
// var vowel="Quaid-e-Azam is the founder of Pakistan. He was a lawyer by profession and got the lawyer's degree from England;
// for(var i=0;i<vowel.length;i++){
//     if(vowel[i]==="a"||vowel[i]==="e"||vowel[i]==="i"||vowel[i]==="o"||vowel[i]==="u"){
//        document.write("");
//     }
//     else{
//       document.write(vowel[i]);
//     }
// }
// }
// removeVowel();


//**************************** Question 7********************/


// function vowelCheck(){
//     var word="Pleases read this application and give me gratuity";
//     var count=0;
//     var vow=0;
//     for(var i=0;i<word.length;i++){
//         if(word.slice(i,i+2)=="ea"){
//             count++;
//         }
//         if(word.slice(i,i+2)==="ui"){
//             vow++
//         }
//     }

//     document.write("The occurence of ea is "+count+"</br>")
//     document.write("The occurence of ui is "+vow+"</br>")
// }
// vowelCheck();


//***************************** Question 8********************/


// var distance=prompt("Enter distance in kilometer");
// function calDistance(distance){
//   meters(distance);
//   centiMeters(distance);
//   inches(distance);
//   feets(distance)
// }
// function meters(distance){
//   var meter=distance*1000;
//   document.write("Distance in meter is "+meter+"</br>"); 
// }
// function centiMeters(distance){
//     var centiMeter=(distance*1000)*100;
//     document.write("Distance in centimeter is "+centiMeter+"</br>"); 
// }
// function inches(distance){
//     var inch=(distance*39370.07874);
//     document.write("Distance in inch is "+inch+"</br>"); 
// }
// function feets(distance){
//   var feet=(distance*3281);
//   document.write("Distance in inch is "+feet+"</br>"); 
// }
// calDistance(distance);


//*************************** Question 9********************/


// var workingTime=prompt("Enter the hour to calculate the time");
// var noWorkingTime=prompt("Enter the min to calculate the fraction time");
// var payCalculate=12*workingTime;
// var min=workingTime*60;
// var fractTime=noWorkingTime/workingTime;
// var total=payCalculate-fractTime;
// document.write("Your payment is "+total);


//******************************** Question 10********************/


var userCash=prompt("Enter your ammount to withdraw");
document.write(
    "You will have "+Math.floor((userCash/100))+" notes of hundred and "+
     Math.floor((userCash%100)/50)+" notes of 50 and "+
     Math.floor(((userCash%100)%50)/10)+" notes of 10");


