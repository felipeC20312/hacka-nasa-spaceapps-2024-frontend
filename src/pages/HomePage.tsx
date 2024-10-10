import CustomButton from '@/components/CustomButton';
import CustomCard from '@/components/CustomCard';
import CustomSlider from '@/components/CustomSlider/CustomSlider';
import { useEffect, useState } from 'react';

import { images } from '@/assets/utils/getImgs';
import dataJson from '@/utils/data/gynData.json';
import { useTranslation } from 'react-i18next';
import CustomIconsLucid from '@/components/CustomIconsLucid';

interface Dica {
  titulo: string;
  icone: string;
  descricao: string;
}

interface Dia {
  icon: string;
  data: string;
  status: string;
  duracao: string;
  dicas: Dica[];
}

interface AgriculturaPrevisao {
  estado: string;
  plantacao: string;
  dias: Dia[];
}

const HomePage = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<AgriculturaPrevisao | undefined>(undefined);
  const [diaEspecifico, setDiaEspecifico] = useState<Dia | undefined>(
    undefined
  );

  const getData = () => {
    setData(dataJson);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      const dia = data.dias.find((dia) => dia.data === '09.out.');
      setDiaEspecifico(dia);
    }
  }, [data]);

  return (
    <div className='flex flex-col min-h-dvh max-h-fit box-border p-3 items-center bg-[#1F1F1F]'>
      <img
        src={images.img_event_cloudy}
        alt={t('imagesAltText.eventImg')}
        className='absolute z-[0] top-0 left-0 w-full h-auto object-cover opacity-[28%]'
      />
      <div className='absolute w-full h-[130px] top-[170px] bg-gradient-to-b from-transparent to-[#1F1F1F]'></div>
      <div className='flex w-full z-[1] box-border gap-3 mt-[30px]'>
        <img src={images.img_logo} alt={t('imagesAltText.orusLogo')} />
        <div className='flex w-full h-fit pl-[40px] py-[10px] bg-[#00000020] border-2 border-[#282828] rounded-full'>
          <div>
            <p className='text-[20px] text-[#A5A5A5]'>{data?.estado}</p>
            <p className='text-[24px] text-white'>{data?.plantacao}</p>
          </div>
          <CustomButton label='' width='[62px]' bgColor='#282828' />
        </div>
      </div>
      <div className='flex w-full h-fit mt-[170px] text-white'>
        <CustomSlider />
      </div>
      <div>
        <p className='font-semibold mt-[24px] text-[#A5A5A5] text-[24px]'>
          {t('fieldLabels.selectCountry')}
        </p>
      </div>
      <p className='text-white text-[36px] font-medium'>{t('')}</p>

      <div className='flex flex-col mt-[40px] gap-[16px] text-white'>
        {diaEspecifico ? (
          diaEspecifico.dicas.map((dica) => (
            <CustomCard
              icon={<CustomIconsLucid iconName={dica.icone} color='#DCF730' />}
              title={dica.titulo}
              description={dica.descricao}
            />
          ))
        ) : (
          <p>Nenhuma dica encontrada para o dia específico.</p>
        )}
      </div>

      <div className='flex w-full min-h-[95px] mt-[16px] p-[12px] gap-[12px] bg-[#282828] rounded-[28px] text-white'>
        <div className='flex flex-col gap-[20px]'>
          <div className='flex gap-4 w-full justify-start items-center'>
            <div className='flex justify-center items-center w-fit h-fit p-[5px] border-2 border-[#333333] rounded-full'>
              <img
                src={images.img_logo}
                alt={t('imagesAltText.orusLogo')}
                className='w-[30px] h-[30px]'
              />
            </div>
            <div>
              <p className='text-[14px] font-light text-lime-300'>Sugestão</p>
              <p className='text-[18px]'>Orus IA</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 text-[#A5A5A5]'>
            <p>
              Com as mudanças climáticas atuais, o cultivo de soja enfrenta
              novos desafios que exigem cuidados especiais para garantir
              produtividade e sustentabilidade. A soja, uma das culturas mais
              importantes do mundo, é particularmente sensível a variações
              climáticas, como mudanças nos padrões de chuva, temperaturas
              extremas e aumento da incidência de pragas.
            </p>
            <p>
              1. Monitoramento climático contínuo: É essencial que os
              agricultores estejam atentos às previsões meteorológicas e
              utilizem tecnologias de monitoramento climático para ajustar as
              práticas agrícolas em tempo real. Sistemas de irrigação eficientes
              podem ajudar a compensar a irregularidade das chuvas, enquanto o
              uso de sensores de umidade do solo pode evitar tanto o estresse
              hídrico quanto o excesso de água.
            </p>
            <p>
              2. Escolha de variedades resistentes: Uma das principais
              estratégias para mitigar os impactos climáticos é selecionar
              variedades de soja que sejam mais resistentes ao calor, à seca e
              às doenças associadas ao clima. Pesquisadores e empresas de
              biotecnologia têm desenvolvido sementes mais adaptadas a essas
              condições extremas, garantindo maior resiliência da produção.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
