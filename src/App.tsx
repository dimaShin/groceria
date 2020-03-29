import * as React from 'react';
import { Provider } from 'mobx-react';
import { RouteContainer } from './routes/router';
import { WithHistoryProps } from './types';
import { createStores } from './stores';

export const App = ({ history }: WithHistoryProps) => {
    const rootStore = createStores(history);
    return (
        <Provider {...rootStore}>
            <RouteContainer history={history} />
        </Provider>
    )
}