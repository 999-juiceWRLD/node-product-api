import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { StatusComp } from "../create/StatusComp.component"
import axios from "axios"

export const EditForm = () => {
    
    const [values, setValues] = useState({ name: '', quantity: '', price: '' })
    const [isSuccess, setSuccess] = useState(false);
    const { id } = useParams();

    const url = 'http://localhost:3000/api';

    useEffect(() => {
        axios.get(`${url}/product/${id}`)
            .then(axiRes => { return axiRes.data})
            .then(resData => { return resData.data })
            .then(necessaryData => {
                const form = {
                    name: necessaryData.name,
                    quantity: necessaryData.quantity,
                    price: necessaryData.price
                }
                setValues(form)
            })
            .catch(err => { console.log(err) })
    }, [id]);

    const updateData = async (e) => {
        e.preventDefault();
        await axios.patch(`${url}/product/${id}`, values)
            .then(message => { 
                if (message.status === 200) {
                    setSuccess(prev => ( !prev ))
                }})
            .catch(err => { console.log(err) })
    }
    const setParam = (name) => {
        // console.log(name);
        return ({ target: { value } }) => {
            setValues(oldValues => ({...oldValues, [name]: value }));
        }
    }

    return (
        <div>
            <h1 className="my-3">Edit record</h1>
            {isSuccess ? (<StatusComp />) : null }
            <form className="mt-2" action="PATCH" onSubmit={updateData}>
                <div className="mb-3">
                <input className="form-control" id="disabledInput" type="text" placeholder={`id: ${id}`} disabled />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
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
                    <button type="submit" className="btn btn-primary px-5">Save</button>
                </div>
            </form>
        </div>
    );
}

