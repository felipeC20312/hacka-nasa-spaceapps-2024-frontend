interface DayTagProps {
  activeFlag: boolean;
  icon: string;
  day: string;
}

// DayTag.jsx
const DayTag: React.FC<DayTagProps> = ({ activeFlag, icon, day }) => {
  return (
    <div
      className={`flex flex-col flex-shrink-0 w-[90px] h-[123px] py-[12px] px-[20px] items-center justify-center ${
        activeFlag ? 'bg-[#DCF730]' : 'bg-[#282828]'
      } rounded-[50px] text-center ${
        activeFlag ? 'text-black' : 'text-white'
      }`}>
      <h2>{icon}</h2>
      <h3>{day}</h3>
    </div>
  );
};

export default DayTag;
