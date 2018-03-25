import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/css/component/card.css';

const Product = ({name, qty, price, onClick }) => <div className='' onClick={onClick}>
    <ul>
     <li> Name: {name} </li>
   	 <li>Quantity : {qty}</li>
   	 <li>Price : {price}</li>
    </ul>
</div>;

Product.propTypes = { 
	name:  PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

Product.defaultProps = {
};

export default Product;
