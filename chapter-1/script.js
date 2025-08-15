// react library is type se banao 

// rach thing done by functions beacuse nomral mai bohot bar 
// bar code likhna padta hai
// React : Object and ReactDOM : Object


// 2 by functions 

const React = {
    createElement : function(tag,property,children){
        const element = document.createElement(tag)

         // for array ke liye

         if(typeof children === 'object'){
              for(let val of children ){
                element.appendChild(val)
              }
         }
         else

        element.innerText = children
        for(let key in property){
            element.style[key] = property[key]  
        }
        return element
    }
}



const header3 = React.createElement('h1',{fontSize:'30px',backgroundColor:'pink',color:'white'},"hello babies")
const header4 = React.createElement('h2',{fontSize:'25px',backgroundColor:'pink',color:'white'},"hello babies")
  
const root = document.getElementById('root')

root.append(header3)
root.append(header4)


 // 1 normal time taking

const header1 = document.createElement('h1')
header1.innerText = "hello baby"
header1.style.backgroundColor = "pink"
header1.style.color = "white"
header1.style.fontSize = "30px"

const header2 = document.createElement('h1')
header2.innerText = "hello baby"
header2.style.backgroundColor = "pink"
header2.style.color = "white"
header2.style.fontSize = "25px"



root.append(header1)
root.append(header2)



 // 3 reactdom function bana do

//  const ReactDOM = {
//     render : function(element,root){
//         root.appendChild(element)
//     }

// ReactDOM.render(header3,document.getElementById('root'))    


  // 4 unordered list


  const li1 = React.createElement('li',{backgroundColor:'pink',color:'white'},'item 1')
  const li2 = React.createElement('li',{backgroundColor:'pink',color:'white'},'item 2')
  const li3 = React.createElement('li',{backgroundColor:'pink',color:'white '},'item 3')

  const ul = React.createElement('ul',{backgroundColor:'pink',color:'white'},[li1,li2,li3])
   
  root.append(ul)