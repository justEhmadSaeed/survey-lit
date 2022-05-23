// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
	EmailAuthProvider,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// export auth object
export const authObj = getAuth();

// export Auth Change Function
export const authChange = async (callBack) =>
	onAuthStateChanged(authObj, callBack);

// export signout with Google Function
export const signoutWithGoogle = () =>
	signOut(authObj).catch((error) => console.log(error));

export const db = getFirestore();

export const signupConfigUI = {
	signInflow: 'popup',
	signInOptions: [
		{
			provider: EmailAuthProvider.PROVIDER_ID,
			fullLabel: 'Sign Up with Email'
		},
		{
			provider: GoogleAuthProvider.PROVIDER_ID,
			fullLabel: 'Sign Up with Google'
		}
	]
};

export const loginConfigUI = {
	signInflow: 'popup',
	signInOptions: [
		{
			provider: EmailAuthProvider.PROVIDER_ID,
			fullLabel: 'Login with Email'
		},
		{
			provider: GoogleAuthProvider.PROVIDER_ID,
			fullLabel: 'Login with Google'
		}
	]
};
