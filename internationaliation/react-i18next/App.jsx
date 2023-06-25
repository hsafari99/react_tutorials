import React from 'react';
import { useTranslation } from './translation/config';

import LanguageSelector from './LanguageSelector';

const App = () => {
    const { t } = useTranslation();

    return (
      <div>
        <LanguageSelector />
        {t('greeting', { name: 'John' })}
      </div>
    );
  }

  export default App;