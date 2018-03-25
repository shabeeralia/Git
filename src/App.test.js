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

       
    });
});
