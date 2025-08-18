// bundler ka work -> code optimised way pe likhna
// apan ab cdn use ni karegai -> use react and reactdom from node module by import karke

// <!-- type module is liye diye kyuki import in js baad mai aya latest wale ka so browser ko batana padega ki ye module hona wala hai so broswer tabhu smajhega ki e module hai -->
// latest js part 

import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("h1",{id:"first",className:"second",style:{backgroundColor:"pink",color:"white"}},"hello")
const element1 = React.createElement("h2",{id:"first",className:"second",style:{backgroundColor:"blue",color:"white"}},"hello")
const div1 = React.createElement('div',{},[element,element1])
const Reactroot = ReactDOM.createRoot(document.getElementById("root"))
Reactroot.render(div1)

// build this by -> npx parcel index.html -> parcel-cache and dist new file ajeyai
// parcel is a bundler -> index.html ko parcel ko do and parcel (bundler) optimize karega 
// parcel-cache -> cache folder hai jo parcel use karega -> if ek baar parcel ban gya then next time build pe kam time lagega -> first time build mai jyda time lagta hai
// dist -> optimized code (production ready code yaha ayega) hai jo browser use karega
// write npx parcel build index.html -> to get production ready code
// dist -> so ab isme all code optimised form mai ajeyagi -> by bundler parcel -> so ab production ready file 200 ya 400 kb file ban jayegi -> in dist their is a mapping file so again get original file from this mapping file -> this production ready code is not readable
// dist -> .map file ni dalte in production -> warna user get original code -> data security ke liye 
// production mai dalne ke liye -> apan ko sari files ni dalni hoti -> so use bundlers -> wo code optimise kar deta hai -> easy to machine read the code and get this one file in dist -> by npx build wali cmd se -> warna bohot sari file dalni padti in production read karne mai time lagega tough -> so use parcel bundlers easy for production
// so use bundlers -> so that code is optimised and easy to read by machine -> so that production ready code is one file and easy to read by machine
// deploy it in -> netlify -> direct upload dist file -> so yr host ho jayegi and in configuration in netlify we can change site name according to us
// deploy this project in netlify -> firstreactappwithaniket.netlify.app
// same vite bhi aysa hu ek bundler hai
// dist -> cache hota hai -> for refresh delete it and again rum cmd  npx parcel index.html



// JSX -> javascript xml -> so write html in js file -> so that it is easy to read and write code -> so use babel to convert this jsx code to js code -> so that browser can understand this code -> so use babel to convert this jsx code to js code -> so that browser can understand this code
// jsx way to write react code and jsx -> javascript xml -> so write html in js file -> so that it is easy to read and write code -> so use babel to convert this jsx code to js code -> so that browser can understand this code -> so use babel to convert this jsx code to js code -> so that browser can understand this code
// so use babel to convert this jsx code to js code -> so that browser can understand this 

const newelem = <h1>hello, baby</h1> // jsx format
const div2 = React.createElement('div',{},newelem)
const Reactroot2 = ReactDOM.createRoot(document.getElementById("root2"))

Reactroot2.render(div2)

// so ab apan jsx pe code likhayegai
// multiple child aa shakte hai in <></> in single child 
// for styling make style.css and link it in html file normal   

// jsx expresions
const name = "aniket"

// object hao toh
const obj = {
    age:25,
    salary:60000,
}


const elem = (
    <>
      <h1 id="1" className="first">Hello {name} , {obj.age} </h1>
      <h1 id="2" money={23}>salary:{obj.salary}</h1>
      {/* yaha pe apan money={23} as a number bhej ray hai and apan aaray obj kuch bhi bhej shakte hai -> and normal string mannta hai ye isko */}
      <h1 id="3" className="second" style={{color:"white",backgroundColor:"blue"}}>Hello {name} , {obj.age} </h1>
      {/* samjho isi liye style mai {{}} double aya hai ye object expect karta hai -> jsx mai javascript dalna hai so use 1 for {} this and 1 for object ke liye */}
      {/* jsx ke andar javascript dalni hai so {} lagega and another for li mai object dalra hu -> and style ek object chahta hai so {} lagega and {} this for jsx to js*/}
    </>
)
const React_root = ReactDOM.createRoot(document.getElementById('root2'))
React_root.render(elem) 






// react components
// function based components -> funciton kaise likhte hai


// function type1
function greet(){
    return <h1>hello , how are you</h1>
}

const funccom = greet()
React_root.render(funccom)

 
// function type2
const meet = () =>{
    return <h1>hello new one</h1>
}

const elem2 = meet()
React_root.render(elem2)

// or

React_root.render(meet())


// ek sath 2 function run in jsx -> {} lagana padega because jsx<></> ke ander javacript hai function call

React_root.render(<>{meet()} {greet()}</>)
