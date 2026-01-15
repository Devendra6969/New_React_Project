const reactElement = {
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: "Click me to visit google"

}


const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);

function customRender(reactElement, mainContainer){
    // const DOMelement = document.createElement(reactElement.type);
    // DOMelement.innerHTML = reactElement.children;
    // DOMelement.setAttribute('href', reactElement.props.href)
    // DOMelement.setAttribute('target', reactElement.props.target)
    // mainContainer.appendChild(DOMelement);

    const DOMelement = document.createElement(reactElement.type)
    DOMelement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === "children") continue;
        DOMelement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(DOMelement)
}