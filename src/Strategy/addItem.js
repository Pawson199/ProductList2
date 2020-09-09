import Item from '../Factory/Item'

export default class addItem{
    constructor(list){

        this.button = document.createElement('button');
        this.body = document.querySelector('body')
        this.select = document.createElement('select');

        this.add_container = document.createElement('div');
        this.add_container.classList.add('adding_container');
        this.body.appendChild(this.add_container);
        
        this.list = list
    };

    createButton() {
        const buttton = document.createElement('button');
        buttton.innerHTML = "dodaj produkt";
        buttton.classList.add('add_item_button');

        this.add_container.appendChild(this.select)
        this.add_container.appendChild(buttton);

        buttton.addEventListener( 'click', (e) => {

            //show and hide section with adding panel
            this.updateList()
            e.preventDefault()

        });
    }

    updateList() {

        [...this.list].forEach( el => {
            const name = el.getAttribute('list-name');
            [...this.select].find( option => option.value === name ) !== undefined ?
            null
            :
            this.select.add(new Option(name , name));
        } )
      
    }

}