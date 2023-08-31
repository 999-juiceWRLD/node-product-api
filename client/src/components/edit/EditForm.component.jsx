import { useParams } from "react-router-dom";

// name
// quantity
// price

export const EditForm = () => {
    
    const { id } = useParams();
    return (
        <div className="input-group mb-3">
            <p>Edit element — {id}:</p>
        </div>
    );
}
