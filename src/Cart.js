import React from 'react'
import {useCart} from 'react-use-cart';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const style = {
  height:"60px"
}
const Cart = () => {
    let {isEmpty,totalUniqueItems,items,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart} = useCart();
    if(isEmpty) return <p className="text-center">This Cart Is Empty</p>
    return (
        <>
          <p>Cart({totalUniqueItems})Your Total Item Is {totalItems}</p>  
         
          <table class="table">
                <tbody>
                 {
                   items.map((itemsData,index)=>{
                      return(
                        <tr key={index}>
                         
                          <td><img src={itemsData.image} alt="random img" width="100" height="100"/></td>
                          <td>name {itemsData.name}</td>
                          <td>price rs.{itemsData.price}</td>
                          <td> Quantity {itemsData.quantity}</td>
                          <td>
                          <Button variant="contained" onClick={()=>{updateItemQuantity(itemsData.id, itemsData.quantity-1)}}> <RemoveIcon/></Button>
                          <Button variant="contained" style={{marginLeft:"10px"}} onClick={()=>{updateItemQuantity(itemsData.id, itemsData.quantity+1)}}><AddIcon  /></Button>&nbsp;&nbsp;
                          <Button variant="contained"  onClick={()=>{removeItem(itemsData.id)}}>Remove Item</Button>
                          </td>
                        </tr>
                        
                      )
                   })
                 }                  
                </tbody>
           </table>
           <div className="mb-5" style={{marginLeft:"1000px"}}>
            Cart Total :{cartTotal}
            <button className="btn btn-outline-success offset-1" onClick={()=>{emptyCart()}} >Clear Cart</button>
           </div>
          
        </>
    )
}

export default Cart;
