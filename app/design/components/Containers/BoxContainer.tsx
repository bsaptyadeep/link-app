import { Component, useEditorStore } from '@/lib/store/useEditorStore';
import { IDesignToolSection, layoutType, ToolType } from '@/types/Design/tools';
import { useDroppable } from '@dnd-kit/core';
import React from 'react';

interface IProps {
  component: Component;
  children?: React.ReactNode;
  type: layoutType, // Type of the container, can be a layout type or a placeholder
  id: string, // Component ID
  draggingToolType?: ToolType | null, // Currently active tool type
  components: Component[] // Child components within the container
  styles?: React.CSSProperties // Additional styles for the container
  cursorElementId: string | null,
  setCursorElementId: React.Dispatch<React.SetStateAction<string | null>>;
  activeToolSection: IDesignToolSection | null
}



const BoxContainer = ({ component, id, draggingToolType, children, styles, cursorElementId, setCursorElementId, activeToolSection }: IProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: `canvas-drop-zone-${id}`,
  });
  const {
    selectedComponent,
    setSelectedComponent
  } = useEditorStore();

  const handleSelectComponent = (e: React.MouseEvent) => {
    if(activeToolSection?.type === "select") {
      setSelectedComponent(component);
      return;
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={{
        ...styles, minHeight: '100px',
      }}
      className={`w-full flex items-center justify-center max-h-fit gap-3 ${
        (isOver && draggingToolType !== "layout")
        ? 'border border-blue-400':
        (cursorElementId === id && activeToolSection?.type === "select")?
        'border-4 border-orange-600':
        'border border-transparent'
        }`}
      onClick={handleSelectComponent}
      onMouseEnter={() => setCursorElementId(id)}
      onMouseLeave={() => setCursorElementId(null)}
    >
      {children}
    </div>
  );
}

export default BoxContainer
