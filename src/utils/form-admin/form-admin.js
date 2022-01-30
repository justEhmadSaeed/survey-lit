import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from 'services/firebase/firebase';
import { PATH_CREATE_FORM_ADMIN } from 'utils/constants/routing-paths.constant';

export const createNewForm = async (userId, navigate) => {
	try {
		const docRef = await addDoc(
			collection(db, 'users', userId, 'forms'),
			{
				name: 'My Typeform'
			}
		);
		// console.log('done', docRef.id);
		navigate(`${PATH_CREATE_FORM_ADMIN}/${docRef.id}`);
	} catch (e) {
		console.error('Error creating form: ', e);
	}
};

export const renameForm = async (userId, formId, name) => {
	try {
		await setDoc(doc(db, 'users', userId, 'forms', formId), {
			name
		});
	} catch (e) {
		console.error('Error renaming form: ', e);
	}
};
