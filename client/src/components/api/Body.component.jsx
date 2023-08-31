import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

export const Body = () => {

    const [recordArr, setRecordArr] = useState([]);
    const baseUrl = 'http://localhost:3000/api';

    const setRecord = (arr) => {
        setRecordArr(arr);
    }

    const deleteRequest = (element) => {
        axios.delete(`${baseUrl}/product/${element._id}`)
            .then(msg => { console.log(msg) })
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        axios.get(`${baseUrl}/product`)
            .then(axiRes => { return axiRes.data })
            .then(dataRes => { return dataRes.data })
            .then((record) => { setRecord(record) })
            .catch(err => { console.log(err) })
    }, [recordArr]);

    return (
        <tbody className="align-middle" style={{ fontSize: "0.7rem" }}>
            {recordArr.map((e, idx) => (
                <tr key={e._id}>
                    <th scope="row">{idx + 1}</th>
                    <td>{e.name}</td>
                    <td>{e.quantity}</td>
                    <td>{e.price}$</td>
                    <td><button type="button" style={{ fontSize: "0.7rem" }} className="btn btn-danger" onClick={() => deleteRequest(e)}>Delete</button></td>
                    <td><Link to={`edit/${e._id}`}><button type="button" style={{ fontSize: "0.7rem" }} className="btn btn-warning">Edit</button></Link></td>
                </tr>
            ))}
        </tbody>
    );
}
