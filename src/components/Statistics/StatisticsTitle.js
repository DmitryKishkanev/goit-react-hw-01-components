import PropTypes from 'prop-types';
import { Title } from 'components/Statistics/StatisticsTitle.styled';

export default function StatisticsTitle({ text }) {
  return <Title>{text}</Title>;
}

StatisticsTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
