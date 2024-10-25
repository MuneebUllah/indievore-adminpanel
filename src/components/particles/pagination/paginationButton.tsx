import React from "react";
import { Button } from "./style";

interface PaginationButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  classes?: string;
  disabled?: boolean;
}


const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
  onClick,
  active = false,
  classes = "",
  disabled = false,
}) => {
  return (
    <Button
      className={classes}
      onClick={onClick}
      active={active}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default PaginationButton;
