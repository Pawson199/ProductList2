import Item from '../Factory/Item'

export default class addItem{
    constructor(list){

        this.button = document.createElement('button');
        this.body = document.querySelector('body')
        this.select = document.createElement('select');
        this.section = document.createElement('section');
        this.div = document.createElement('div');
        this.input =  document.createElement('input');
        this.label = document.createElement('label');

        this.list = list
    };

    createButton() {

        // Create place for all inputs, selects, and buttons 
        // in adding component
        const add_container = this.section;
        add_container.classList.add('adding_container')
        this.body.appendChild(add_container);

        // Add two measures into measure_div
        add_container.appendChild(
            this.createInputs('kg', 'szt', 'radio', 'measure', true )
        )

        add_container.appendChild(
            this.createInputs('Ilość', 'Nazwa', 'text', '', false )
        )

        // Add select input
        add_container.appendChild(this.select);
        this.body.appendChild(this.button);

        // Button which will open and close item adding component, 
        // and event onclick
        const open_close_button = this.button;
        open_close_button.innerHTML = "dodaj produkt";
        open_close_button.classList.add('add_item_button');

        open_close_button.addEventListener( 'click', (e) => {

            this.updateList()
            e.preventDefault()

        });
    }

    // Create two inputs 
    createInputs(inner1, inner2, type, name, flag){
        const box = document.createElement('div');
        for(let i = 0; i<2; i++){
            const label = document.createElement('label');
            const input = document.createElement('input');
            
            input.setAttribute('type', type);
            input.setAttribute('name', name);

            if(i === 0){
                label.innerHTML = inner1;
                flag ?
                input.value = inner1
                : 
                null
            }
            else if(i === 1){
                label.innerHTML = inner2;
                flag ?
                input.value = inner2
                :
                null
            }

            box.appendChild(label);
            box.appendChild(input);
        }
        return box
    }

    // Update list of categories in select
    updateList() {

        [...this.list].forEach( el => {
            const name = el.getAttribute('list-name');
            [...this.select].find( option => option.value === name ) !== undefined 
            ?
            null
            :
            this.select.add(new Option(name , name));
        } )

    }

}