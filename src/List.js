import { createItemSection } from './Strategy/itemStrategy'
import { createCategorySection } from './Strategy/categoryStrategy'
import addCategory from './Appends/addCategory';
import addItem from './Appends/addItem';

export default class List {

    constructor(){

        const checkLocalStorage = () => {
            if( localStorage.getItem('list') !== null ){
                if ( localStorage.getItem('list') !== undefined ) return JSON.parse(localStorage.getItem('list')) 
                else return []
            }
            else return []
        }
        this.list = checkLocalStorage()

        createItemSection(this.list)
        createCategorySection(this.list)

        const section = document.createElement('section');
        section.classList.add('list_container');
        document.querySelector('body').appendChild(section)

        this.createList()

    }

    createList(){
        this.list.forEach( el => {
            addCategory(el.category, this.list)
            el.items.forEach( item => addItem(el.category, item, this.list) )
        })
    }

}
