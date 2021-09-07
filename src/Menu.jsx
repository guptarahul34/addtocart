import React from 'react'
import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
// import RemoveIcon from '@material-ui/icons/Remove';
import Data from './Data';
import {addItem, useCart} from 'react-use-cart';
import Cart from "./Cart";


const style = {
    height:"60px"
}
const Menu = () => {
    const {addItem} = useCart();
    
    return (
        <>
        <div className="container-fluid bg-primary" style={style}>
                <div className="icon">
                    <img src="../assets/icon.svg" alt="random images" />
                    <span className="restaurant">Food's Restaurant</span>
                </div>
                
                <div className="row ">
                    {
                        Data.map((currElement,index)=>{
                            const {name,price} = currElement;
                            return (
                                <div className="col-lg-3 offset-1 col-md-6 col-sm-12 my-3" key={index}>
                            <div className="card">
                                <img src={currElement.image} alt="random" className="card-img"/>
                                <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                    <p className="card-text">Price: {price}</p>
                                    <Button variant="contained" color="primary" onClick={()=>{addItem(currElement)}}>
                                        Add To Card
                                    </Button>
                                    {/* <Button variant="contained" style={{marginLeft:"10px"}} >
                                        <RemoveIcon/>
                                    </Button> */}
                                </div>
                            </div>
                    </div>
                            )
                        })
                    }
                    

                </div>
                <Cart  />
            </div>
            
                 
           
        </>
    )
}

export default Menu;
