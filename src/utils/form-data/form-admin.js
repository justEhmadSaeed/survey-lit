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

export const getFormName = async (userId, formId) => {
	try {
		const docSnap = await getDoc(
			query(
				doc(db, 'forms', formId),
				where('userId', '==', userId)
			)
		);
		if (docSnap.exists()) {
			return docSnap.data().name;
		}
	} catch (e) {
		console.error('Error get form name: ', e);
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
		console.log(formArray);
		return formArray;
	} catch (e) {
		console.error('Error fetching all forms: ', e);
	}
};
