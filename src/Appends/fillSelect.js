export default function fillSelect(list,select) {

    [...select].forEach( el => {
        select.remove(el);
    });

    list.forEach( el => {
        const { category } = el;
        select.add(new Option(category , category));
    });
    
}
