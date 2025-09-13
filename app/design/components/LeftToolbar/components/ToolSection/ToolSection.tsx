import React from 'react';

// Constants for dimensions and sizing
const TOOLBAR_WIDTH = 69;
const CONTAINER_WIDTH = 256;

interface IProps {
  title: string;
  toolSectionContent?: React.ReactNode;
}

const ToolSection = ({ title, toolSectionContent }: IProps) => {
  return (
    <div
      className="absolute top-0 bottom-0 bg-white border-r border-gray-200 shadow-lg p-4 h-auto animate-in slide-in-from-left-2 duration-200"
      style={{ left: TOOLBAR_WIDTH, minWidth: CONTAINER_WIDTH }}
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b border-gray-100 pb-2">
        {title}
      </h3>
      {
        toolSectionContent ? toolSectionContent : <p>No tools available</p>
      }
    </div>
  )
}

export default ToolSection
