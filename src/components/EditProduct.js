import React from 'react'
import Form from '../pages/Form'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const EditProduct = (props) => {

    const {products, setProducts} = props.products;
    const [formData, setFormData] = useState({});
    const params = useParams();

    useEffect(() => {
       const existing_form_data = products.find(p => p.id === params.id);
       setFormData(existing_form_data);
     }, [params.id, products]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        let edited_products = products.map(p => {
            if (p.id === params.id) {

                let edited_data = {
                    productName: formData.productName,
                    color: formData.color,
                    category: formData.category,
                    price: formData.price,
                    id: p.id
                }
                setFormData({edited_data});
                return edited_data;
            } else {
                return p;
            }
        })
        
        setProducts(edited_products);
        
        console.log('edited_products',edited_products);
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));

    }

    return (
        <>
            <div className="mx-auto items-center my-6">

                <form className="max-w-md mx-auto items-center" onSubmit={handleSubmit}>
                    <div className='font-bold mx-auto text-center'>
                        <h2 >Please Edit Product</h2>
                    </div>

                    <div className='my-4'>
                        <Form formProps={{ handleInputChange, formData }} />
                    </div>
                </form>
            </div>

        </>
    )
}

export default EditProduct