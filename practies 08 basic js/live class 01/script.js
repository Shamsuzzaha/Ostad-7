
// -----Foreach-----------
// let laptop = ["windows", "mac", "apple", "android"];
// laptop.forEach((item)=>{
// console.log(item);
// });


// -------for loop-------
// let laptop = ["windows", "mac", "apple", "android"];
// for (let item = 0; item < laptop.length; item++) {
//     const element = laptop[item];
//     console.log(element);
// }


// ---------Concat----------
// let laptop = ["windows", "mac", "apple", "android"];
// let desktop = ["hp", "lanovo"];
// let pc = laptop.concat(desktop);
// console.log(pc);



// ------String to array------------
// let laptop = "Shamsuzzaha Sumon"
// let str = Array.from(laptop);
// console.log(str);


// -------Find Index--------
// let laptop = ["windows", "mac", "apple", "android"];
// let result = laptop.findIndex(x=> x=="apple");
// console.log(result);

// ---------includes-----------
// let laptop = ["5",6, "windows", "mac", "apple", "android"];
// let a = laptop.includes("windows");
// console.log(a)


// -----indexof---------
// let laptop = ["5",6, "windows", "mac", "apple", "android"];
// let a = laptop.indexOf("windows");
// console.log(a)


//-----------pop----------
// let laptop = ["5",6, "windows", "mac", "apple", "android"];
// let a = laptop.pop();
// console.log(a)
// console.log(laptop)


// ---------push----------
// let laptop = ["5",6, "windows", "mac", "apple", "android"];
// let a = laptop.push("HP");
// console.log(a)
// console.log(laptop)


// -----------reverse----------
// let laptop = ["5",6, "windows", "mac", "apple", "android"];
// let a = laptop.reverse();
// console.log(a);
// console.log(laptop);


//------------sort----------
// let laptop = [5,2,5,5,4,5,56,4,,6,46,4,,46,46,4]
// let a = laptop.sort((a,b)=> a-b ); 
// console.log(a)
// console.log(laptop)


//-----------slice--------
// let laptop = ["5",6, "windows", "mac", "apple", "android"];
// let a = laptop.slice(1,2);
// console.log(a);
// console.log(laptop);



//------------Object----------
// let myObj = {
//     name: "Apple",
//     brand: "mac",
//     warranty: 2
// }
// console.log(myObj);



// -----------String-------
// let a = "      Banana     ";
// console.log(a.trim());
// console.log(a);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.indexOf("B"));




// ----------JSON--------
// let myJson = [
//     {name:"Apple", age: 30},
//     {name:"banana", age: 35},
//     {name:"orange", age: 40}
// ];
// console.log(myJson);
// console.log(myJson[0]);
// console.log(myJson[0].age);




// ----------navigator---
// console.log(navigator.cookieEnabled);
// console.log(navigator.canShare);
// console.log(navigator.geolocation);
// console.log(navigator.locks);
// console.log(navigator.onLine);



// -----------window--------
// let a = confirm("Are you male")
// console.log(a);

// alert("Thanking for trying")

// let a = prompt("What is your name?")
// console.log(a);

// setTimeout(()=>{
//     alert("Your trial has been finished today. Your trial time was 5 seconds")
    
// }, 5000)



// -----------Date-------
// let a = new Date()
// console.log(a);
// console.log(a.getDate());
// console.log(a.getMonth());
// console.log(a.getDay());
// console.log(a.getFullYear());
// console.log(a.getTime());
// console.log(a.getTimezoneOffset());
// console.log(a.getUTCDate());
// console.log(a.toJSON());




// ----------Math---------------
// let num = 5.8;
// console.log(num);
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.round(num));
// console.log(Math.sqrt(num));
// console.log(Math.pow(num,2));
