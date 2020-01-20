// @flow

// import axios from 'axios';

// import { store } from '../store';

// import { API_URL } from 'constants/index';

// import { setUser } from 'actions';

// import { notify } from 'helpers/notify';

export const AuthToken: {
    set: (token) => void,
    get: () => ?string,
    delete: () => void,
} = {
    set(token): void {
        console.log('Auth  1')
        const d = new Date();
        d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));
        document.cookie = `auth_token=${token}; expires=${d.toUTCString()}`;
    },
    get(): ?string {
        console.log('Auth 2')
        const name = 'auth_token=';
        const decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        
        return null;
    },
    delete(): void {
        console.log('Auth 3')
        document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    },
};

const handleUnauthorized = (): void => {
    // localStorage.removeItem('accessToken');
    AuthToken.delete();
};

// function handleRequestErrors(
//     error: ErrorResponse,
//     showErrorToasts: boolean,
//     onError?: (error: ErrorResponse | Error) => Promise<*>,
// ): void {
//     if (!error.response) {
//         if (navigator.onLine) {
//             handleUnauthorized();
//         }

//         onError && onError(error);

//         return;
//     }

//     const errorData = error.response.data.errors;

//     if (!errorData) {
//         return;
//     }

//     // Show toasts
//     if (showErrorToasts) {
//         // const notifyProps = {
//         //     type: 'error',
//         //     title: '',
//         //     icon: 'error',
//         // };

//         if (typeof errorData === 'string') {
//             // notify({
//             //     ...notifyProps,
//             //     message: errorData,
//             // });
//         } else {
//             Object.keys(errorData).forEach(section => {
//                 if (typeof errorData[section] === 'string') {
//                     // notify({
//                     //     ...notifyProps,
//                     //     message: errorData[section],
//                     // });
//                 } else {
//                     errorData[section].forEach(error => {
//                         // notify({
//                         //     ...notifyProps,
//                         //     message: error,
//                         // });
//                     });
//                 }
//             });
//         }
//     }

//     onError && onError(errorData);
// }

// export function makeCall({
//     url,
//     data,
//     isPrivate = false,
//     onSuccess,
//     onError,
//     showErrorToasts = true,
// }: {
//     url: string,
//     data?: {},
//     isPrivate?: boolean,
//     onSuccess: (payload: {}) => Promise<*>,
//     onError?: (error: ErrorResponse | Error) => Promise<*>,
//     showErrorToasts?: boolean,
// }): Promise<*> {
//     const requestObj = axios.create({
//         baseURL: API_URL,
//     });

//     if (isPrivate) {
//         const authToken = AuthToken.get();

//         if (authToken) {
//             requestObj.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
//         }
//     }

//     return new Promise((resolve, reject) => {
//         requestObj
//             .post(url, data)
//             .then((result: SuccessResponse) => {
//                 const payload = result.data.success || result.data;
//                 onSuccess && onSuccess(payload);

//                 resolve(payload);
//             })
//             .catch((error: ErrorResponse) => {
//                 handleRequestErrors(error, showErrorToasts, onError);

//                 reject(error);
//             });
//     });
// }

// export function uploadFile({
//     url,
//     file,
//     onSuccess,
//     onError,
//     showErrorToasts = true,
// }: {
//     url: string,
//     file: {},
//     onSuccess: (payload: {}) => Promise<*>,
//     onError?: (error: {}) => Promise<*>,
//     showErrorToasts: boolean,
// }): Promise<*> {
//     const requestObj = axios.create({
//         baseURL: API_URL,
//     });

//     const authToken = AuthToken.get();

//     if (authToken) {
//         requestObj.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
//     }

//     const data = new FormData();
//     data.append('file', file);

//     return requestObj
//         .post(url, data)
//         .then((result: SuccessResponse) => {
//             const payload = result.data.success;
//             onSuccess && onSuccess(payload);

//             return payload;
//         })
//         .catch((error: ErrorResponse) => {
//             handleRequestErrors(error, showErrorToasts, onError);
//         });
// }
