interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({ children, onClick, className = "", type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}
