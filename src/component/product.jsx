import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/css/component/card.css';
import { Panel, } from 'react-bootstrap';

const Product = ({name, qty, price, onClick }) => <div  className="col-md-4" onClick={onClick}>    
    <Panel bsStyle="primary">
    <Panel.Heading>
      <Panel.Title componentClass="h3">{name}</Panel.Title>
    </Panel.Heading>
    <Panel.Body>
     <ul>
    	<li>Quantity : {qty}</li>
   	 	<li>Price : {price}</li>
   	 </ul>
    </Panel.Body>
  </Panel>
</div>;

Product.propTypes = { 
	name:  PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
};

Product.defaultProps = {
};

export default Product;
