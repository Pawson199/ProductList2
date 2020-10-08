import addCategoryDOM from "../Appends/addCategory";
import updateLocalStorage from "../updateLocalStorage";


    const body = document.querySelector('body');
    const section = document.createElement('section');
    section.classList.add('add_category_field');

    function createCategorySection(list){
        const input = document.createElement('input');
        input.placeholder = 'Nowa kategoria'
        const button = document.createElement('button');
        button.innerHTML = "Dodaj";
        [input, button].forEach( el => section.appendChild(el) )
        body.appendChild(section)
        button.addEventListener( 'click', () => addCategoryARRAY(list, input.value));
    }

    function addCategoryARRAY(list,value){

        if( list.find( el => el.category === value ) !== undefined || value === "" ){
            return
        }
        else{
            list.push({
                category: value,
                items: []
            })
            addCategoryDOM(value, list)
            updateLocalStorage(list)
        }

    }

    function deleteCategoryARRAY(deleted_category, list){
        console.log(deleted_category, list)
        const index = list.find( el => el.category === deleted_category );
        let removed_item = list.indexOf(index);
        list.splice(removed_item, 1);
    }

    export { createCategorySection, addCategoryARRAY, deleteCategoryARRAY }