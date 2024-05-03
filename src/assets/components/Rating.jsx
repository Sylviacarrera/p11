const Rating = ({ data }) => (
    // Création d'une étoile de classement pour le rating en utilisant Font Awesome
    <>
        {[...Array(5)].map((_, index) => (
            <i key={index} className={index <= data - 1 ? 'fas fa-star' : 'far fa-star'}></i>
        ))}
    </>
)

export default Rating
