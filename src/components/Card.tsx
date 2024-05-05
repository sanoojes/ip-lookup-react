import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="flex flex-col bg-neutral-900 border-2 border-neutral-800 px-4 py-2 rounded-lg h-full w-full">
      {children}
    </div>
  );
};

export default Card;
