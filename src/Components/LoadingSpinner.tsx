import { ImSpinner } from "react-icons/im";

const LoadingSpinner = ({ className }: { className?: string }) => {
  return <ImSpinner className={`animate-spin ${className}`} />;
};

export default LoadingSpinner;
