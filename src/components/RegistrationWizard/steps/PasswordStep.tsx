import { useFormContext } from 'react-hook-form';

const PasswordStep: React.FC = () => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <div className='mb-4'>
      <label
        htmlFor='password'
        className='block text-sm font-medium text-gray-700'
      >
        Password
      </label>
      <input
        id='password'
        type='password'
        {...register('password')}
        className='mt-1 p-2 border border-gray-300 rounded'
        required={true}
        autoFocus={true}
      />
      {errors.password && (
        <p className='text-red-500 text-xs'>
          {(touchedFields.password && (errors.password as any))?.message}
        </p>
      )}
    </div>
  );
};

export default PasswordStep;
