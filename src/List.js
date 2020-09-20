import itemStrategy from './Strategy/itemStrategy'
import categoryStrategy from './Strategy/categoryStrategy'
import update from './Appends/ListUpdate';

export default class List {

    constructor(){

        this.body = document.querySelector('body');

        this.list = localStorage.getItem('list').length > 0 ? JSON.parse(localStorage.getItem('list')) : [];

        this.newlist = document.createElement('ul');
        this.newlist.classList.add('products_list');

        new itemStrategy(this.list, this.update).createSection();
        new categoryStrategy(this.list, this.update).createSection();

        this.body.appendChild(this.newlist);
        this.createList()
    }

    createList(){
        this.list.forEach( el => {
            update('add_category', el.category, this.list);
           
            el.items.forEach( item => {
                update('add_item', {category: el.category, item : item}, this.list);
            })
            
        })
    }

}
