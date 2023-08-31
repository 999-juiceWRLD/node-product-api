import axios from "axios"
import { useState } from "react";
import { StatusComp } from "./StatusComp.component";

export const Create = () => {
    
    const [values, setValues] = useState({ name: '', quantity: '', price: '' })
    const [isSuccess, setSuccess] = useState(false);
    const url = 'http://localhost:3000/api';

    const setParam = (name) => {
        // console.log(name);
        return ({ target: { value } }) => {
            setValues(oldValues => ({...oldValues, [name]: value }));
        }
    }
    
    const postData = async (e) => {
        e.preventDefault();
        // console.log('post data function is invoked');
        console.log(values);
        await axios.post(`${url}/product`, values)
            .then(res => { 
                console.log(res)
                if (res.status === 200) {
                    setSuccess(prev => (!prev))
                }
            })
            .catch(err => { console.log(err)})
    }

    return (
        <div>
            <h1 className="mt-3 pb-3">Add New Element</h1>
            <h4 className="mb-4">Warning: You have to fill each component below.</h4>
            {/* <StatusComp /> */}
            {/* {isSuccess ? (<div className="alert alert-sucess" role="alert">Data sent successfuly</div>) : null} */}
            { isSuccess ? (<StatusComp />) : null}
            <form className="mt-2" action="" method="POST" onSubmit={postData}>
                <div className="mb-3">
                    <label className="form-label"> Product Name</label>
                    <input type="text" value={values.name} required className="form-control" id="name" 
                           onChange={setParam('name')}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input type="number" value={values.quantity} required className="form-control" id="quantity" 
                           onChange={setParam('quantity')}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" value={values.price} required className="form-control" id="price" 
                           onChange={setParam('price')}/>
                </div>
                <div className="d-flex justify-content-end my-4">
                    <button type="submit" className="btn btn-primary px-5">Send</button>
                </div>
            </form>
        </div>
    );
}
