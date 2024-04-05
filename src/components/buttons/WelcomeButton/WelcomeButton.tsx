import React from "react";
import style from "./style.module.css";

interface WelcomeButtonProps {
  child: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const WelcomButton: React.FC<WelcomeButtonProps> = ({ child,className, onClick }) => {
  return (
    <div className={`${style.container} ${className}`} >
      <div className={style.center}>
        <button className={style.btn} onClick={onClick}>
          <span>{child}</span>
        </button>
      </div>
    </div>
  );
};

export default WelcomButton;
