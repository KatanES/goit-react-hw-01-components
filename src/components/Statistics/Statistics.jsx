import {
  StatisticsList,
  Title,
  StatList,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsList>
      <Title>{title}</Title>

      <StatList>
        {stats.map(item => {
          return (
            <StatsItem key={item.id}>
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}%</Percentage>
            </StatsItem>
          );
        })}
      </StatList>
    </StatisticsList>
  );
};
