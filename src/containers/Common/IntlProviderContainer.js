import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getLocale } from '../../reducers/common/config';
import IntlProvider from '../../components/Common/IntlProvider';

const mapState = createStructuredSelector({ locale: getLocale });

const mapDispatch = {};

export default connect(mapState, mapDispatch)(IntlProvider);
