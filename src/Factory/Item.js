export default class Item {

    constructor(pushed_name, pushed_quantity, pushed_category ){
        
       this.state = {
           name: '',
           quantity: 0,
           category:''
       }

       this.setName(pushed_name);
       this.setQuantity(pushed_quantity);
       this.setCategory(pushed_category);

       return this.state
    }

    setName(name1){
        this.state.name = name1
    }

    setCategory(category){
        this.state.category = category
    }

    setQuantity(quantity){
        this.state.quantity = quantity
    }

}