import addItem from './Strategy/addItem'
import addCategory from './Strategy/addCategory'

export default class List {
    constructor(){

        this.body = document.querySelector('body');
        this.list = []

        this.newlist = document.createElement('ul');
        this.newlist.classList.add('products_list');

        new addItem(this.list, this.update).createSection()
        new addCategory(this.list, this.newlist).createSection()
        this.createList()
    }

    createList(){
        this.body.appendChild(this.newlist)
    }

    update(action, load){

        switch(action){

            case 'add' : {
                console.log('additem')
            }

        }
    }

}
