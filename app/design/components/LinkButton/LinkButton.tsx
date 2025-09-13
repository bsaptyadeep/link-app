import { IDesignToolSection } from '@/types/Design/tools';
import React from 'react';

interface LinkButtonProps {
  id: string;
  dataProps: {
    label: string;
    url: string;
  },
  styles: any,
}

const LinkButton: React.FC<LinkButtonProps> = ({
  id,
  dataProps,
  styles,
}) => {
  console.log("LinkButton styles:", styles);
  return (
    <button
      onClick={() => {
        console.log(`Navigating to ${dataProps.url}`);
      }}
      style={{ ...styles }}
      >
      {dataProps.label}
    </button>
  );
};

export default LinkButton;