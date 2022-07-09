import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { PostItem, PostItemProps, StyledItem } from './PostItem';
import Spinner from './Spinner';

const PostsContainer = styled.ul`
  padding: 1rem;
  min-width: 100%;
  max-width: 100%;
  & > ${StyledItem} ~ ${StyledItem} {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const PostsList = () => {
  const [posts, setPosts] = useState<PostItemProps[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  // #region infinite scrolling

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    // Whenever the element is visible, we load the next page
    if (target.isIntersecting) {
      setPage((p) => p + 1);
    }
  }, []);
  useEffect(() => {
    // Initialize the observer
    const option = {
      root: null,
      rootMargin: '5px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    // Watch the loader element
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    // Fetch the data whenever the current page changes
    setLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${page * 10}&_limit=10`
    )
      .then((response) => response.json())
      .then((data: Array<PostItemProps>) => {
        setPosts((prevPosts) => [...prevPosts, ...data]);
        setLoading(false);
      });
  }, [page]);
  // #endregion

  return (
    <>
      <PostsContainer>
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </PostsContainer>
      {loading && <Spinner />}
      <div ref={loader} />
    </>
  );
};
