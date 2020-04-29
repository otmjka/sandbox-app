import {makeStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  secondRow: {
    backgroundColor: theme.appBar.backgroundColor
  },
  content: {
    minHeight: 'calc(100vh - 88px)'
  },
  footerContent: {
    color: grey[900],
    fontSize: 16
  }
}));

export default useStyles;
