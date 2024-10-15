import { images } from '@/assets/utils/getImgs';
import CustomForm from '@/components/CustomForm';

const FirstPage = () => {
  return (
    <div className='flex flex-col p-3 w-dvw min-h-dvh items-center bg-[#1F1F1F]'>
      <div className='flex w-full my-[80px] gap-4 items-center justify-center text-white text-[31px]'>
        <img src={images.img_logo} alt='' />
        <p>Orus</p>
      </div>
      <div className='self-start w-1/2 text-white text-[35px] font-medium'>
        <p>Pronto para o cultivo inteligente?</p>
      </div>
      <div className='flex flex-col w-full self-start mt-10 gap-[16px] text-white text-[20px] text-left font-normal'>
        <p>Indique quais são os dados da sua lavoura</p>
        <CustomForm />
      </div>
    </div>
  );
};

export default FirstPage;
