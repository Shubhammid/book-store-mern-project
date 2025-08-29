import { FiShoppingCart } from "react-icons/fi"
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi'
import { getImgUrl } from '../../utils/getImgUrl'

const SingleBook = () => {
  const { id } = useParams()
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id)
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }

  if (isLoading) return <div className="text-center py-10">Loading...</div>
  if (isError) return <div className="text-center text-red-500 py-10">Failed to load book details.</div>

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl p-6">
        <div className="flex justify-center">
          <img
            src={getImgUrl(book.coverImage)}
            alt={book.title}
            className="w-full max-w-sm rounded-xl shadow-md object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{book.title}</h1>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Author:</span> {book.author || "Admin"}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Published:</span> {new Date(book?.createdAt).toLocaleDateString()}</p>
            <p className="text-gray-600 mb-2"><span className="font-semibold">Category:</span> <span className="capitalize">{book.category}</span></p>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              <span className="font-semibold">Description:</span> {book.description}
            </p>
          </div>
          <button
            onClick={() => handleAddToCart(book)}
            className="mt-6 flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
          >
            <FiShoppingCart size={20} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleBook
