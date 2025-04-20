import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import SplashPage from '../pages/SplashPage';
import BookPage from '../components/BookPage';
import SortedPage from '../components/SortedPage';
import FavoritePage from '../components/FavoritePage';
import FriendPage from '../components/FriendPage';
import AboutPage from '../components/AboutPage';
import ProfilePage from '../components/ProfilePage';
import PostPage from '../components/PostPage';

export const router = createBrowserRouter([
  // Splash page — no Layout
  {
    path: "/",
    element: <SplashPage />,
  },

  // All other pages — wrapped in Layout (with sidebar)
  {
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "books/:book_id",
        element: <BookPage />
      },
      {
        path: "sorted/:sorted_by",
        element: <SortedPage />
      },
      {
        path: "books/favorites",
        element: <FavoritePage />
      },
      {
        path: "friends",
        element: <FriendPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'profile/:user_id',
        element: <ProfilePage/>
      },
      {
        path: 'post/:post_id',
        element: <PostPage />
      }
    ],
  },
]);
