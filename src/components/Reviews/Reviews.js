import { Box } from '../Styled/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsByMovieId } from '../../services/movieApi';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      setReviews(await getReviewsByMovieId(movieId));
    })();
  }, [movieId]);

  return (
    <Box>
      {!reviews ? (
        <p>No reviews</p>
      ) : (
        <ul>
          {reviews.map(
            ({
              id,
              author,
              author_details: { rating, avatar_path },
              content,
              created_at,
              updated_at,
            }) => {
              return (
                <li key={id}>
                  <p>
                    <b>Author:</b> {author}
                  </p>
                  <p>
                    <b>Rating:</b> {rating}
                  </p>
                  <p>
                    <b>Created at</b> {created_at}
                  </p>
                  <p>
                    <b>Review:</b>
                  </p>
                  <p>{content}</p>
                  <p>
                    <b>Last updated:</b> {updated_at}
                  </p>
                </li>
              );
            }
          )}
        </ul>
      )}
    </Box>
  );
};
