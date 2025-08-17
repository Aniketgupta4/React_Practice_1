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
