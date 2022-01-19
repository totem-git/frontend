const SliderIndicators = ({ activeSlides }) => {
    return (
        <div className="flex items-center space-x-2">
            {activeSlides.map((isActive, i) => (
                <div key={i} className={`${isActive ? 'p-1 bg-white' : 'p-0.5 bg-gray-500'} rounded-full transition-all`}></div>
            ))}
        </div>
    )
}

export default SliderIndicators