import PropTypes from "prop-types"

export const Head = ({name, quantity, price}) => {
    return (
        <thead>
            <tr>
                <th>{name}</th>
                <th>{quantity}</th>
                <th>{price}</th>
            </tr>
        </thead>
    );
}

Head.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.string,
    price: PropTypes.string,
}
