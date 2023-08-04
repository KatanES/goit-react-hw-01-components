import { Transaction } from './Transaction';
import {
  Table,
  TableHead,
  TransactionRow,
  HeadTitles,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TransactionRow>
          <HeadTitles>Type</HeadTitles>
          <HeadTitles>Amount</HeadTitles>
          <HeadTitles>Currency</HeadTitles>
        </TransactionRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Transaction
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};
