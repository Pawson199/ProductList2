import Item from '../Factory/Item'

export default class addItem{
    constructor(list){

        this.button = document.createElement('button');

        this.add_container = document.createElement('div');
        this.add_container.classList.add('adding_container');
        document.querySelector('body').appendChild(this.add_container);
        
        this.list = list
    };

    createButton() {
        const buttton = document.createElement('button');
        buttton.innerHTML = "dodaj produkt"
        buttton.classList.add('add_item_button');
        this.add_container.appendChild(buttton);

        buttton.addEventListener( 'click', () => {

           //pokaz pole dodawania nowego itemu

        });
    }
    
    addItem() {
      
    }

}