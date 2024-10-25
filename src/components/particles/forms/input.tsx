import { FC, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import password from 'assets/images/lock.svg'
interface IconInputProps {
  placeholder: string;
  onchange: (value: string) => void;
  value: string;
}

export const IconInput: FC<IconInputProps> = ({ placeholder, onchange, value }) => {
  const [inputType, setInputType] = useState<'text' | 'password'>('password');

  const handleInputTypeChange = () => {
    setInputType(prevType => (prevType === 'text' ? 'password' : 'text'));
  };

  return (
    <div className="input-wrap">
      <img src={password} alt="img" width={25} height={25} />
      <input
        type={inputType}
        placeholder={placeholder}
        onChange={(e) => { onchange(e.target.value) }}
        value={value}
        className="auth-input"
      />
      <div onClick={handleInputTypeChange}>
        {inputType === 'password' ? (
          <FaRegEyeSlash size={18} color='#808D9E' />
        ) : (
          <FaRegEye size={18} color='#808D9E' />
        )}
      </div>
    </div>
  );
}