const RatingStars = ({ rating }) => {
    let output = []
    let starColor = ''
    let ratingFloor = Math.floor(rating)
    let ratingDecimal = rating - ratingFloor

    for (let i = 1; i <= 5; i++) {
        starColor = (i <= ratingFloor) ? 'text-primary-600' : 'text-gray-600'
        output.push((
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path className={`${starColor}`} d="M9.03995 3.67909C9.3426 2.77364 10.6571 2.77364 10.9588 3.67909L12.0383 6.91549C12.1042 7.1126 12.2324 7.28434 12.4045 7.40617C12.5767 7.528 12.7839 7.59369 12.9967 7.59384H16.4893C17.4669 7.59384 17.8724 8.8129 17.0825 9.37328L14.2577 11.3729C14.0852 11.4949 13.9568 11.6669 13.8908 11.8643C13.8249 12.0618 13.8248 12.2745 13.8905 12.472L14.97 15.7085C15.2726 16.6139 14.2083 17.368 13.4163 16.8076L10.5916 14.8079C10.4193 14.686 10.2118 14.6204 9.99886 14.6204C9.78594 14.6204 9.57847 14.686 9.40616 14.8079L6.58138 16.8076C5.79044 17.368 4.72711 16.6139 5.02875 15.7085L6.10823 12.472C6.17398 12.2745 6.17386 12.0618 6.10789 11.8643C6.04192 11.6669 5.91349 11.4949 5.741 11.3729L2.91723 9.37426C2.1273 8.81388 2.53387 7.59482 3.51043 7.59482H7.00207C7.21498 7.59488 7.42246 7.52929 7.59479 7.40744C7.76713 7.28559 7.89548 7.11374 7.96149 6.91648L9.04096 3.68007L9.03995 3.67909Z" fill="currentColor" />
                {(i == (ratingFloor + 1) && ratingDecimal >= 0.39) && (
                    <>
                        <path className="text-primary-600" d="M9.03995 3.67909C9.3426 2.77364 10.6571 2.77364 10.9588 3.67909L12.0383 6.91549C12.1042 7.1126 12.2324 7.28434 12.4045 7.40617C12.5767 7.528 12.7839 7.59369 12.9967 7.59384H16.4893C17.4669 7.59384 17.8724 8.8129 17.0825 9.37328L14.2577 11.3729C14.0852 11.4949 13.9568 11.6669 13.8908 11.8643C13.8249 12.0618 13.8248 12.2745 13.8905 12.472L14.97 15.7085C15.2726 16.6139 14.2083 17.368 13.4163 16.8076L10.5916 14.8079C10.4193 14.686 10.2118 14.6204 9.99886 14.6204C9.78594 14.6204 9.57847 14.686 9.40616 14.8079L6.58138 16.8076C5.79044 17.368 4.72711 16.6139 5.02875 15.7085L6.10823 12.472C6.17398 12.2745 6.17386 12.0618 6.10789 11.8643C6.04192 11.6669 5.91349 11.4949 5.741 11.3729L2.91723 9.37426C2.1273 8.81388 2.53387 7.59482 3.51043 7.59482H7.00207C7.21498 7.59488 7.42246 7.52929 7.59479 7.40744C7.76713 7.28559 7.89548 7.11374 7.96149 6.91648L9.04096 3.68007L9.03995 3.67909Z" fill="currentColor" />
                        <path className="text-gray-600" d="M10 14.6204C10.2125 14.6206 10.4196 14.6862 10.5916 14.8079L13.4163 16.8076C14.2083 17.3679 15.2726 16.6139 14.97 15.7085L13.8905 12.472C13.8248 12.2745 13.8249 12.0618 13.8908 11.8643C13.9568 11.6669 14.0852 11.4949 14.2577 11.3729L17.0825 9.37328C17.8724 8.8129 17.4669 7.59384 16.4893 7.59384H12.9967C12.7839 7.59369 12.5767 7.528 12.4045 7.40617C12.2324 7.28434 12.1042 7.1126 12.0383 6.91549L10.9588 3.67909C10.808 3.22646 10.4041 3.0001 10 3V14.6204Z" fill="currentColor" />
                    </>
                )}
            </svg>
        ))
    }

    return output
}

export default RatingStars