import styled from 'styled-components';

export const Table = styled.table`
  width: 80%;
  margin: 40px auto;
  padding: 10px 35px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 2px 15px 2px rgba(120, 120, 120, 1);
`;

export const TableHead = styled.thead`
  height: 25px;
  tr {
    background-color: skyblue;
    color: #ffffff;
  }
`;

export const TableBody = styled.tbody`
  tr:nth-of-type(even) {
    background-color: lightgray;
  }
`;

export const TransactionRow = styled.tr`
  text-align: center;
`;

export const HeadTitles = styled.th`
  text-transform: uppercase;
  padding: 12px 15px;
  border: 1px solid slategray;
`;

export const TransactionType = styled.td`
  text-transform: capitalize;
  padding: 12px 15px;
  width: calc(100% / 3);
  border: 1px solid #e8e8e8;
`;

export const TableCells = styled.td`
  padding: 12px 15px;
  width: calc(100% / 3);
  border: 1px solid #e8e8e8;
`;
