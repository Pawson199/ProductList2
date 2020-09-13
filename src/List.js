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


    update(action, load){

        const lista = document.querySelector('.products_list');

        const edit_item = document.createElement('button');
        const remove_item = document.createElement('button');
        const remove_category = document.createElement('button');

        switch(action){

            case 'add_item' : {
               const category = document.getElementsByClassName(`${load.category}`)[0];
               const item = document.createElement('li');
               const quantity = document.createElement('p');
               const name = document.createElement('p');

               const item_details = load.items[load.items.length - 1];

               name.innerHTML = item_details.name ;
               quantity.innerHTML = item_details.quantity + item_details.measure;
               edit_item.innerHTML = "Edytuj";
               remove_item.innerHTML = "Usuń";

               remove_item.addEventListener('click', (e) => {
                   this.update('delete_item', [load.category, e.target, item_details.id]);
               })

               item.appendChild(name);
               item.appendChild(quantity);
               item.appendChild(edit_item);
               item.appendChild(remove_item);

               category.appendChild(item);
            }
            break;


            case 'delete_item' : {
                document.querySelector(`.${load[0]}`).removeChild(load[1].parentNode);
                new addItem(this.list).removeFromList(load[0], load[2])
            }
            break;
            

            case 'add_category' : {
                const ul = document.createElement('ul');
                const span = document.createElement('span');
                const h3 = document.createElement('h3');

                h3.innerHTML = load;
                remove_category.innerHTML = "Usuń";
                remove_category.addEventListener('click', (e) => {
                    this.update('delete_category', [load, e.target])
                });

                span.appendChild(h3);
                span.appendChild(remove_category);
                ul.appendChild(span);
                ul.classList.add(load);
                lista.appendChild(ul);
            }
            break;


            case 'delete_category' : {
               lista.removeChild(load[1].parentNode.parentNode);
               new addCategory(this.list).delete_category(load[0])
            }
            break;


            case 'update_item' : {
                console.log('deletecategory');
            }
            break;

        }
    }

}
