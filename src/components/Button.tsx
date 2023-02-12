type ButtonProps = {
  type?: 'default' | 'primary' | 'success' | 'danger';
  children: React.ReactNode;
};

function Button({ type = 'default', children }: ButtonProps) {
  const buttonType =
    type === 'default'
      ? 'bg-gray-200 hover:bg-gray-300'
      : type === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600'
      : type === 'success'
      ? 'bg-green-500 hover:bg-green-600'
      : type === 'danger'
      ? 'bg-red-500 hover:bg-red-600'
      : 'bg-gray-200';

  return (
    <button
      className={`${buttonType} text-white font-medium px-4 py-2 rounded-md`}
    >
      {children}
    </button>
  );
}

export default Button;
