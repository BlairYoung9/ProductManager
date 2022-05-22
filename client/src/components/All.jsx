import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const All = (props) => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        getProductsFromDB()
    }, [])

    const getProductsFromDB = () => {
        axios.get("http://localhost:8001/api/products")
        .then(res => {
            console.log(res.data);
            setProducts(res.data.products);
        })
        .catch (err => console.log(err))
    }
    
    const deleteProduct = (deleteId) => {
        console.log(deleteId);
        axios.delete("http://localhost:8001/api/products/" + deleteId)
            .then( res => {
                console.log(res.data);
                console.log("SUCCESS DELETE!");

                // remove from DOM after delete success
                setProducts(products.filter( (product) => product._id !== deleteId))
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h3> all products!</h3>
            {
                products.map((prod,idx) => {
                    return(
                        <div key = {prod._id}>
                            <h3><Link to={"/products/" + prod._id}>{prod.title}</Link></h3>
                            <button onClick={ () => deleteProduct(prod._id)}>delete</button>    
                            {/* <h3>{prod.price}</h3>
                            <h3>{prod.description}</h3>      */}
                        </div>
                    )
                })
            }
        </div>
    )
};

export default All;