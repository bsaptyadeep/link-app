import DraggableTool from '@/app/design/components/CreativeTools/DraggableTool/DraggableTool';
import { DesignTool, ToolType } from '@/types/Design/tools';
import React from 'react';

interface IProps {
  tools: DesignTool[],
  toolType: ToolType
}

const ToolselectionSection = ({ tools, toolType }: IProps) => {

  return (
    <div className={`grid ${toolType === "layout" ? "grid-cols-2" : ""} gap-2`}>
      {
        tools.map(tool => (
          <DraggableTool key={tool.id} tool={tool} type={toolType}>
            <div
              className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer flex flex-col items-center gap-2 hover:border-blue-300 hover:shadow-sm"
            >
              {tool.icon}
              <span className="text-sm text-gray-700 text-center">
                {tool.label}
              </span>
            </div>
          </DraggableTool>
        ))

      }
    </div>
  )
}

export default ToolselectionSection

