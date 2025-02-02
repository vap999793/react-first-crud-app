import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Form from '../pages/Form';

const AddToForm = ({addProduct}) => {

    const [formData, setFormData] = useState({});

    const handleSubmit = (e) =>{
        e.preventDefault();
        addProduct(formData);
        setFormData({});
    }

    const handleInputChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
            id: uuidv4()
        }));
    }

    return (
        <>
            <div className="mx-auto items-center my-6">

                <form className="max-w-md mx-auto items-center" onSubmit={handleSubmit}>
                    <div className='font-bold mx-auto text-center'>
                        <h2 >Please Add Product</h2>
                    </div>

                    <div className='my-4'>
                        <Form formProps = {{handleInputChange, formData}} />
                    </div>
                </form>
            </div>

        </>
    )
}

export default AddToForm