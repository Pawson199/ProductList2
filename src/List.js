import addItem from './Strategy/addItem'
import addCategory from './Strategy/addCategory'

export default class List {
    constructor(){

        this.body = document.querySelector('body');
        this.list = []

        this.newlist = document.createElement('ul');
        this.newlist.classList.add('products_list');

        new addItem(this.list).createButton()
        new addCategory(this.list, this.newlist).createButton()
        this.createList()
    }

    createList(){

        this.list.map( el => {
            const li = document.createElement('li');
            li.innerHTML = el.name;
            this.newlist.appendChild(li)
        })
        this.body.appendChild(this.newlist)

    }

}