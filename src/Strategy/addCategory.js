export default class addCategory{

    constructor(list, update){

        this.update = update
        this.list = list
        this.body = document.querySelector('body')
        this.section = document.createElement('section')

    }
    
    createSection(){

        const section = this.section;
        section.classList.add('add_category_field');

        const input = document.createElement('input');
        const button = document.createElement('button');

        button.innerHTML = "Dodaj kategorię";

        [input, button].forEach( el => section.appendChild(el) )
        this.body.appendChild(section);
    
        button.addEventListener( 'click', () => {

            this.list.find( el => el.category === input.value ) !== undefined ?
            
            console.log('ta kategoria juz istnieje')
            :
            (
                this.list.push({
                category: input.value,
                items: []
                }),
                this.update('add_category', input.value)
            )
        });

    }


}