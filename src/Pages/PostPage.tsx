import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/Postsstyle.css';

type posttype = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<posttype | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const email = localStorage.getItem('Email');

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      <h1>{email}</h1>
      <div>
        <button
          className='back-to-posts'
          onClick={() => {
            navigate('/users-posts/posts');
          }}
        >
          Go Back
        </button>
      </div>
      {!isLoading && post && (
        <div className='post-block'>
          <p>
            <b>UserId:</b>
            {post.userId}
          </p>
          <p>
            <b>Id:</b>
            {post.id}
          </p>
          <p>
            <b>Title:</b>
            {post.title}
          </p>
          <p>
            <b>Body:</b>
            {post.body}
          </p>
        </div>
      )}
      {!isLoading && !post ? <div>Post Not Found</div> : <div>Loading...</div>}
    </>
  );
};

export default PostPage;
