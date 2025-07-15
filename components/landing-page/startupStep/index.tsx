import { StaticImageData } from 'next/image';
import React, { ReactElement } from 'react';

interface IProps {
  stepCount: number,
  title: string,
  descriptions: string,
  bottomImage?: StaticImageData,
  backgroundColor: string,
  textColor: string,
  rightImage?: StaticImageData
  bottomComponent?: ReactElement
}

const StartStep = (props: IProps) => {
  return (
    <div className='rounded-3xl flex sm:flex-col lg:flex-row w-full p-10 items-center justify-center' style={{ background: props.backgroundColor }}>
      <div className='flex flex-col gap-4'>
        <div className='rounded-full bg-white px-3 py-1 font-semibold max-w-fit'>
          Step {props.stepCount}
        </div>
        <h1 className='text-[30px] font-bold' style={{ color: props.textColor }}>
          {props.title}
        </h1>
        <p style={{ color: props.textColor }}>
          {
            props.descriptions
          }
        </p>
        {
          props.bottomImage &&
          <img src={props.bottomImage.src} alt="bottom marketing asset" loading='lazy' />
        }
        {
          props.bottomComponent ?? null
        }
      </div> 
      <div>
      {
        props.rightImage && 
        <img src={props.rightImage.src} alt="right marketing asset" loading='lazy' />
      }
      </div>
    </div>
  )
}

export default StartStep
