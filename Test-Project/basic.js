// console.log("Hello  Bro");
// console.log("soon you have to millionare");
// console.log("remember that");
// console.log("your parents deserve best from you");

// let x = null;
// let y = undefined;

// console.log(x);
// console.log(y);

// console.log(typeof(x));
// console.log(typeof(y));
// console.log(x==y);
// console.log(x===y);

// function mul(a,b){
//     return a*b;
// }

// let ab  = mul(5,6);

// console.log(ab);

// let add = (a,b) => {
//     return a+b;
// }
// console.log(add(4,5));

// const sumFunc = (a,b) => {
//     console.log(a+b);
// }

// console.log(sumFunc(4,5));

// function vowles(a){

//     let cnt = 0;

//     for(let i of a){
//         if(i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u'){
//             cnt++;
//         }
//     }

//     return cnt;
// }

// console.log(vowles("asdfghjklqwertyuiozxcvbnm"));

// str = "asdfgh";

// for(let i of str){
//     console.log(i);
// }

// const vowles = (a) => {
//   let cnt = 0;

//   for (let i of a) {
//     if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
//       cnt++;
//     }
//   }

//   return cnt;
// };

// console.log(vowles("qwertyuiopljhgfdsamnbvcxz"));

// let arr = [2, 3, 4, 5, 6];

// arr.forEach((num) => {
//   console.log(num * num);
// });

// let heading = document.getElementById("heading");
// console.dir(heading);
// document.getElementById("heading").innerText = "Bye Bye Hello";

// function myfunction() {
//   let value = prompt("Enter the Header");
//   document.getElementById("heading").innerText = value;
//   let value = document.querySelectorAll(".Heading")[0];
//   value.innerText = "Hey BITCH";
//   console.dir(value);
// }

// function linkFunction() {
//   // console.dir(document.getElementsByTagName("button").innerHTML);
//   if (document.getElementById("myButton").innerHTML == "WIKIPEDIA") {
//     document.getElementById("myButton").innerHTML = "INSTAGRAM";
//     document.getElementById("link").href = "https://www.instagram.com/cbum/?hl=en";
//   } else {
//     document.getElementById("myButton").innerHTML = "WIKIPEDIA";
//     document.getElementById("link").href =  "https://en.wikipedia.org/wiki/Chris_Bumstead";
//   }
// }
// console.dir(document.querySelectorAll("p"));

// let newButton = document.createElement("button");
// newButton.style.height = "100px";
// newButton.style.width = "400px";
// newButton.style.backgroundColor = "blue";
// newButton.style.color = "red"
// newButton.innerHTML = "<i>Click me!</i>";
// document.querySelector("div").prepend(newButton);

// let para = document.querySelector("p");
// para.classList.add("newPara")
// para.classList.remove("paragraph");
// para.setAttribute("class","paragraph");
// console.dir(para.classList)

// let button = document.querySelector("#button");

// let func = (e) => {
//     document.querySelector("body").style.backgroundColor = "green";
//     console.log(e);
// }

// button.addEventListener("click", func);

// let heading = document.querySelector("#heading");

// let funcHead = () => {
//     heading.style.color = "white"
// }

// heading.addEventListener("mouseover", funcHead);

// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log(this.name," ",this.email);
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         console.log("Data Changed");
//     }
// }

// let me = new User("Abhi","abhi@gmail.com");
// let admin = new Admin("admin","admin@gmail.com");
// admin.viewData();
// admin.editData();

// let text = document.querySelector("p");

// console.log(text.innerHTML);
// // let response;

// async function apiCalling() {
//   // let response = await fetch(https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key})
//   fetch(
//     "https://api.tomorrow.io/v4/weather/realtime?location=lucknow&apikey=92k3pz5XkVaPFHz2M3uKeZk0BRHiFBq6"
//   )
//     .then((response) => response.json())
//     .then((response) => console.log(response.data.values.temperature))
//     .catch((err) => console.log(err));

//   // console.log(response.d       ata.values.temperature)
// }

// apiCalling();
// .then((response) => response.json())
// .then((response) => console.log(response.data.values.temperature))
// .catch((err) => console.error(err));
