import React from 'react';
import PropTypes from 'prop-types';
import { Actor } from '@dfinity/agent'; // Import Actor from the appropriate library
import { AuthClient } from '@dfinity/auth-client';
import { mencer_show_backend } from 'declarations/mencer_show_backend'


const AuthButton = ({ label, isNFID, isStudent }) => {
    const [authClient, setAuthClient] = React.useState(null);
    const windowOpenerFeatures = `
    left=${window.screen.width / 2 - 525 / 2},
    top=${window.screen.height / 2 - 705 / 2},
    toolbar=0,location=0,menubar=0,width=525,height=705
  `;

    React.useEffect(() => {
        const initializeAuthClient = async () => {
            const client = await AuthClient.create();
            setAuthClient(client);
        };

        initializeAuthClient();
    }, []);

    const handleSuccess = async () => {
        Actor.agentOf(mencer_show_backend).replaceIdentity(authClient.getIdentity());
        if (isStudent) {

            const response = await mencer_show_backend.loginAsStudent();
            if (response.ok) {
                console.log('the user is a student and therefore he should be redirected to the student dashboard here')
                // direct user to  the dashboard 
            } else {
                console.log('the user is not a student before so he should be prompted to student registration page')
                // redirect user to the sign up page back
            }
        } else {
            const response = await mencer_show_backend.loginAsInstructor();
            if (response.ok) {
                console.log('This user is a registered instructor and therefore he should be redirected to the instructor dashboard')
                // direct user to  the dashboard 
            } else {
                console.log('the user is not an instructor before so he should be prompted to instructor registration page')
                // redirect user to the sign up page back
            }
        }
    };

    const handleLogin = async () => {
        if (!authClient) throw new Error("AuthClient not initialized");

        const loginConfig = isNFID
            ? {
                identityProvider: `https://nfid.one/authenticate?applicationName=Litzi's Motoko Bootcamp&applicationLogo=https://nfid.one/icons/favicon-96x96.png`,
            }
            : {};

        authClient.login({
            ...loginConfig,
            onSuccess: handleSuccess,
            windowOpenerFeatures,
        });
    };

    return (
        <button onClick={handleLogin}>
            {label}
        </button>
    );
};

AuthButton.propTypes = {
    label: PropTypes.string.isRequired,
    onSuccess: PropTypes.func,
    isNFID: PropTypes.bool,
};

AuthButton.defaultProps = {
    onSuccess: null,
    isNFID: false,
};

export default AuthButton;
