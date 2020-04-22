import React from 'react';
import { IntlProvider as IntlProviderBase } from 'react-intl';
import translations from '../../../common/translations';
import IntlTextComponent from '../IntlTextComponent';

// `key` is needed to force re-rendering
export default function IntlProvider({ locale, ...props }) {
  return (
    <IntlProviderBase
      key={locale}
      locale={locale}
      messages={translations[locale]}
      textComponent={IntlTextComponent}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

// IntlProvider.propTypes = {
//   locale: PropTypes.string.isRequired,
// };
