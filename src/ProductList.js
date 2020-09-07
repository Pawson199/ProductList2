import addItem from './Strategy/addItem'

export default class List {
    constructor(){

        this.list = []

        this.body = document.querySelector('body');
        this.lista = document.querySelector('.products_list')

        this.newlist = document.createElement('ul');
        this.newlist.classList.add('products_list');
        this.body.appendChild(this.newlist)
        this.list.map( el => {
            const li = document.createElement('li');
            li.innerHTML = el.name;
            this.newlist.appendChild(li)
        })

        this.event = new CustomEvent('update');
        window.addEventListener('update', () => {
            console.log('zmiana!')
        })

        new addItem(this.list).createButton();
        this.addCategoryToList()
        
    }

    //fix it later - add item, but in concrete category
    addItemToList(item){
            const li = document.createElement('li');
            li.innerHTML = item.name;
            this.lista.appendChild(li)
    }

    removeItemFromList(){

    }

    addCategoryToList(category){

            const button = document.createElement('button');
            button.innerHTML = "Dodaj kategorię"
            const input = document.createElement('input');
            button.classList.add('add_category_button');
            this.body.appendChild(button);
            this.body.appendChild(input);
            

            button.addEventListener( 'click', () => {
                const ul = document.createElement('ul');
                const h3 = document.createElement('h3');
                h3.innerHTML = input.value;
                ul.appendChild(h3);
                this.list.push(ul)
                window.dispatchEvent(this.event)
            })
    }

    removeCategoryFromList(){

    }



}