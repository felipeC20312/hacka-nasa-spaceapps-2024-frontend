import CustomButton from '@/components/CustomButton';
import CustomCard from '@/components/CustomCard';
import CustomSlider from '@/components/CustomSlider/CustomSlider';

const HomePage = () => {
  return (
    <div className='flex flex-col h-fit box-border p-3 items-center bg-[#1F1F1F]'>
      <div className='flex w-full box-border gap-3 mt-[85px]'>
        <img src='../../src/assets/Group.svg' alt='' />
        <div className='flex w-full h-fit pl-[40px] py-[10px] bg-[#00000020] border-2 border-[#282828] rounded-full'>
          <div>
            <p className='text-[20px] text-[#A5A5A5]'>Goiás</p>
            <p className='text-[24px] text-white'>Plantando Soja</p>
          </div>
          <CustomButton label='' width='[62px]' bgColor='#282828' />
        </div>
      </div>
      <div className='flex w-full h-fit mt-[120px] text-white'>
        <CustomSlider />
      </div>
      <div>
        <p className='font-semibold mt-[24px] text-[#A5A5A5] text-[24px]'>
          Chuvas extremas
        </p>
      </div>
      <p className='text-white text-[36px] font-medium'>de 13 set. a 28 out.</p>
      <div className='flex flex-col mt-[40px] gap-[16px] text-white'>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};

export default HomePage;
