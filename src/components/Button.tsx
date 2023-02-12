type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button className='bg-blue-500 text-white font-medium hover:bg-blue-600 px-4 py-2 rounded-md'>
      {children}
    </button>
  );
}

export default Button;
