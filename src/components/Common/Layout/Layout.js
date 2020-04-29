import React from 'react';
import { FormattedMessage } from 'react-intl';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import HeaderBar from '../../../containers/Common/HeaderBar/HeaderBarContainer';
import messages from './messages';

const Layout = ({ children, type }) => {
  const classes = useStyles();
  const showFooter = type === 'home';

  return (
    <>
      <Box className={classes.content}>
        <Box mb={10}>
          <CssBaseline />
          <HeaderBar />
          {children}
        </Box>
      </Box>
      <Box className={classes.secondRow} p={4}>
        <Grid container>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Box mr={4}>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.footerContent}
                >
                  <FormattedMessage {...messages.copyright} />
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
//   type: PropTypes.string
// };
//
// Layout.defaultProps = {
//   type: undefined
// };

export default Layout;
