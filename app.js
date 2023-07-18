// vanilla js

const el = document.createElement('h1')
const child = document.createElement('span')
el.setAttribute('id', 'title')
el.textContent = 'Hola '
child.textContent = 'Mundo'
el.appendChild(child)
document.getElementById('vanilla').appendChild(el)

// react

const elemento = React.createElement(
    'h1', 
    { id: 'title' },
    'Hola ', 
    React.createElement('span',null, 'Mundo'))
ReactDOM.render(elemento, document.getElementById('react'))


// React con JSX
const elem = <h1 id="title">Hola <span>Mundo</span></h1>;
ReactDOM.render(elem, document.getElementById('jsx'))