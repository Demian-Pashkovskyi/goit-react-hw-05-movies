import PropTypes from 'prop-types';
import { StyledSection } from './SectionStyled';

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

Section.protoType = {
  children: PropTypes.element,
};

export default Section;