import addItem from './Strategy/addItem'
import addCategory from './Strategy/addCategory'

export default class List {
    constructor(){

        this.body = document.querySelector('body');
        this.list = []
        this.createList()
        this.lista = document.querySelector('.products_list');

        this.add_item = new addItem(this.list).createButton()
        this.add_category = new addCategory(this.list, this.lista).createButton()

    }

    createList(){

        const newlist = document.createElement('ul');
        newlist.classList.add('products_list');
        this.body.appendChild(newlist)

        this.list.map( el => {
            const li = document.createElement('li');
            li.innerHTML = el.name;
            this.newlist.appendChild(li)
        })
        
    }

}