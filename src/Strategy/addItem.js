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
            Inputs('Nazwa', 'Ilość', 'text', '', false )
        );

        this.add_button.innerHTML = 'Zapisz'
        this.open_button.innerHTML = "Dodaj produkt";

        this.body.appendChild(this.open_button);
        this.section.appendChild(this.select);
        this.section.appendChild(this.add_button);
        
        this.section.classList.add('adding_container');
        this.open_button.classList.add('add_item_button');

        this.section.children[1].children[3].setAttribute('type', 'number')
        
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

        const measure = [...dir[0].children].find( el => el.checked === true );
        const quantity = dir[1].children[3];
        const name = dir[1].children[1];
        
        const measure_condition = () => measure !== undefined ? false : true;
        const add_borders = () => {
            [name, quantity, this.select ].forEach( el => { el.value === "" ? el.style.border = 'red 1px solid' : el.style.border = ''})
        }
        if( quantity.value === "" || name.value === "" || this.select.value === "" ){
            add_borders();
            return
        }
        else if( measure_condition() ){
            add_borders();
            alert('Nie wybrałeś miary')
        }
        else{
            const index = this.list.findIndex( el => el.category === this.select.value );
            this.list[index] = {
                ...this.list[index],
                items: [...this.list[index].items, new Item(name.value, quantity.value, measure.value)]
            };
            this.update('add_item', this.list[index])
        }
    }
}