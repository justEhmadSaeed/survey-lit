import { object, string } from 'yup';

export const renameValidationSchema = object().shape({
	name: string()
		.min(3, 'Ack! Please type a name with 3 characters or more')
		.required('Ack! Please type a name with 3 characters or more')
});
