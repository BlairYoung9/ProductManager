import React, {useState, useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import axios from 'axios';



const ViewOne = (props) =>{
    const [products, setProducts] = useState([])
    const {id} = useParams();
    const [thisProduct, setThisProduct] = useState({});
    useEffect( () => {
        axios.get("http://localhost:8001/api/products/"+ id)
            .then(res => {
                console.log(res.data);
                setThisProduct(res.data);
            })
            .catch(err => console.log(err))

    }, [])
    const deleteProduct = (deleteId) => {
        // console.log(deleteId);
        axios.delete("http://localhost:8001/api/products/" + deleteId)
            .then( res => {
                console.log(res.data);
                console.log("SUCCESS DELETE!");

                // remove from DOM after delete success
                setProducts(products.filter( (product) => product._id !== deleteId))
            })
            .catch(err => console.log(err))
        }
    

    return <div>
        <h2>View One</h2>
        <h2>{thisProduct.title}</h2>
        <h2>{thisProduct.price}</h2>
        <h2>{thisProduct.description}</h2>
        <Link to={"/products/update/" +id}>edit</Link>
        <button onClick={ () => deleteProduct(id)}>delete</button>
    </div>
}
export default ViewOne;