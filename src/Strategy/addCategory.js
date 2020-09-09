export default class addCategory{

    constructor(list, list_dir){
        this.direc = list_dir
        this.list = list
        this.body = document.querySelector('body')
        this.section = document.createElement('section')
    }
    
    createButton(){

        const section = this.section;
        section.classList.add('add_category_field');

        const input = document.createElement('input');
        const button = document.createElement('button');
        button.innerHTML = "Dodaj kategorię";

        [input, button].forEach( el => section.appendChild(el) )
        this.body.appendChild(section);
    
        button.addEventListener( 'click', () => {
            const ul = document.createElement('ul');
            ul.setAttribute('list-name', input.value)
            const h3 = document.createElement('h3');
            h3.innerHTML = input.value;
            ul.appendChild(h3);
            this.direc.appendChild(ul)
            this.list.push(ul)
        });

    }


}