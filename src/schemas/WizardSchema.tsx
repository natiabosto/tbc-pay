import * as yup from 'yup';

export const WizardSchema = yup.object().shape({
  username: yup
    .string()
    .required('მომხმარებლის სახელის შეყვანა სავალდებულოა!')
    .min(3, 'სახელი უნდა შეიცავდეს სულ მცირე 3 სიმბოლოს!'),
  password: yup
    .string()
    .required('პაროლის შეყვანა სავალდებულოა!')
    .min(6, 'პაროლი უნდა შეიცავდეს სულ მცირე 6 სიმბოლოს!'),
  email: yup
    .string()
    .required('ელფოსტის შეყვანა სავალდებულოა!')
    .email('ელ ფოსტა არავალიდურია!'),
});
