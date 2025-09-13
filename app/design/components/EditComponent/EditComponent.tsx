import { Component, useEditorStore } from '@/lib/store/useEditorStore';
import React from 'react';
import { ColorResult, SketchPicker } from 'react-color';

interface IProps {
    component: Component
}

const EditComponent = ({ component }: IProps) => {
    const {
        updateLayoutComponent
    } = useEditorStore();
    const [changingBackgroundColor, setChangingBackgroundColor] = React.useState(false);

    const handleBackgroundColorChange = (color: ColorResult) => {
        const updatedComponent = component;
        updatedComponent.style.backgroundColor = color.hex;

        if(updatedComponent) {
            updateLayoutComponent(
                component.id,
                updatedComponent
            )
        }
    }

    return (
        <div className='border border-gray-300'>
            <div className='grid grid-cols-2 gap-2'>
                <div className='text-gray-600'>
                    Background Color
                </div>
                <div className='p-[5px] max-w-fit bg-white rounded-[1px]
                shadow-[0_0_0_1px_rgba(0,0,0,0.1)] inline-block cursor-pointer'>
                    <div
                        style={{ backgroundColor: component.style.backgroundColor }}
                        className='w-[36px] h-[14px] rounded-[2px]'
                        onClick={() => setChangingBackgroundColor(!changingBackgroundColor)}
                    >
                    </div>
                </div>
            </div>
            {changingBackgroundColor && (
                <SketchPicker
                color={component.style.backgroundColor}
                onChange={handleBackgroundColorChange}
                />
            )}
        </div>
    )
}

export default EditComponent
