import * as React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory, History } from 'history';
import { WithHistoryProps } from './types';

declare const process: {
    env: 'development' | 'production';
}


export async function bootstrap(App: React.ComponentType<WithHistoryProps>): Promise<void> {
    const history = createBrowserHistory();
    const rootEl = document.createElement('div');
    document.body.appendChild(rootEl);

    if (process.env === 'development') {
        const { hot } = await import(/* webpackChunkName: "hot-loader" */ 'react-hot-loader/root');
        
        const HotApp = hot(App);
        await render(<HotApp history={history} />, rootEl);
    }

    await render(
        <App history={history} />,
        rootEl,
    )
}