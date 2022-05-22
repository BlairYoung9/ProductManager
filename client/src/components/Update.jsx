import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom';

const Update = (props) => {

    let history = useHistory();

    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [price, setPrice] = useState("");
    const [priceError, setPriceError] = useState("");
    const [description, setDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8001/api/products/" + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))

    }, [])

    const update = (e) => {
        e.preventDefault();
        const newProduct = { title, price, description };
        axios.put("http://localhost:8001/api/products/" + id, newProduct)
            .then(res => {
                console.log(res.data);
                console.log("SUCCESS writing to the DB!!");
                history.push("/")
            })
            .catch(err => {
                console.log("❌ ERROR!!!");
                console.log(err);
            })
    }
    

    const handleTitle= (e) => {
        setTitle(e.target.value);
        if(e.target.value.length < 1) {
            setTitleError("Title is required!");
        } else if(e.target.value.length < 2) {
            setTitleError("Title must be 2 characters or longer!");
        }else{
            setTitleError(""); 
        }
    }
    const handlePrice= (e) => {
        setPrice(e.target.value);
        if(e.target.value.length < 1) {
            setPriceError("Price is required!");
        } else if(e.target.value.length < 2) {
            setPriceError("Price must be 2 characters or longer!");
        }else{
            setPriceError(""); 
        }
    }
    const handleDescription= (e) => {
        setDescription(e.target.value);
        if(e.target.value.length < 1) {
            setDescriptionError("Description is required!");
        } else if(e.target.value.length < 5) {
            setDescriptionError("Description must be 5 characters or longer!");
        }else{
            setDescriptionError(""); 
        }
    }

    return <div>
        <form onSubmit={update}>
            <div>
                <label>Title: </label>
                <input type="text" onChange={handleTitle} value={title} />
                <p>{titleError}</p>
            </div>
            Title : {title}
            <div>
                <label>Price: </label>
                <input type="text" onChange={handlePrice} value={price} />
                <p>{priceError}</p>
            </div>
            Price : {price}
            <div>
                <label>Description: </label>
                <input type="text" onChange={(e) => handleDescription(e)} value={description} />
                <p>{descriptionError}</p>
            </div>
            Description : {description}
            <input type="submit" value="Create User" />
        </form>
    </div>
};

export default Update;