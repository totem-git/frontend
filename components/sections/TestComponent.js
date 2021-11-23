import PropTypes from "prop-types"

const TestComponent = ({ data }) => {
    return (
        <div className="py-12 bg-green-200">
            <p>{data.text}</p>
        </div>
    )
}

TestComponent.propTypes = {
    data: PropTypes.shape({
        text: PropTypes.string,
    }),
}

export default TestComponent