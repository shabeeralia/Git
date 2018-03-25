import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductList from './plist';


configure({ adapter: new Adapter() });

const prods =  [{name:'Apple',qty:30,'price':300}];

describe('<ProductList/>', () => {
    describe('render', () => {
        it('renders without errors', () => {
            shallow(<ProductList prods={prods} />);
        });
    });
});
