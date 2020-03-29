import * as React from 'react';
import { RouteContainer } from './routes/router';
import { WithHistoryProps } from './types';

export const App = ({ history }: WithHistoryProps) => (<RouteContainer history={history} />)