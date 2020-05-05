import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import { UserTransaction } from '../../../types/transactions';
import messages from './messages';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function Transactions({transactions, onRepeat}: TransactionsProps) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="transactions">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell align="right">Date/Time</TableCell>
            <TableCell align="right">Correspondent Name</TableCell>
            <TableCell align="right">Transaction amount</TableCell>
            <TableCell align="right">Resulting balance</TableCell>
            <TableCell align="right">Repeat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row, n) => (
            <TableRow key={row.id}>
              <TableCell align="right">{n}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.balance}</TableCell>
              <TableCell align="right"><Button
                variant="contained"
                size="large"
                color="primary"
                type="submit"
                onClick={() => onRepeat({user: {id: row.id, name: row.username}, amount: Math.abs(row.amount)})}
              >
                <FormattedMessage {...messages.sendMoneyMsg} />
              </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

type TransactionsProps = {
  transactions: UserTransaction[];
  onRepeat: ({user: UserRecord, amount: any}) => void
}
