// class and id attributes in React

// const element = React.createElement("h1",{id:"first",className:"second"},"hello")
// const Reactroot = ReactDOM.createRoot(document.getElementById("root"))
// Reactroot.render(element)



// styles as an object in React beacuse multiple attributes are there

// const element = React.createElement("h1",{id:"first",className:"second",style:{backgroundColor:"pink",color:"white"}},"hello")
// const Reactroot = ReactDOM.createRoot(document.getElementById("root"))
// Reactroot.render(element)




// react apne previous child ko gayab kar deta hai new ata hai toh

// const element = React.createElement("h1",{id:"first",className:"second",style:{backgroundColor:"pink",color:"white"}},"hello")
// const element1 = React.createElement("h2",{id:"first",className:"second",style:{backgroundColor:"blue",color:"white"}},"hello")
// const Reactroot = ReactDOM.createRoot(document.getElementById("root"))
// Reactroot.render(element)
// Reactroot.render(element1) // this will remove the previous element and render the new one
// React does not support multiple root elements, so it will replace the previous one with the new one -> during rendering


// solution is ki ek new div bana ke uske ander multiple wo rakh do and root ke andar dal do -> array

const element = React.createElement("h1",{id:"first",className:"second",style:{backgroundColor:"pink",color:"white"}},"hello")
const element1 = React.createElement("h2",{id:"first",className:"second",style:{backgroundColor:"blue",color:"white"}},"hello")
const div1 = React.createElement('div',{},[element,element1])
const Reactroot = ReactDOM.createRoot(document.getElementById("root"))
Reactroot.render(div1) // this will render both elements inside a div
// bohot ajib type ka code hai yaar -> complex hoga or aage

// this whole code is not for production -> kar shakte hai but not right for developer -> not optimize code contain comments spaces react cdns
// first optimize the code and then use it in production
// cdns -> hai so cdns calls hogi -> additional time laga -> and cdns file ko isi mai likh de toh size badhe ga
// for production ready code -> optimized code chaiye -> no space no comment wala code not extra code 
// react and react dom pe depend hai mera code 
// main goal ki fize size less ho -> smooth work hoga //
// BUNDLERS aaya -> pure html css js ko padhta hai and comment wagera extra chiz remove karega and give optimised code -> example vite, parcel, webpack
// ye bundlers kya karega -> jo bhi code likha hai usko ek file me production ready code banayega


// use parsel in this course -> each have some special feature 
// npm init -> for package.json
// install parsel by -> // npm install parcel


// npm -> node package manager -> node ke liye package manager hai -> jo bhi packages install karte hai wo npm se hi karte hai
// npm is registry of packages(javascript se related) -> jo bhi packages hai wo npm me available hai -> npm se install karte hai
// har chiz ka code yahi se milta hai -> react reactdom har chiz ka code yaha milega then apan run kara payegai -> all thing present related to js
// for use -> npm init 
// node_modules -> npm install -> jo bhi packages install karte hai wo node_modules me store hote hai -> har package ka alag folder hota hai -> jo bhi install kare wo isme milega with their dependencies and sub-dependencies -> size is 300mb
// package.json -> npm init -> jo bhi packages install karte hai wo package.json me store hoga version wagera and dependencies
// jo bhi hm module use karray hai so apan usme modifiction karte hai kuch kuch -> for modification we need some another package so this is dependencies and subdependencies
// version -> 18.2.3 -> major.minor.patch -> 18 is major version -> 2 is minor version -> 3 is patch version 
// bug solve hua so update patch(code ni fatega isme bhi) and
// minor update mai -> old version chalega and old function same and add some new functions so this is minor update and minor update se code ni fatega old wala 
// major update mai -> code fatega -> old wala code run ni karega -> so major update is not compatible with old version -> so major update is not compatible with old version -> so major update is not recommended
// ^(carrat) -> isse kya hota hai ki minor and patch update chalega but major update ni chalega -> so ^18.2.3 -> 18.2.4 chalega but 19.0.0 ni chalega
// ~(tilde) -> isse kya hota hai ki patch update chalega 
// package.lock.json -> exact versions hote hai and dependencies and subdependencies ke bhi versions hote hai
// node_modules -> not push to git -> git ignore me add karte hai -> kyuki ye bahut bada hota hai and har kisi ke machine me alag alag version ho sakta hai -> so ye push ni karte hai
// node_modules ni hai phir bhi chalega -> npm install se node_modules ban jayega -> package.json se node_modules ban jayega -> so ye push ni karte hai -> ye package and package.lock.json se dekhke npm install kar deta hai

// if package.lock.json ni hai tab package.json se updated wala layega warna package.lock.json se modula layega exact version 

