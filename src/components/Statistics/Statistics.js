import StatisticsTitle from 'components/Statistics/StatisticsTitle';
import {
  Container,
  StatsList,
  StatsItem,
} from 'components/Statistics/Statistics.styled';
import { randomColor } from 'components/Statistics/RandomColor';

export default function Statistics({ title, stats }) {
  return (
    <Container>
      {title && <StatisticsTitle text={title} />}

      <StatsList>
        {stats.map(statsItem => (
          <StatsItem key={statsItem.id} bg={randomColor()}>
            <span className="label">{statsItem.label}%</span>
            <span className="percentage">{statsItem.percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </Container>
  );
}
