import { layoutType, ToolType } from '@/types/Design/tools';
import { useDroppable } from '@dnd-kit/core';
import React from 'react';

interface IProps {
  id?: string, // Component ID
  draggingToolType?: ToolType | null, // Currently active tool type
}

const BoxPlaceholder = ({ id, draggingToolType }: IProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: `box-placeholder-${id}`,
    data: { boxIdAbove: id }
  });

  return (
    <div
      ref={setNodeRef}
      className={`border bg-gray-300 w-full ${isOver && draggingToolType === "layout"
        ? 'border-blue-400'
        : 'border-transparent'
        }`}
    >
    </div>
  );
}

export default BoxPlaceholder;
