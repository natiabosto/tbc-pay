import { useFormContext } from 'react-hook-form';

interface InputProps {
  id: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ id, label }) => {
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();

  return (
    <div className='mb-4'>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        id={id}
        type={id === 'password' ? 'password' : 'text'}
        {...register(id)}
        className='mt-1 p-2 border border-gray-300 rounded'
        required={true}
        autoFocus={true}
      />
      {errors[id] && (
        <p className='text-red-500 text-xs'>
          {(touchedFields[id] && (errors[id] as any))?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
