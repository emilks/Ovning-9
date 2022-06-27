const output = document.querySelector('#output');
const form = document.querySelector('#inputForm');
const lista = document.querySelector('#list');
const li = document.querySelectorAll('li');


form.addEventListener('submit', function(e){
    e.preventDefault();

    let item = document.getElementById("item").value;
    
    const isEmpty = item.trim().length;

    if (isEmpty !== 0){

        const element = document.createElement("LI");
        element.classList.add('list-group-item','d-flex','justify-content-between');
    
        element.div = document.createElement("div");
        element.div.innerText = item;
        element.appendChild(element.div);

        element.button = document.createElement("button");
        element.button.classList.add('btn-close');
        element.appendChild(element.button);

        element.button.addEventListener('click', (e) => {
            element.remove();
        })

        element.addEventListener('click', (e) => {
            element.classList.toggle('list-group-item-danger');
            element.div.classList.toggle('strikethrough');
        })
        lista.appendChild(element);
    
    }
})


