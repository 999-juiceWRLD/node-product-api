import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PropTypes from "prop-types"
import axios from "axios"

export const EditForm = () => {
    
    const [values, setValues] = useState({ name: '', quantity: '', price: '' })
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
    const setParam = (name) => {
        // console.log(name);
        return ({ target: { value } }) => {
            setValues(oldValues => ({...oldValues, [name]: value }));
        }
    }

    return (
        <div>
            <h1 className="my-3">Edit record</h1>
            <form className="mt-2" action="PATCH">
                <div className="mb-3">
                <input className="form-control" id="disabledInput" type="text" placeholder={`id: ${id}`} disabled />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" value={values.name} required className="form-control" id="name"
                           onChange={setParam('name')}/>
                </div>
            </form>
        </div>
    );
}

EditForm.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number
}
