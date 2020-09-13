export default class addCategory{

    constructor(list, update){

        this.update = update;
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

        [input, button].forEach( el => section.appendChild(el) );
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
        }),
        this.update('add_category', value)
    }

    delete_category(deleted_category){
        console.log(this.list)
        const index = this.list.find( el => el.category === deleted_category );
        let removed_item = this.list.indexOf(index);
        this.list.splice(removed_item, 1);
    }
}