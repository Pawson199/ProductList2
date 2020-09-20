import update from '../Appends/ListUpdate'

export default class categoryStrategy{

    constructor(list){
        this.list = list;
        this.body = document.querySelector('body');
        this.section = document.createElement('section');
    }
    
    createSection(){
        const section = this.section;
        section.classList.add('add_category_field');

        const input = document.createElement('input');
        const button = document.createElement('button');

        button.innerHTML = "Dodaj kategorię";

        this.body.appendChild(input);
        this.body.appendChild(button);
        this.body.appendChild(section);
    
        button.addEventListener( 'click', () => {
            if( this.list.find( el => el.category === input.value ) !== undefined || input.value === "" ){
                return
            }
            else{
                this.add_category(input.value)
            }
        });
    }

    add_category(value){
        this.list.push({
            category: value,
            items: []
        })
        update('add_category', value, this.list);
        console.log(this.list)
    }

    delete_category(deleted_category){
        const index = this.list.find( el => el.category === deleted_category );
        let removed_item = this.list.indexOf(index);
        this.list.splice(removed_item, 1);
    }
}