import {makeStyles} from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
  secondRow: {
    backgroundColor: '#041e3f'
  },
  content: {
    minHeight: 'calc(100vh - 88px)'
  },
  footerContent: {
    color: grey[500],
    fontSize: 16
  }
}));

export default useStyles;
