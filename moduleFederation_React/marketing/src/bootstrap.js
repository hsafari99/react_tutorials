import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const mount = (el) => {
    // const history = createMemoryHistory();
    const root = createRoot(el); // createRoot(container!) if you use TypeScript
    root.render(<App history={history} />);
};

if (process.env.NODE_ENV == 'development') {
    const container = document.getElementById('_marketing_mfe_root');
    if (container) {
        mount(container);
    }
}

export { mount };