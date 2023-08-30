import PropTypes from "prop-types"

export const Head = ({name, quantity, price}) => {
    return (
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">{name}</th>
                <th scope="col">{quantity}</th>
                <th scope="col">{price}</th>
            </tr>
        </thead>
    );
}

Head.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.string,
    price: PropTypes.string,
}
