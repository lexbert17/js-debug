const input = document.querySelector('input');
const array = [];  
// all'array va aggiunto la parentesi quadra

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == '') return;
    // utilizzare un metodo alla volta

    array.push(input.value);
    // per inserire gli elementi dell'array utilizzare push

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = input.value;
    // sostituire text con innertext 
    document.querySelector('ul').append(li);
    //  per inserire l'elemento utilizzare append 

    let counter = '';
    let item    = array[0]; 
    const max   = 1;
    const elems = [];

    for (let i = 0; i < array.length; i++) {
        let val = array[i];
        // sostituito array con array.length

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) {
            // incremento i sostituito con incremento j 
            if (array[i] === array[j]) {
                // == sostituito con ===
                counter++;
                if (max < counter)
                max  = counter;
                item = array[i];
            }
        }

        counter = 0;
    }

    const alert = document.querySelector('alert'); 
    // sostituito  con queryselector 

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log('${item} trovato ${max} volte');
});