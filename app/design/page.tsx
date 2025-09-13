"use client"
import React, { useEffect, useState } from 'react'
import Playground from './components/Playground/Playground';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, closestCenter, useDroppable } from '@dnd-kit/core';
import { CreativeTool, IDesignToolSection, ToolType } from '@/types/Design/tools';
import { Link, MousePointer2, Image, Type, Info, Edit } from 'lucide-react';
import { Component, useEditorStore } from '../../lib/store/useEditorStore';
import { generateComponentId } from '@/lib/idGenerator';
import LeftToolbar from './components/LeftToolbar/LeftToolbar';
import { linkButtonStyles } from './styles/linkButtonStyle';
import EditComponent from './components/EditComponent/EditComponent';

// Create component with appropriate default props based on type
const getDefaultProps = (type: string) => {
  switch (type) {
    case 'link-button':
      return { label: 'Click Me', url: 'https://example.com' };
    case 'profileImage':
      return { alt: 'Profile Image', size: 'md' };
    case 'text':
      return { text: 'Text content goes here', size: 'base', weight: 'normal' };
    case 'link':
      return { text: 'Link Text', url: 'https://example.com' };
    case 'iconLink':
      return { icon: <Info size={18} />, url: 'https://example.com' };
    default:
      return { text: `Sample ${type}` };
  }
};

const DesignPlayground = () => {
  const {
    components,
    updateLayoutComponent,
    addLayoutBox,
    selectedComponent
  } = useEditorStore();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [draggingToolType, setDraggingToolType] = useState<ToolType | null>(null);
  const [cursorElementId, setCursorElementId] = useState<string | null>(null);
  const [activeToolSection, setActiveToolSection] = React.useState<IDesignToolSection | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id as string);
    if (active.data.current?.source) {
      setDraggingToolType(active.data.current.type);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && over.id.toString().startsWith('box-placeholder') && active.data.current?.source === "layout") {
      const componentType = active.data.current.type;
      const buttonToolId = `${active.data.current.toolId}`;

      const newComponent = {
        id: generateComponentId(componentType),
        type: componentType,
        props: {},
        style: {
          flexDirection: buttonToolId === "flex-horizontal" ? "row" : "column",
          backgroundColor: "#d1d5db",
        }
      };
      addLayoutBox(newComponent, over.data.current?.boxIdAbove);
    }

    if (over && over.id.toString().startsWith('canvas-drop-zone') && active.data.current?.source === 'library') {
      const componentType = active.data.current.type;
      const variant = `${active.data.current.toolId}`;

      const newComponent = {
        id: generateComponentId(componentType),
        type: componentType,
        props: {...getDefaultProps(componentType), variant: variant},
        style: {
        }
      };

      if(componentType === "link-button") {
        const buttonToolId = `${active.data.current.toolId}`;
        newComponent.props = { ...newComponent.props, variant: buttonToolId } as any;
        if(buttonToolId && {...(linkButtonStyles as any)[buttonToolId]} ) {
          newComponent.style = { ...(linkButtonStyles as any)[buttonToolId]  };
        }
      }
      let updatedComponent = components.find(c => `canvas-drop-zone-${c.id}` === over.id);

      if (updatedComponent) {
        const updatedChildren = [
          ...(updatedComponent.children || []),
          { ...newComponent, id: String(newComponent.id) }
        ];
        const updatedComponentObj = { ...updatedComponent, children: updatedChildren };
        if (updateLayoutComponent)
          updateLayoutComponent(updatedComponentObj.id, updatedComponentObj);
      }
    }

    setActiveId(null);
    setDraggingToolType(null);
  };

  console.log("Editor components:", components);

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
    >
      <div className='flex flex-row gap-10 pt-10 px-5 justify-center'>
        <LeftToolbar
          activeToolSection={activeToolSection}
          setActiveToolSection={setActiveToolSection}
        />
        <Playground
          activeToolSection={activeToolSection}
          draggingToolType={draggingToolType}
          cursorElementId={cursorElementId}
          setCursorElementId={setCursorElementId}
        />
        {
          selectedComponent && (
          <EditComponent
          component={selectedComponent}
        />)}
      </div>
    </DndContext>
  )
}

export default DesignPlayground
