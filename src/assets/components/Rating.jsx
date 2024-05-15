const Rating = ({ data }) => (

    <>
        {[...Array(5)].map((_, index) => (
            <i key={index} className={index <= data - 1 ? 'fas fa-star' : 'far fa-star'}></i>
        ))}
    </>
)

export default Rating
