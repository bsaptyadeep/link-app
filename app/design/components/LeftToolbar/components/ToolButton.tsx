import React from 'react';

interface IProps {
  label: string,
  icon?: React.ReactNode,
  isActive: boolean,
  handleClick: () => void
}

const ToolButton = ({ label, icon, isActive, handleClick }: IProps) => {
  return (
    <button
      onClick={handleClick}
      className={`
            p-2 rounded-lg transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-1 w-full
            ${isActive
          ? 'bg-blue-500 text-white shadow-md'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
        }
          `}
      title={label}
    >
      {icon}
      <span className={`text-xs text-center leading-tight ${isActive ? 'text-white' : 'text-gray-600'}`}>
        {label}
      </span>
    </button>
  )
}

export default ToolButton
