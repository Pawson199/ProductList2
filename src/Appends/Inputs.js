export default function Inputs(inner1, inner2, type1, type2, name, flag){

    const box = document.createElement('div');

    for(let i = 0; i<2; i++){

        const label = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('name', name);

        if(i === 0){
            label.innerHTML = inner1;
            input.setAttribute('type', type1);
            flag ? input.value = inner1 : null;
        }
        else{
            label.innerHTML = inner2;
            input.setAttribute('type', type2);
            flag ? input.value = inner2 : null;
        }
        
        box.appendChild(label);
        box.appendChild(input);
    }
    return box
}