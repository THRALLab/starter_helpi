import React, {useState} from 'react';
function basicSlider(
    const basicSlider: React.FC = () => {
        const [value, setSlideVal] = useState<number>(11);
    
        const adjust = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSlideVal(parseInt(event.target.value, 10));
        };
        return(
            <div>
                <input
                type="range"
                min={1}
                max={10}
                value={value}
                onChange={handleChange}
                />
                <p>Value: {value} </p>
            </div>
        );
    };
)
export default BasicSlider;