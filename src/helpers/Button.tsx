import React from 'react'

interface ButtonProps{
    title: string;
    className: string;
    OnClick: any | null;
}


export const Button:React.FC<ButtonProps> = ({title, className, OnClick}) => {
  return (
    <button className={className} onClick={OnClick}>
        {title}
    </button>
  )
}
