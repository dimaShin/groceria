import * as React from 'react';
import * as firebase from 'firebase/app';

// import 'firebase/auth';
import 'firebase/database';


export default firebase;

export interface FirebaseProviderProps {
    config: Record<string, string>;
    children: React.ReactNode;
}

export const FirebaseProvider = ({ config, children }: FirebaseProviderProps) => {
    const [isInitialised, setInitialised] = React.useState(false);
    React.useEffect(() => {
        firebase.initializeApp(config);
        setInitialised(true);
    }, []);

    return (
        <>
            {isInitialised ? children : <p>Loading...</p>}
        </>
    );
}