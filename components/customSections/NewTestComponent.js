import PropTypes from "prop-types"

const TestComponent = ({ data }) => {
    return (
        <div className="container py-12 bg-red-200">
            <p>{data.title}</p>
        </div>
    )
}

TestComponent.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
    }),
}

export default TestComponent