import Item from '../Factory/Item'
import Inputs from './Appends/Inputs'

export default class addItem{

    constructor(list){

        this.button = document.createElement('button');
        this.body = document.querySelector('body')
        this.select = document.createElement('select');
        this.section = document.createElement('section');
        this.section.classList.add('adding_container');

        this.body.appendChild(this.section);

        this.section.appendChild(
            Inputs('kg', 'szt', 'radio', 'measure', true )
        )
        this.section.appendChild(
            Inputs('Ilość', 'Nazwa', 'text', '', false )
        );
        this.section.appendChild(this.select);
        
        this.list = list
    };


    createButton() {

        const open_close_button = this.button;
        open_close_button.innerHTML = "dodaj produkt";
        open_close_button.classList.add('add_item_button');
        this.body.appendChild(open_close_button);

        open_close_button.addEventListener( 'click', (e) => {
            this.updateList();
            console.log(this.section.children)
            e.preventDefault()
        });
    }

    
    updateList() {
        [...this.list].forEach( el => {
            const name = el.getAttribute('list-name');
            [...this.select].find( option => option.value === name ) !== undefined 
            ?
            null
            :
            this.select.add(new Option(name , name));
        })
    }
}