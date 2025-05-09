import './MainPage.css'
import { getAllBooksThunk } from '../../redux/books';
import { getAllFavoritesThunk } from '../../redux/books';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Card from '../Card';

const MainPage = () => {
    const books = useSelector(state => state.bookState.books)
    const [isLoaded, setIsLoaded] = useState(false);
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBooksThunk())
        .then(() => {if(user){dispatch(getAllFavoritesThunk())}})
        .then(() => setIsLoaded(true));
    }, [dispatch, user]);

    return isLoaded ? (
            <div id='books-container'>
                {books.map((book) =>
                {
                    return (
                        <div key={`${book.id}-${book.title}`} className='card-holder'>
                                <Card
                                id={book.id}
                                author={book.author}
                                cover={book.cover}
                                favBooks={book.fav_book_users}
                                posts={book.posts}
                                title={book.title}
                                ></Card>
                        </div>
                    )
                }
                )
                }
            </div>
    ) : (<h1 className="loading">loading...</h1>)
}

export default MainPage;
