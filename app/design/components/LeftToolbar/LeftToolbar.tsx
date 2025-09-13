import { IDesignToolSection } from '@/types/Design/tools';
import { ImageIcon, LayoutPanelLeft, LifeBuoy, LinkIcon, MousePointer2, Type, UnfoldHorizontal, UnfoldVertical } from 'lucide-react';
import React from 'react';
import ToolButton from './components/ToolButton';
import ToolSection from './components/ToolSection/ToolSection';
import ToolselectionSection from './components/ToolSection/ToolselectionSection/ToolselectionSection';
import { linkButtonStyles } from '../../styles/linkButtonStyle';

const toolsSections: IDesignToolSection[] = [
  {
    id: 'select',
    label: 'Select',
    type: 'select',
    icon: <MousePointer2 />
  }, {
    id: 'layout',
    label: 'Layout',
    type: 'layout',
    icon: <LayoutPanelLeft />,
    tools: [
      {
        id: 'flex-horizontal',
        label: 'Horizontal',
        icon: <UnfoldHorizontal />
      },
      {
        id: 'flex-vertical',
        label: 'Vertical',
        icon: <UnfoldVertical />
      }
    ]
  },
  {
    id: 'link-button',
    label: 'Button',
    type: 'link-button',
    icon: <LinkIcon />,
    tools: [
      {
        id: 'primary_button',
        label: 'Primary Button',
        icon: (<button style={{...linkButtonStyles?.primary_button}}>
                Primary
              </button>)
      },
      {
        id: 'secondary_button',
        label: 'Secondary Button',
        icon: (<button style={{...linkButtonStyles?.secondary_button}}>
                Secondary
              </button>)
      },
      {
        id: 'outline_button',
        label: 'Outline Button',
        icon: (<button style={{...linkButtonStyles?.outline_button}}>
                Outline
              </button>)
      },
      {
        id: 'scale_up_button',
        label: 'Scale Up Button',
        icon: (<button style={{...linkButtonStyles?.scale_up_button}}>
                Scale Up
              </button>)
      }
    ]
  },
  {
    id: 'link-icon',
    label: 'Icon',
    type: 'link-icon',
    icon: <LifeBuoy />
  },
  {
    id: 'text',
    label: 'Text',
    type: 'text',
    icon: <Type />
  },
  {
    id: 'image',
    label: 'Image',
    type: 'image',
    icon: <ImageIcon />
  }
]

interface IProps {
  activeToolSection: IDesignToolSection | null,
  setActiveToolSection: React.Dispatch<React.SetStateAction<IDesignToolSection | null>>
}

const LeftToolbar = ({ activeToolSection, setActiveToolSection }: IProps) => {

  const handleSelectToolSection = (toolSection: IDesignToolSection) => {
    if(activeToolSection === toolSection) {
      setActiveToolSection(null);
    } else {
      setActiveToolSection(toolSection);
    }
  }

  return (
    <div className='bg-white border-r border-gray-200 shadow-sm p-2 flex flex-col items-center gap-1 fixed top-0 left-0 bottom-0 z-50'>
      {toolsSections.map(toolSection => (
          <ToolButton
          label={toolSection.label}
          icon={toolSection.icon}
          isActive={activeToolSection?.id === toolSection.id}
          handleClick={() => handleSelectToolSection(toolSection)}
          />
      ))}
      {
        (activeToolSection && activeToolSection.type !== 'select') && (
          <ToolSection
            title={activeToolSection.label}
            toolSectionContent={
              <ToolselectionSection tools={activeToolSection.tools??[]} toolType={activeToolSection.type} />
            }
          />
        )
      }
    </div>
  )
}

export default LeftToolbar;
