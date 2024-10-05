import CustomButton from '@/components/CustomButton';

const HomePage = () => {
  return (
    <div className='flex flex-col w-full h-screen p-3 items-center bg-[#1F1F1F]'>
      <div className='flex w-full gap-3'>
        <CustomButton
          label=''
          width='[72px]'
          bgColor='#00000020'
          border='border-2'
        />
        <div className='flex w-full pl-[40px] pt-[10px] bg-[#00000020] border-2 border-[#282828] rounded-full'>
          <div>
            <p>Test</p>
            <p>Goianinha</p>
          </div>
          <CustomButton label='' width='[62px]' bgColor='#282828' />
        </div>
      </div>
      <div className='mt-4 text-white'>Calendário</div>
      <div className='mt-2 text-white'>Lista de eventos</div>
    </div>
  );
};

export default HomePage;
