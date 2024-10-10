import { ReactElement } from 'react';

interface CustomCardProps {
  icon: ReactElement;
  title: string;
  description: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className='flex w-full min-h-[95px] p-[12px] gap-[12px] bg-[#282828] rounded-[28px] text-white'>
      <div className='flex items-center justify-center shrink-0 w-[73px] aspect-square bg-[#242424] rounded-[24px] border-2 border-[#333333]'>
        {icon}
      </div>
      <div className='flex flex-col'>
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default CustomCard;
