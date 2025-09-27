/*
  This component will be used to filter the products based on category

*/


interface PillProps {
  title: string;
  isActive: boolean;
  onPillClick: () => void;
}

const Pill: React.FC<PillProps> = ({ title, isActive, onPillClick }) => {
  return (
    <button
      className={`px-2 py-2 rounded-full border text-sm font-medium mr-2 mb-2 transition ${
        isActive
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
      } `}
      onClick={onPillClick}
    >
      {title}
    </button>
  );
};

export default Pill;
