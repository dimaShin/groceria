import * as React from 'react';
import { Provider } from 'mobx-react';
import { RouteContainer } from './routes/router';
import { WithHistoryProps } from './types';
import { createStores } from './stores';
import { FirebaseProvider } from './services/firebase.adapter';
import localConfig from './services/config.local';

export const App = ({ history }: WithHistoryProps) => {
    const rootStore = createStores(history);

    return (
        <Provider {...rootStore}>
            <FirebaseProvider config={localConfig}>
                <RouteContainer history={history} />
            </FirebaseProvider>
        </Provider>
    )
}