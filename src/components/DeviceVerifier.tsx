import { useEffect, useState, ReactNode } from 'react';
import { grid } from 'ldrs';

grid.register();

interface DeviceVerifierProps {
  children: ReactNode;
}

const DeviceVerifier: React.FC<DeviceVerifierProps> = ({ children }) => {
  const [deviceType, setDeviceType] = useState<string>('');

  const checkDeviceType = () => {
    const windowSize = window.innerWidth;
    if (windowSize <= 475) {
      setDeviceType('Mobile');
    } else {
      setDeviceType('Desktop');
    }
  };

  useEffect(() => {
    checkDeviceType();

    window.addEventListener('resize', checkDeviceType);

    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  return (
    <>
      {deviceType === 'Desktop' ? (
        <div className='flex flex-col w-full h-dvh p-5 items-center justify-center gap-5 bg-[#1F1F1F]'>
          <h2 className='text-[#DCF730] font-bold'>Ops!</h2>
          <p className='text-white text-center'>
            Ops! It seems that our solution is not avaliable for larger screns
            devices like yours, please acess our solution via cellphone or whith
            a device with smaller screnn. Sorry for the inconvenience :(
          </p>
          <l-grid size='150' speed='1.5' color='#DCF730'></l-grid>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default DeviceVerifier;
