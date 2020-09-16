

export default function update(action, load, remover){

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

           name.innerHTML = item_details.name;
           quantity.innerHTML = item_details.quantity + item_details.measure;
           edit_item.innerHTML = "Edytuj";
           remove_item.innerHTML = "Usuń";

           remove_item.addEventListener('click', (e) => {
                remover(load.category, item_details.id);
                update('delete_item',[load.category, e.target])
           }) 
           edit_item.addEventListener('click', (e) => {
                update('update_item', [e.target]);
           })

           item.appendChild(name);
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
                remover(load);
                update('delete_category', e.target)
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
            console.log(load)
        }
        break;

    }
}