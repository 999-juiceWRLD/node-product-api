import { useEffect, useState } from "react";
import axios from "axios"

export const Body = () => {

    const [recordArr, setRecordArr] = useState([]);
    const baseUrl = 'http://localhost:3000/api';

    const setRecord = (arr) => {
        setRecordArr(arr);
    }

    useEffect(() => {
        axios.get(`${baseUrl}/product`)
            .then(axiRes => { return axiRes.data })
            .then(dataRes => { return dataRes.data })
            .then((record) => { setRecord(record) })
            .catch(err => { console.log(err) })
    }, []);

    return (
        <tbody>
            {recordArr.map((e, idx) => (
                <tr key={e._id}>
                    <th scope="row">{idx + 1}</th>
                    <td>{e.name}</td>
                    <td>{e.quantity}</td>
                    <td>{e.price}$</td>
                </tr>
            ))}
        </tbody>
    );
}
