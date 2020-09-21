import Item from '../Factory/Item'
import Inputs from '../Appends/Inputs'
import update from '../Appends/ListUpdate'
import fillSelect from '../Appends/fillSelect';

export default class itemStrategy{

    constructor(list){
        this.body = document.querySelector('body');
        this.select = document.createElement('select');
        this.section = document.createElement('section');
        this.add_button = document.createElement('button');
        this.open_button = document.createElement('button');

        this.list = list;
    };

    createSection() {
        this.body.appendChild(this.section);

        this.section.appendChild(
            Inputs('kg', 'szt', 'radio', 'radio', 'measure', true )
        );
        this.section.appendChild(
            Inputs('Nazwa', 'Ilość', 'text', 'number', '', false )
        );

        this.add_button.innerHTML = 'Zapisz';
        this.open_button.innerHTML = "Dodaj produkt";

        this.body.appendChild(this.open_button);
        this.section.appendChild(this.select);
        this.section.appendChild(this.add_button);

        this.section.classList.add('adding_container');
        this.open_button.classList.add('add_item_button');
        
        this.open_button.addEventListener( 'click', () => fillSelect(this.list, this.select));
        this.add_button.addEventListener('click', () => this.addToList());
    }

    addToList(){
        const dir = this.section.children;

        const measure = [...dir[0].children].find( el => el.checked === true );
        const quantity = dir[1].children[3];
        const name = dir[1].children[1];

        const add_borders = () => {
            [name, quantity, this.select ].forEach( el => { 
                el.value === "" ? el.style.border = 'red 1px solid' : el.style.border = '';
            })
        }
        
        if( quantity.value === "" || name.value === "" || this.select.value === "" ){
            add_borders();
            return
        }
        else if( measure !== undefined ? false : true ){
            add_borders();
            alert('Nie wybrałeś miary');
        }
        else{
            add_borders();
            const index = this.list.findIndex( el => el.category === this.select.value );
            this.list[index] = {
                ...this.list[index],
                items: [...this.list[index].items, new Item(name.value, quantity.value, measure.value)]
            };
            const container = this.list[index];
            update(
                'add_item',
                { category: container.category, item: container.items[container.items.length - 1] },
                 this.list
            )
        }
    }
    
    removeFromList(deleted_item, id){
        const index = this.list.findIndex( el => el.category === deleted_item );
        this.list[index] = {
            ...this.list[index],
            items: this.list[index].items.filter( el => el.id !== id)
        };
    }

    updateList(category, id, newdata){

        console.log(category, id, newdata)
    }

}