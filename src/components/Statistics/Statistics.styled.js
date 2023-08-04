import styled from 'styled-components';
import getRandomHexColor from '../Color/getRandomHexColor';

export const StatisticsList = styled.section`
  width: 350px;
  height: 100%;
  margin: 50px auto;
  padding: 30px 0 0;
  overflow: hidden;
  background-color: ghostwhite;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  color: darkgrey;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0px;
  gap: 6px;
  background-color: ${getRandomHexColor};
  padding: 16px 0;
`;

export const Label = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 4px rgba(136, 136, 136, 1);
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 4px rgba(136, 136, 136, 1);
`;
