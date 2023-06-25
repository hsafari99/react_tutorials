import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import resources from '.';

i18n.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources,
  });

export default useTranslation;
