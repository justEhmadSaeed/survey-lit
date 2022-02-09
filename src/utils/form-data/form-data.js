import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	updateDoc,
	where
} from 'firebase/firestore';
import { db } from 'services/firebase/firebase';
import { PATH_FORM_POPUP } from 'utils/constants/routing-paths.constant';

export const createNewForm = async (userId, navigate) => {
	try {
		const docRef = await addDoc(collection(db, 'forms'), {
			name: 'My Typeform',
			userId
		});
		navigate(`${PATH_FORM_POPUP}/${docRef.id}`);
	} catch (e) {
		console.error('Error creating form: ', e);
	}
};

export const renameForm = async (userId, formId, name) => {
	try {
		await updateDoc(doc(db, 'forms', formId), {
			name
		});
	} catch (e) {
		console.error('Error renaming form: ', e);
	}
};

export const getFormData = async (formId) => {
	try {
		const docSnap = await getDoc(doc(db, 'forms', formId));
		if (docSnap.exists()) {
			return docSnap.data();
		} else return { error: 'Form data not found.' };
	} catch (e) {
		console.error('Error getting form data: ', e);
		return { error: 'Error getting form data: ', e };
	}
};

export const getAllForms = async (userId) => {
	try {
		const docSnap = await getDocs(
			query(
				collection(db, 'forms'),
				where('userId', '==', userId)
			)
		);
		const formArray = [];
		docSnap.forEach((doc) => {
			formArray.push({
				name: doc.data().name,
				id: doc.id
			});
		});
		return formArray;
	} catch (e) {
		console.error('Error fetching all forms: ', e);
		return { error: 'Error fetching all forms: ', e };
	}
};

export const storeIntoFirestore = async (formId, questions) => {
	try {
		await updateDoc(doc(db, 'forms', formId), {
			questions
		});
		return { success: true };
	} catch (e) {
		console.error('Error storing form data: ', e);
		return { error: 'Error storing form data: ', e };
	}
};
