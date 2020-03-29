import * as React from 'react';
import { render } from 'react-dom';

export const bootstrap = (App: React.ComponentType<{}>) => {
    const rootEl = document.createElement('div');
    document.body.appendChild(rootEl);

    return render(
        <App />,
        rootEl,
    )
}