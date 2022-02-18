import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	Timestamp,
	updateDoc,
	where
} from 'firebase/firestore';
import { db } from 'services/firebase/firebase';
import FIRESTORE_CONSTS from 'utils/constants/firestore.constant';
import PATH from 'utils/constants/routing-paths.constant';

export const createNewForm = async (userId, navigate) => {
	try {
		const docRef = await addDoc(
			collection(db, FIRESTORE_CONSTS.FORMS),
			{
				name: 'My Typeform',
				userId
			}
		);
		navigate(`${PATH.FORM_POPUP}/${docRef.id}`);
	} catch (e) {
		console.error('Error creating form: ', e);
	}
};

export const renameForm = async (formId, name) => {
	try {
		await updateDoc(doc(db, FIRESTORE_CONSTS.FORMS, formId), {
			name
		});
	} catch (e) {
		console.error('Error renaming form: ', e);
	}
};

export const getFormData = async (formId) => {
	try {
		const docSnap = await getDoc(
			doc(db, FIRESTORE_CONSTS.FORMS, formId)
		);
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
		const formData = await getDocs(
			query(
				collection(db, FIRESTORE_CONSTS.FORMS),
				where(FIRESTORE_CONSTS.USER_ID, '==', userId)
			)
		);
		const formArray = [];
		formData.forEach((doc) => {
			formArray.push({
				name: doc.data().name,
				id: doc.id,
				responses: []
			});
		});
		const responseData = await getDocs(
			query(
				collection(db, FIRESTORE_CONSTS.RESPONSES),
				where(
					FIRESTORE_CONSTS.FORM_ID,
					'in',
					formArray.map((form) => form.id)
				)
			)
		);
		responseData.forEach((doc) => {
			let formIndex = formArray.findIndex(
				(form) => form.id === doc.data().formId
			);
			if (formIndex !== -1) {
				formArray[formIndex].responses.push(doc.data());
				formArray[formIndex].responses.at(-1).createdAt = doc
					.data()
					.createdAt.toDate()
					.toString();
			}
		});

		return formArray;
	} catch (e) {
		console.error('Error fetching all forms: ', e);
		return { error: 'Error fetching all forms: ', e };
	}
};

export const storeIntoFirestore = async (formId, questions) => {
	try {
		await updateDoc(doc(db, FIRESTORE_CONSTS.FORMS, formId), {
			questions
		});
		return { success: true };
	} catch (e) {
		console.error('Error storing form data: ', e);
		return { error: 'Error storing form data: ', e };
	}
};

export const storeFormResponse = async (
	formId,
	userId,
	responseData
) => {
	try {
		await addDoc(collection(db, FIRESTORE_CONSTS.RESPONSES), {
			formId,
			userId,
			responseData,
			createdAt: Timestamp.now()
		});
		return { success: true };
	} catch (e) {
		console.error('Error storing form response: ', e);
		return { error: 'Error storing form response: ', e };
	}
};
