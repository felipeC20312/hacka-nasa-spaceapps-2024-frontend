import { images } from '@/assets/utils/getImgs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  country: string;
  state: string;
  props: string;
};

const FirstPage = () => {
  const form = useForm();
  const navigate = useNavigate();

  const navigateNextPage = () => {
    navigate('/home');
  };

  const onSubmit = (data: SubmitHandler<Inputs>) => {
    console.log(data);
  };

  return (
    <div className='flex flex-col p-3 w-dvw min-h-dvh items-center bg-[#1F1F1F]'>
      <div className='flex w-full my-[80px] gap-4 items-center justify-center text-white text-[31px]'>
        <img src={images.img_logo} alt='' />
        <p>Orus</p>
      </div>
      <div className='self-start w-1/2 text-white text-[35px] font-medium'>
        <p>Pronto para o cultivo inteligente?</p>
      </div>
      <div className='flex flex-col self-start mt-10 text-white text-[20px] text-left font-bold'>
        <p>Indique quais são os dados da sua lavoura</p>
        <form></form>
        <button onClick={() => navigateNextPage()}>Continuar</button>
      </div>
    </div>
  );
};

export default FirstPage;
