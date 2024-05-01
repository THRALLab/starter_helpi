import React, { useState, useRef, useEffect } from 'react';
import { Button, Overlay, Tooltip } from 'react-bootstrap';
import './SubmitButton.css';

const SubmitButton = ({ isFinished, page, setPage }: { isFinished: boolean; page: string; setPage: (newPage: string) => void; }) => {
    const [showPopup, setShowPopup] = useState(false);
    const target = useRef(null);

    const hideTooltip = () => {
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    }
    useEffect(() => {
        setShowPopup(isFinished);
    }, [isFinished])

    return (
        <>
            <Button ref={target} style={{ backgroundColor: '#6923ff', borderColor: '#6923ff' }} onClick={() => setPage("Results")} disabled={!isFinished}>Submit</Button>
            <Overlay target={target.current} show={showPopup} placement="bottom" onEntered={hideTooltip}>
                {({
                    ...props
                }) => (
                    <Tooltip
                        className='submit-tooltip'
                        {...props}
                        style={{
                            ...props.style,
                        }}
                    >
                        You have answered all the questions! Click submit to finish.
                    </Tooltip>
                )}
            </Overlay>
        </>
    )
}

export default SubmitButton;
