// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signInWithRedirect,
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
export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

// export signInWith Google Function
export const signInWithGoogle = () =>
	signInWithPopup(auth, googleProvider).catch((error) =>
		console.log(error)
	);

// export Auth Change Function
export const authChange = async (callBack) =>
	onAuthStateChanged(auth, callBack);

// export signout with Google Function
export const signoutWithGoogle = () =>
	signOut(auth).catch((error) => console.log(error));
