import { useFormContext } from 'react-hook-form';

const UsernameStep: React.FC = () => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <div className='mb-4'>
      <label
        htmlFor='username'
        className='block text-sm font-medium text-gray-700'
      >
        Username
      </label>
      <input
        id='username'
        type='text'
        {...register('username')}
        className='mt-1 p-2 border border-gray-300 rounded'
        required={true}
        autoFocus={true}
      />
      {errors.username && (
        <p className='text-red-500 text-xs'>
          {(touchedFields.username && (errors.username as any))?.message}
        </p>
      )}
    </div>
  );
};

export default UsernameStep;
