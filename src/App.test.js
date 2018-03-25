import React from 'react';
import App from './App';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<App/>', () => {
    describe('render', () => {
        it('renders without errors', () => {
            shallow(<App /> );
        })

        describe('actions', () => {
            [
                { direction: 'asc', expectedQty: 3 },
                { direction: 'desc', expectedQty: 83 },
            ].forEach(({direction, expectedQty}) => {
                it(`sort by ${direction.toUpperCase()}`, () => {
                    const c = mount(<App />);
                    c.find(`button#sort-by-${direction}`).simulate('click');

                    const [prod, ] = c.state().data;                   
                    expect(prod.qty).toBe(expectedQty);
                });
            });           
        });       
    });
});
