interface DayTagProps {
  activeFlag: boolean;
}

// DayTag.jsx
const DayTag: React.FC<DayTagProps> = ({ activeFlag }) => {
  return (
    <div
      className={`flex flex-col flex-shrink-0 w-[90px] h-[123px] py-[12px] px-[20px] items-center justify-center ${
        activeFlag ? 'bg-[#DCF730]' : 'bg-[#282828]'
      } rounded-[50px] text-center ${
        activeFlag ? 'text-black' : 'text-white'
      }`}>
      <h2>icon</h2>
      <h3>day 00</h3>
    </div>
  );
};

export default DayTag;
