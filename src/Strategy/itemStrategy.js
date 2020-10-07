import Item from '../Factory/Item'
import Inputs from '../Appends/Inputs'
import fillSelect from '../Appends/fillSelect'
import addToListDOM from '../Appends/addItem'
import updateLocalStorage from "../updateLocalStorage";

    const body = document.querySelector('body');
    const select = document.createElement('select');
    const section = document.createElement('section');
    const add_button = document.createElement('button');
    const open_section_button = document.createElement('button');

    function createItemSection(list) {
        body.appendChild(section);

        section.appendChild(
            Inputs('Nazwa', 'Ilość', 'text', 'number', '', false )
        );
        section.appendChild(
            Inputs('Kg', 'Szt', 'radio', 'radio', 'measure', true )
        );

        add_button.innerHTML = 'Zapisz';
        open_section_button.innerHTML = "+";

        body.appendChild(open_section_button);
        section.appendChild(select);
        section.appendChild(add_button);

        const section_wrapper = document.createElement('section');
        section_wrapper.classList.add('section_wraper')
        section_wrapper.appendChild(section);
        body.appendChild(section_wrapper)

        section.classList.add('adding_container');
        open_section_button.classList.add('add_item_button');
        
        open_section_button.addEventListener( 'click', () => {
            fillSelect(list, select)
            section_wrapper.classList.toggle('show_section')
        });
        add_button.addEventListener('click', () => {
            addToListARRAY(list);
        });

    }

    function addToListARRAY(list){
        const dir = section.children;
        const measure = [...dir[1].children].find( el => el.checked === true );
        const quantity = dir[0].children[3];
        const name = dir[0].children[1];

        const add_borders = () => {
            [name, quantity, select ].forEach( el => { 
                el.value === "" ? el.style.border = 'blue 1px dotted' : el.style.border = '';
            })
        }
        
        if( quantity.value === "" || name.value === "" || select.value === "" ){
            add_borders();
            return
        }
        else if( measure !== undefined ? false : true ){
            add_borders();
            alert('Nie wybrałeś miary');
        }
        else{
            add_borders();
            const index = list.findIndex( el => el.category === select.value );
            const category = list[index];
            list[index] = {
                ...category,
                items: [...category.items, new Item(name.value, quantity.value, measure.value)]
            };
            addToListDOM(select.value, list[index].items[list[index].items.length - 1], list)
            updateLocalStorage(list)
            document.getElementsByClassName('section_wraper')[0].classList.toggle('show_section')

        }
    }
    
    function removeFromList(deleted_item, id, list){
        const index = list.findIndex( el => el.category === deleted_item );
        list[index] = {
            ...list[index],
            items: list[index].items.filter( el => el.id !== id)
        };
    }

    function updateList(category, item, newdata, list, move){
        const index = list.findIndex( el => el.category === category );
        const item_index = list[index].items.findIndex( el => el.id === item.id );

        move ?
            list[index].items[item_index] = {
                ...list[index].items[item_index],
                name: newdata[1],
                quantity: newdata[0]
            } 
        :
            list[index].items.push({
                name: newdata[1],
                quantity: newdata[0],
                measure: item.measure,
                id: Math.random() * 21.6 * Math.random() * 23.4
            })

        updateLocalStorage(list)
    }

    export { createItemSection, addToListARRAY, removeFromList, updateList }