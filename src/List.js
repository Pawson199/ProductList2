import addItem from './Strategy/addItem'
import addCategory from './Strategy/addCategory'

export default class List {
    constructor(){

        this.body = document.querySelector('body');
        this.list = []

        this.newlist = document.createElement('ul');
        this.newlist.classList.add('products_list');

        new addItem(this.list, this.update).createSection()
        new addCategory(this.list, this.update).createSection()

        this.body.appendChild(this.newlist)
    }


    update(action, load){

        const lista = document.querySelector('.products_list')

        switch(action){

            case 'add_item' : {
               const category = document.querySelector(`.${load.category}`);
               const item = document.createElement('li')
               item.innerHTML = "aaa"
               category.appendChild(item)
            }
            break;
            case 'delete_item' : {
                console.log('deleteitem')
            }
            break;
            case 'add_category' : {
                const ul = document.createElement('ul');
                ul.classList.add(load)
                ul.innerHTML = load;
                lista.appendChild(ul)
            }
            break;
            case 'delete_category' : {
                console.log('deletecategory')
            }
            break;

        }
    }

}
