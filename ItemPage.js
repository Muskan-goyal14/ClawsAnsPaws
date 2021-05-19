import React from 'react'
import './ItemPage.css'
import "bootstrap/dist/css/bootstrap.min.css";

class ItemPage extends React.Component{
   
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className={"ItemsContainer"}>
                {this.props.items.map(item => (
                    <Item key = {item.id} item ={item} onAddToCart = {() => this.props.onAddToCart(item)} />
                ))}
            </div>
        )
    }

   
}

class Item extends React.Component{
    
    constructor(props){
        super(props)
    }
    

    render(){
        return(
            <>
            
            <div className={"ItemContainer"}>
               
                <div className={"ItemImage"}>
                    <img src={this.props.item.image}  alt={"product"} width={120}/>
                </div>

                <span className={"ItemName"}>
                    {this.props.item.name}
                </span>

               

                <span className={"ItemDes"}>
                    {this.props.item.description}
                </span>

                <button className={"addToCart"} onClick={this.props.onAddToCart}>
                    Add To Cart
                </button>

            </div>
           </>
        )
    }

    
}

export default ItemPage;