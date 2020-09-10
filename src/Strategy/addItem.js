import Item from '../Factory/Item'
import Inputs from './Appends/Inputs'

export default class addItem{

    constructor(list){

        this.button = document.createElement('button');
        this.body = document.querySelector('body')
        this.select = document.createElement('select');
        this.section = document.createElement('section');
        this.section.classList.add('adding_container');
        this.add_button = document.createElement('button')

        this.body.appendChild(this.section);

        this.section.appendChild(
            Inputs('kg', 'szt', 'radio', 'measure', true )
        )
        this.section.appendChild(
            Inputs('Ilość', 'Nazwa', 'text', '', false )
        );
        this.section.appendChild(this.select);

        this.add_button.innerHTML = 'Zapisz'
        this.section.appendChild(this.add_button);
        this.add_button.addEventListener('click', () => this.addToList())
        
        this.list = list
    };


    createButton() {

        const open_close_button = this.button;
        const add = this.button;
        open_close_button.innerHTML = "dodaj produkt";
        open_close_button.classList.add('add_item_button');
        this.body.appendChild(open_close_button);

        open_close_button.addEventListener( 'click', (e) => {
            this.updateSelect();
            console.log(this.section.children)
            e.preventDefault()
        });
    }

    
    updateSelect() {
        [...this.list].forEach( el => {
            const { category } = el;
            [...this.select].find( option => option.value === category ) !== undefined 
            ?
            null
            :
            this.select.add(new Option(category , category));
        })
    }


    addToList(){

        const dir = this.section.children;

        const measure = [...dir[0].children].find( el => el.checked === true ).value;
        const quantity = dir[1].children[1].value;
        const name = dir[1].children[3].value;

        const index = this.list.findIndex( el => el.category === this.select.value )
        this.list[index] = {
            ...this.list[index],
            items: [...this.list[index].items, new Item(name, quantity, measure)]
        }

        console.log(this.list)

    }
}