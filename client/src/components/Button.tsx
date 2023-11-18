// Button.tsx

import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={`px-5 py-3 ${ rest.disabled ? 'text-gray-400 bg-gray-800' : 'text-white bg-black'} rounded-lg`}>
      {children}
    </button>
  );
};

export default Button;
