export default function Inputs(inner1, inner2, type, name, flag){

    const box = document.createElement('div');

    for(let i = 0; i<2; i++){

        const label = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('name', name);

        i === 0 ? (
            label.innerHTML = inner1,
            flag ?
            input.value = inner1
            : 
            null 
        ):(
            label.innerHTML = inner2,
            flag ?
            input.value = inner2
            :
            null
        )
        box.appendChild(label);
        box.appendChild(input);
    }
    return box
}