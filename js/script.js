// We code it together

// 1. Select heading h2

// querySelector
// querySelectorAll
// getElementById
const heading2 = document.querySelector("h2");
console.log(heading2);


// 2. Select element with class .heading2
const headingByClass = document.querySelector(".heading2");
console.log(headingByClass);


// 3. Select element with id #list using querySelector
const list = document.querySelector("#list");
console.dir(list);

// 4. Select element with id #list using getElementById
const list2 = document.getElementById("list");
console.dir(list2);

// 5. Select single li
const listItem = document.querySelector("li");
console.log(listItem);


// 6.
//  a. Select Multiple li's
const listAllItems = document.querySelectorAll("li");
console.log(listAllItems);
//  b. Loop on the list items

for(let i = 0; i < listAllItems.length; i++) {
console.log(listAllItems[i].innerText);
}



// 7.
    // a. select h1 element
    var header = document.querySelector("h1");
    // b. Change the color of that h1 to be purple
    header.style.color = "purple";
    header.style.fontFamily = "Sans-serif";
    header.style.fontSize = "90px";
    header.style.textDecoration = "underline 10px green";
    header.style.textAlign = "center";
    header.style.margin = "0"
    
    // c. Change the border to be 1px solid green
    header.style.border = "10px solid green";
    // d. Change background colour to be light gray
    header.style.backgroundColor = "grey";
    // e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )
    header.style.padding = "1em";


// 1 I want to select a div element 

const myDiv = document.querySelector("div");

// 2 see if it has any class name 

console.log(myDiv);

// 3 add a class to this div element

myDiv.classList.add("container")
// myDiv.classList = ("container"); (Will remove previous class)


// 4 see if it has a class name now

console.log(myDiv.className);

// 5 add another class to the div 

myDiv.classList.add("second-class");

// so in total i have two class names on the div

// 1. select the h1 and change the innerText

header.innerText = "Tjenare!";

// 2.loop through al the li element and change the innerText value to be changed

for(let i = 0; i < listAllItems.length; i++) {
    listAllItems[i].innerText = "Hello " + listAllItems[i].innerText;
}

// 3.change the innerHTML of the h1 to be updated using innerHTML

header.innerHTML = "Emil Backlund";

// 4. add some html to the div >> add <p><b>Bold text</b> not bold text</p>

myDiv.innerHTML = `<p><b>Lorem ipsum</b>, dolor sit amet consectetur adipisicing elit. <br> 
Ad consectetur laudantium culpa sed atque architecto voluptatibus ipsum officiis amet sit? </p>`;

myDiv.style.fontSize = "40px"
myDiv.style.fontFamily = "sans-serif"
myDiv.style.padding = "20px"


// 5. select the ul 

const list3 = document.querySelector("ul");
//  a. get the existing HTML inside the ul element and assign it to a variable

const existingHtml = list3.innerHTML


//  a. create the new li HTML 

const newHtmlLi = `<li>Hello I am a new item hamster</li>`;

//  b. set the uls new HTML to the existing HTML plus the new HTML

list3.innerHTML += newHtmlLi;