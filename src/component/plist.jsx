import React from 'react';
import Product from './product';
import PropTypes from 'prop-types';
import '../stylesheets/css/component/plist.css';

const ProductList = ({ prods, removeCallBack }) => <div>
    {
        prods.map(({ name,qty, price }, index) => <Product key={index} name={name} qty={qty} price={price} onClick={() => removeCallBack(index)} />)
    }
</div>;

ProductList.propTypes = {
    prods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ProductList.defaultProps = {
};

export default ProductList;
