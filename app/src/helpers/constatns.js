let ROOT_URL = 'http://sb.mode';

if (process.env.REACT_APP_BUILD === 'prod') {
    ROOT_URL = 'https://socialbet.io';
} else if (process.env.REACT_APP_BUILD === 'dev') {
    ROOT_URL = 'https://socialbet.win';
}

export { ROOT_URL };

export const API_URL: = `${ROOT_URL}/api`;
