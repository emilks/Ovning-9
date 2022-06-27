const output = document.querySelector('#output');

const form = document.querySelector('#inputForm');

document.querySelectorAll('p')
        .forEach(p => p.addEventListener('click', (e) => console.log('Working', e.target)))

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Tryckt2!');
    let bish = document.getElementById("bish").value;
    let bosh = document.getElementById("bosh").value;
    let loop = document.getElementById("loop").value;
    calc(bish, bosh, loop);
})

const calc = function(bish, bosh, sum){
    output.innerText = 'Start:\n';

    for (let index = 1; index <= sum; index++) {
        if(index % bish == 0 && index % bosh == 0){
            //output.innerText += (index) + ': Bish-Bosh\n';
            output.innerText += ' Bish-Bosh,';
        }else if(index % bish == 0){
            //output.innerText += (index) + ': Bish\n';
            output.innerText += ' Bish, ';
        }else if(index % bosh == 0){
            //output.innerText += (index) + ': Bosh\n';
            output.innerText += ' Bosh, ';
        }else{
            //output.innerText += (index) + ': ' + index + '\n';
            output.innerText += ' ' + index + ', ';
        }
    }
}