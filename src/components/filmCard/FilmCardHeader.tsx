import React from "react";

type FilmCardHeaderProps = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

export const FilmCardHeader = ({ children }: FilmCardHeaderProps) => {
  return (
    <div className="mb-1">
      <h2 className="text-lg font-bold">{children}</h2>
    </div>
  );
};
