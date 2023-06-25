import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';

import messages from './translation';

const App = () => {
    const locale = 'en';

    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div>
          <FormattedMessage id="greeting" values={{ name: 'John' }} />
        </div>
      </IntlProvider>
    );
  }
export default App;