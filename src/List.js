import addItem from './Strategy/addItem'
import addCategory from './Strategy/addCategory'

export default class List {

    constructor(){

        this.body = document.querySelector('body');
        this.list = [];

        this.newlist = document.createElement('ul');
        this.newlist.classList.add('products_list');

        new addItem(this.list, this.update).createSection();
        new addCategory(this.list, this.update).createSection();

        this.body.appendChild(this.newlist);

    }

}
