import { Component, useEditorStore } from '@/lib/store/useEditorStore';
import React from 'react';
import BoxContainer from '../Containers/BoxContainer';
import { IDesignToolSection, layoutType, ToolType } from '@/types/Design/tools';
import BoxPlaceholder from '../Containers/BoxPlaceHolder';
import LinkButton from '../LinkButton/LinkButton';

interface IProps {
  draggingToolType: ToolType | null;
  cursorElementId: string | null;
  setCursorElementId: React.Dispatch<React.SetStateAction<string | null>>;
  activeToolSection: IDesignToolSection | null,
}

const Playground = ({
  draggingToolType,
  cursorElementId,
  setCursorElementId,
  activeToolSection }: IProps) => {
  const {
    components
  } = useEditorStore();

  const getComponentChildren = (component: Component) => {
    if (component.type === "link-button") {
      return (
        <LinkButton key={component.id}
          id={component.id}
          dataProps={{ label: component.props.label, url: component.props.url }}
          styles={component.style}
         />
      );
    }

    // if (component.type === 'iconLink') {
    //   return [
    //     <Link key={component.id} href={component.props.url}>
    //       {component.props.icon}
    //     </Link>
    //   ];
    // }

    // if (component.type === 'text') {
    //   return [
    //     <TextComponent key={component.id} variant="glow" size="lg" text={component.props.text} />
    //   ];
    // }

    // if (component.type === 'profileImage') {
    //   return [
    //     <img key={component.id} src={component.props.src} alt={component.props.alt} style={component.style} />
    //   ];
    // }

    return null;
  };

  return (
    <div
      className={`min-h-[500px] w-1/2 bg-gray-300`}
      onPointerDown={(e) => {
        e.stopPropagation();
        console.log('Playground clicked');
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
        console.log('Playground touched');
      }}
    >
      {components.length === 0 ? (
        <div className="text-center text-gray-500 py-20">
          <p className="text-lg">No components yet</p>
          <p className="text-sm">Drag components from the left sidebar to get started</p>
          <BoxPlaceholder
              draggingToolType={draggingToolType} />
        </div>
      ) : (
        components.map((component) => (
          <React.Fragment key={component.id}>
            <BoxContainer
              component={component}
              activeToolSection={activeToolSection}
              styles={component.style}
              draggingToolType={draggingToolType}
              components={component.children || []}
              key={component.id}
              type={component.type as layoutType}
              id={component.id}
              cursorElementId={cursorElementId}
              setCursorElementId={setCursorElementId}
            >
              {component.children && component.children.length > 0 ? (
                component.children.map((childComponent) => (
                  <React.Fragment key={childComponent.id}>
                    {getComponentChildren(childComponent)}
                  </React.Fragment>
                ))
              ) : (
                <div className="w-full h-full flex items-center justify-center border border-gray-400 border-dashed p-10">
                  <p className="text-gray-400 text-center w-full">
                    Drop components here
                  </p>
                </div>
              )}
            </BoxContainer>
            <BoxPlaceholder
              id={component.id}
              draggingToolType={draggingToolType} />
          </React.Fragment>
        ))
      )}
    </div>
  )
}

export default Playground;
