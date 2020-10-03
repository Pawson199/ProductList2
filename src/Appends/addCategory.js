import { deleteCategoryARRAY } from "../Strategy/categoryStrategy";
import updateLocalStorage from "../updateLocalStorage";

export default function addCategory(category, list){

            const DOMlist = document.querySelector('.list_container')
    
            const remove_category = document.createElement('button');
            const ul = document.createElement('ul');
            const span = document.createElement('span');
            const h3 = document.createElement('h3');
        
            h3.innerHTML = category;
            remove_category.innerHTML = "Usuń";
            remove_category.addEventListener('click', (e) => {
               DOMlist.removeChild(document.querySelector(`.${category}`));
               deleteCategoryARRAY(category, list);
               updateLocalStorage(list)
            });
            
            span.appendChild(h3);
            span.appendChild(remove_category);
            ul.appendChild(span);
            ul.classList.add(category);
            DOMlist.appendChild(ul);

}