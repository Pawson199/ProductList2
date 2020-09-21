import itemStrategy from "../Strategy/itemStrategy";
import categoryStrategy from "../Strategy/categoryStrategy";
import fillSelect from "./fillSelect";


export default function update(action, load, list){

    const lista = document.querySelector('.products_list');

    const edit_item = document.createElement('button');
    const remove_item = document.createElement('button');
    const remove_category = document.createElement('button');

    const category_functions = new categoryStrategy(list);
    const items_functions = new itemStrategy(list)

    switch(action){

        case 'add_item' : {
           const category = document.getElementsByClassName(`${load.category}`)[0];
           const item = document.createElement('li');
           const quantity = document.createElement('input');
           const quantity_type = document.createElement('p');
           const name_desc = document.createElement('p');
           const name = document.createElement('input');

           const item_details = load.item;

           name.value = item_details.name;
           name.disabled = true;
           name_desc.innerHTML = "Nazwa produktu:"
           quantity.value = item_details.quantity;
           quantity.disabled = true; 
           quantity_type.innerHTML = 'Ilość w ' + item_details.measure + ':' ;
           edit_item.innerHTML = "Edytuj";
           remove_item.innerHTML = "Usuń";

           remove_item.addEventListener('click', (e) => {
                items_functions.removeFromList(load.category, item_details.id);
                update('delete_item', [load.category, e.target], list)
           }) 
           edit_item.addEventListener('click', (e) => {
                items_functions.updateList(load.category, item_details.id, [quantity.value, name.value]);
                update('update_item', e.target, list);
           })

           item.appendChild(name_desc);
           item.appendChild(name);
           item.appendChild(quantity_type);
           item.appendChild(quantity);
           item.appendChild(edit_item);
           item.appendChild(remove_item);

           category.appendChild(item);
        }
        break;


        case 'delete_item' : {
            document.getElementsByClassName(`${load[0]}`)[0].removeChild(load[1].parentNode);
        }
        break;


        case 'add_category' : {
            const ul = document.createElement('ul');
            const span = document.createElement('span');
            const h3 = document.createElement('h3');
        
            h3.innerHTML = load;
            remove_category.innerHTML = "Usuń";
            remove_category.addEventListener('click', (e) => {
                category_functions.delete_category(load);
                update('delete_category', e.target, list)
            });
            
            span.appendChild(h3);
            span.appendChild(remove_category);
            ul.appendChild(span);
            ul.classList.add(load);
            lista.appendChild(ul);
            
        }
        break;


        case 'delete_category' : {
           lista.removeChild(load.parentNode.parentNode);
        }
        break;


        case 'update_item' : {

            const category = load.parentNode;
            const inputs = [...category.children];

            const select_el = document.createElement('select');
            select_el.addEventListener('click', () => fillSelect(list, select_el));

            const setDisabledOnInputs = (edited) => {
                    inputs[1].disabled = edited;
                    inputs[3].disabled = edited;
            }
        
            if( inputs[1].disabled ){
                    load.innerHTML = "Zapisz";
                    setDisabledOnInputs(false);
                    category.appendChild(select_el);
            }
            else{
                    load.innerHTML = "Edytuj";
                    setDisabledOnInputs(true);
                    category.removeChild(category.querySelector('select'));
            }
            
        }
        break;

    }
    
    if( list !== undefined ){
        localStorage.setItem('list', JSON.stringify(list))
    }

}