import './card.scss'

const Card = ({ data }) => {
    const styling = {
        lowStock: {
            color: "red"
        }
    }
    return (
        <div className="card-container">
            <div className="list-container">
                {data.data.books.map((book, index) => {
                    const genre_ = book.genre.join(", ")
                    return <div key={index} className='list-items'>
                        <img src={book.image}></img>
                        <p><b>{book.title}</b></p>
                        <p>Author:  {book.author}</p>
                        <p>Genre:  {genre_}</p>
                        <p>Price:  {book.price}</p>
                        {book.stock > 20 ? <p>Stock:  {book.stock}</p> : <p style={styling.lowStock}>Stock:  {book.stock}</p>}
                    </div>
                })}
            </div>
        </div>
    )
}

export default Card