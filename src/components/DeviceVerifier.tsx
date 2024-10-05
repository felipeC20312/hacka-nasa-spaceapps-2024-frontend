import { useEffect, useState, ReactNode } from 'react';

interface DeviceVerifierProps {
  children: ReactNode;
}

const DeviceVerifier: React.FC<DeviceVerifierProps> = ({ children }) => {
  const [deviceType, setDeviceType] = useState<string>('');

  const checkDeviceType = () => {
    const windowSize = window.innerWidth;
    if (windowSize <= 425) {
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
    <>{deviceType === 'Desktop' ? <>Ainda em construção</> : <>{children}</>}</>
  );
};

export default DeviceVerifier;
