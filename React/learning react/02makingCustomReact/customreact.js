const mainDivElement = document.getElementById("root")

const reactElement = {
    // agar humko anchor tag ata hai as a html from function then usko react kuch aise hi react element banata hai
    // react element means a tree like structure

    type : "a" , // here it could be para or any tag 
    props : {
        // this contains properties or we can say attributes the tag will have
        href:"https://www.google.com/",
        target:"_blank"
    },
    children:"Click me to visit google"

}

// render method will inject react element to main div which is in the html

customRenderOptimal(reactElement,mainDivElement)//mainDivElement is nothing but we can say it might be container

function customRender(reactElement,mainDivElement){

    const domElement = document.createElement(reactElement.type) // anchor tag element created

    domElement.innerHTML = reactElement.children
    domElement.setAttribute ('href', reactElement.props.href)
    domElement.setAttribute ('target',reactElement.props.target)


    mainDivElement.appendChild(domElement)

}

function customRenderOptimal(reactElement,mainDivElement){

    const domElement = document.createElement(reactElement.type) 

    domElement.innerHTML = reactElement.children

    // if attribute props me ek hi hua ya 3 to to handle tha

    for(prop in reactElement.props){
        // sometimes someone add children in props so to   avoid it
        if (prop==='children'){
            continue
        }
        domElement.setAttribute(prop,reactElement.props[prop])

    }

    mainDivElement.appendChild(domElement)


}