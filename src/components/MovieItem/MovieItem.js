import { Box } from '../Styled/Box';

export const MovieItem = ({ movie: { title, name, overview } }) => {
  return (
    <Box p={3} mb={3} bg="lightgrey">
      <p>Title: {title || name}</p>
      <p>Overview: {overview}</p>
    </Box>
  );
};
