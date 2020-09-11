import Item from '../Factory/Item'
import Inputs from './Appends/Inputs'

export default class addItem{

    constructor(list, update){

        this.body = document.querySelector('body')
        this.select = document.createElement('select');
        this.section = document.createElement('section');
        this.add_button = document.createElement('button');
        this.open_button = document.createElement('button');
        
        this.update = update
        this.list = list
    };


    createSection() {

        this.body.appendChild(this.section);

        this.section.appendChild(
            Inputs('kg', 'szt', 'radio', 'measure', true )
        )
        this.section.appendChild(
            Inputs('Ilość', 'Nazwa', 'text', '', false )
        );

        this.add_button.innerHTML = 'Zapisz'
        this.open_button.innerHTML = "Dodaj produkt";

        this.body.appendChild(this.open_button);
        this.section.appendChild(this.select);
        this.section.appendChild(this.add_button);
        
        this.section.classList.add('adding_container');
        this.open_button.classList.add('add_item_button');
        
        this.addListeners()
    
    }

    addListeners(){

        this.open_button.addEventListener( 'click', (e) => {
            this.updateSelect();
            e.preventDefault()
        });

        this.add_button.addEventListener('click', () => this.addToList())
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

        this.update('add',this.list[index])
    }
}