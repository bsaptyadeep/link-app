import React from 'react';
import {
  useDraggable
} from '@dnd-kit/core';
import { DesignTool, ToolType } from '@/types/Design/tools';

const DraggableTool = ({  tool, type, children }: { tool: DesignTool, type: ToolType; children: React.ReactNode }) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: `library-${tool.id}`,
        data: { type, source: type === "layout" ? "layout" : 'library', toolId: tool.id }
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            className={`cursor-grab active:cursor-grabbing ${isDragging ? 'opacity-50' : ''
                }`}
        >
            {children}
        </div>
    );
}

export default DraggableTool
