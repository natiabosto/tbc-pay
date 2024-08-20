import { useFormContext } from 'react-hook-form';

const EmailStep: React.FC = () => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <div className='mb-4'>
      <label
        htmlFor='email'
        className='block text-sm font-medium text-gray-700'
      >
        Email
      </label>
      <input
        id='email'
        type='email'
        {...register('email')}
        className='mt-1 p-2 border border-gray-300 rounded'
        required={true}
        autoFocus={true}
      />
      {touchedFields.email && errors.email && (
        <p className='text-red-500 text-xs'>{(errors.email as any)?.message}</p>
      )}
    </div>
  );
};

export default EmailStep;
