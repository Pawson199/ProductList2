export default class Item {

    constructor(pushed_name, pushed_quantity, pushed_measure ){
        
       this.state = {
           name: '',
           quantity: 0,
           measure:''
       }

       this.setName(pushed_name);
       this.setQuantity(pushed_quantity);
       this.setMeasure(pushed_measure);

       return this.state
    }

    setName(name1){
        this.state.name = name1
    }

    setMeasure(measure){
        this.state.measure = measure
    }

    setQuantity(quantity){
        this.state.quantity = quantity
    }

}