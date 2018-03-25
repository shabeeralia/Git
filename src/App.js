import React, { Component } from 'react';
import ProductList from './component/plist';

import './stylesheets/css/component/controls.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: [{name:'Apple',qty:30,'price':300},{name:'A',qty:3,'price':1000},{name:'B',qty:13,'price':100},
                  {name:'Grapes',qty:12,'price':30},{name:'Banana',qty:83,'price':150},{name:'Pineapple',qty:3,'price':600},

            ],
        }

        this.sortByQty = this.sortByQty.bind(this);
        this.sortByPrice = this.sortByPrice.bind(this);

        this.onRemoveCallback = this.onRemoveCallback.bind(this);
       /* this.generateDeck = this.generateDeck.bind(this);
        this.shuffle = this.shuffle.bind(this);*/
    }

   
    sortByQty(direction) {
        const { data } = this.state;

        let sorted =[];

        switch (direction) {
            case 'desc':
                 sorted= data.sort( (a,b) => {
                         return b.qty - a.qty;
                 });
                break;

            case 'asc':
                sorted= data.sort( (a,b) => {
                         return a.qty - b.qty;
                 });
                break;
            default:
                throw new Error('unknown direction');
        }
         this.setState({ data: sorted });
     }

      sortByPrice(direction) {
        const { data } = this.state;

        let sorted =[];

        switch (direction) {
            case 'desc':
                 sorted= data.sort( (a,b) => {
                         return b.price - a.price;
                 });
                break;

            case 'asc':
                sorted= data.sort( (a,b) => {
                         return a.price - b.price;
                 });
                break;
            default:
                throw new Error('unknown direction');
        }


        this.setState({ data: sorted });
    }

     onRemoveCallback(id) {
        const { data } = this.state;

        delete data[id];
        this.setState({ data });
    }

    render() {
        const { data } = this.state;
               

        return [
            <fieldset className="component controls" key='controls'>
                <h1>control panel</h1>
              
                <div>
                    <h3>sort by quantity</h3>
                    <button id="sort-by-asc" onClick={() => this.sortByQty('asc')}>asc</button>
                    <button id="sort-by-desc" onClick={() => this.sortByQty('desc')}>desc</button>
                </div>
                <div>
                    <h3>sort by Price</h3>
                    <button onClick={() => this.sortByPrice('asc')}>Low to High</button>
                    <button onClick={() => this.sortByPrice('desc')}>High to Low</button>                    
                </div>

            </fieldset>,
             <h3> Product List</h3>,
             <ProductList key='prod' prods={data} removeCallBack={this.onRemoveCallback}/>,
        ];
    }
}

export default App;
