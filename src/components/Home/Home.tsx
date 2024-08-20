interface HomeProps {
  onWizardClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Home: React.FC<HomeProps> = ({ onWizardClick }) => {
  return (
    <div className='max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden mt-5'>
      <div className='p-6'>
        <h2 className='text-xl font-semibold mb-2'>რეგისტრაცია</h2>
        <p className='text-gray-700 mb-4'>რეგისტრაციისთვის დააკლიკეთ ქვემოთ</p>
        <button onClick={onWizardClick} className='btn'>
          რეგისტრაცია
        </button>
      </div>
    </div>
  );
};

export default Home;
