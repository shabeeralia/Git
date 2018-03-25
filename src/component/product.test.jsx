import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Product from './product';


configure({ adapter: new Adapter() });

const [{ name,qty, price },] = [{name:'Apple',qty:30,'price':300}];

describe('<Product/>', () => {
    describe('render', () => {
        it('renders without errors', () => {
            console.log({name,qty, price})

            shallow(<div>
    					<ul>
     						<li> Name: {name} </li>
   	 						<li>Quantity : {qty}</li>
   	 						<li>Price : {price}</li>
    					</ul>
					</div>);
        })
    });
});
