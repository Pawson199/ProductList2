import fillSelect from "./fillSelect";
import updateLocalStorage from "../updateLocalStorage";
import { removeFromList, updateList } from "../Strategy/itemStrategy";

export default function addItem(category, item, list){

const edit_item = document.createElement('button');
const remove_item = document.createElement('button');
const item_element = document.createElement('li');
const quantity = document.createElement('input');
const quantity_type = document.createElement('p');
const name_desc = document.createElement('p');
const name = document.createElement('input');
const select_el = document.createElement('select');

const item_parent = document.getElementsByClassName(`${category}`)[0];

name.value = item.name;
quantity.value = item.quantity;
name.disabled = true;
quantity.disabled = true;

name_desc.innerHTML = "Nazwa produktu:" 
quantity_type.innerHTML = 'Ilość w ' + item.measure + ':' ;
edit_item.innerHTML = "Edytuj";
remove_item.innerHTML = "Usuń";

remove_item.onclick = (e) => {
        item_parent.removeChild(item_element);
        removeFromList(category, item.id, list);
        updateLocalStorage(list)
}
edit_item.onclick = (e) => {
        fillSelect(list, select_el);
        close_edited_elements(item_parent, e.target, select_el)
}
select_el.addEventListener('change', (e) => {
        select_el.value = e.target.value
})

const taba = [name_desc, name, quantity_type, quantity, edit_item, remove_item];
taba.forEach( el => item_element.appendChild(el))
item_parent.appendChild(item_element);

}

const close_edited_elements = (list, target, select) => {
        // that function is triggered afted edit_item button

        const categories = list.parentNode.children;

        // if any item from any category is edited and its not a tergeted element,
        // stop editing process.
        [...categories].forEach( category => { 

                [...category.children].forEach( item => {
                        // if edited element is different than the clicked one, remove edition mode
                        if( target.parentNode !== item ){
                                if(item.getAttribute('open') === 'true'){
                                        modify_mode( true, 'Edytuj', false, item.querySelector('select'), item )
                                }     
                        }
                        // if element is the same as the clicked one, add edition mode if input is disabled, 
                        // and remove edition mode if input is enabled
                        else{
                                if( item.children[1].disabled === true ){
                                        modify_mode( false, 'Zapisz', true, select, item );
                                        console.log(select.value)
                                }
                                else{
                                        modify_mode( true, 'Edytuj', false, select, item )
                                        console.log(select.value)
                                }
                        }
                }) 

        })

}

const modify_mode = (input_switch, button_text, set_or_remove, select, item) => {

        item.children[1].disabled = input_switch;
        item.children[3].disabled = input_switch;
        item.children[4].innerHTML = button_text;

        set_or_remove ?
        (       
                item.setAttribute('open', "true"),
                item.appendChild(select)
        )
        :
        (       
                item.removeAttribute('open', "true"),
                item.removeChild(select)
        )

}