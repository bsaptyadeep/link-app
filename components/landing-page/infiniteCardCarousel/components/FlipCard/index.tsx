import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import style from './styles.module.css';

interface IProps {
    front: JSX.Element;
    back: JSX.Element;
    width: number
}

const FlipCard = (props: IProps) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    // const handleFlip = () => {
    //     if(!isAnimating) {
    //         setIsFlipped(prevState => !prevState)
    //         setIsAnimating(true);
    //     }
    // }

    return (
        <div className='flex items-center justify-center cursor-pointer'>
            <motion.div className={`${style.flipCard} h-[400px] rounded-md p-4`}
            style={{ width: `${props.width}px`}}
            // onMouseEnter={() => {
            //     handleFlip();
            // }}
            // onMouseLeave={() => {
            //     handleFlip();
            // }}
            >
                <motion.div
                    className={`${style.flipCardInner} w-full h-full`}
                    initial={false}
                    animate={{ rotateY: isFlipped? 180:360}}
                    transition={{ duration: 0.01, animationDirection: "normal" }}
                    onAnimationComplete={() => {
                        setIsAnimating(false);
                    }}
                >
                    {props.front}
                    {props.back}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default FlipCard
