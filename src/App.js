import React, { Component } from 'react';
import ProductList from './component/plist';

import './stylesheets/css/component/controls.css';
import { PageHeader,ButtonGroup,Button,Panel,Navbar,Nav,NavItem,Modal,Image,Grid,Col, } from 'react-bootstrap';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: [{name:'Apple',qty:30,'price':300},{name:'A',qty:3,'price':1000},{name:'B',qty:13,'price':100},
                  {name:'Grapes',qty:12,'price':30},{name:'Banana',qty:83,'price':150},{name:'Pineapple',qty:3,'price':600},

            ],
            show:false
        }

        this.sortByQty = this.sortByQty.bind(this);
        this.sortByPrice = this.sortByPrice.bind(this);

        this.onRemoveCallback = this.onRemoveCallback.bind(this);
        this.handleHide = this.handleHide.bind(this);
       
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

    

    
   

  handleHide() {
    this.setState({ show: false });
  }

    

    render() {
        const { data } = this.state;

        const divStyle = {
                margin: '10em 0 0 0'
               
        };
               

        return [
            <div className="component controls" key='controls'>  
           <Navbar>
                 <Navbar.Header>
                 <Navbar.Brand>
                      <a>React-Bootstrap</a>
                </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1}  
                    onClick={() => this.setState({ show: true })}  pullRight='true'>
                             About Me
                    </NavItem>
                </Nav>
           </Navbar>              
                <PageHeader className="text-center" >
                        Products 
                </PageHeader>
                
                <div>
                <div className="col-xs-6 text-left" >
                    <h3>Sort by Quantity</h3>
                    <ButtonGroup>  
                        <Button id="sort-by-asc" onClick={() => this.sortByQty('asc')}>Low to High</Button>
                        <Button id="sort-by-desc" onClick={() => this.sortByQty('desc')}>High to Low</Button>
                    </ButtonGroup>
                </div>
                <div className="col-xs-6 text-right">
                    <h3>Sort by Price</h3>
                     <ButtonGroup>  
                         <Button onClick={() => this.sortByPrice('asc')}>Low to High</Button>
                        <Button onClick={() => this.sortByPrice('desc')}>High to Low</Button>   
                    </ButtonGroup>                   
                </div>
                </div>
            </div>,
            <br/>,
             <div style={divStyle}>
                 <ProductList key='prod' prods={data} removeCallBack={this.onRemoveCallback}/>
             </div>,
             <p className="col-xs-12 text-left">
                Click on an item to remove from list.
             </p>,


        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              About me
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Grid>
            <Col xs={6} md={4}>
            <Image src="/mypic.jpg" circle />
            </Col>
          </Grid>
            <p>I worked and still working to develop Web/Mobile/Desktop Software solutions. 
            I got chances to touch leading technologies for web based solutions like XML,Javascript, AJAX, JSON,GeoJSON, Sencha ExtJs,Bootstrap,AngularJs, jQuery etc.
            Developed GIS solutions using ArcGIS, ArcObject and Open source platforms.
            </p>
            <p>
            Also developed custom mobile applications for iOS , Android and Windows mobile platforms. Worked on various domains like Emergency Response Plan, Location Based Information Systems, Road and Safety Analysis, Online Education, Logistcs etc.
            My goal is to be professional in my works and provide good services to my organisation and to clients.
            </p>
          
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>,
        ];
    }
}

export default App;
