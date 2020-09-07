export default class addCategory{

    constructor(list, list_dir){
        this.direc = list_dir
        this.list = list
        this.body = document.querySelector('body')
    }
    
    createButton(){

        const input = document.createElement('input');
        const button = document.createElement('button');
        button.innerHTML = "Dodaj kategorię"
        button.classList.add('add_category_button');
        this.body.appendChild(button);
        this.body.appendChild(input);
        
    
        button.addEventListener( 'click', () => {
            const ul = document.createElement('ul');
            const h3 = document.createElement('h3');
            h3.innerHTML = input.value;
            ul.appendChild(h3);
            this.direc.appendChild(ul)
            this.list.push(ul)
        });

    }


}