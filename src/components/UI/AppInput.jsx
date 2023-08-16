import React from 'react';

const AppInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input
                autoComplete="off"
                ref={ref} {...props}
                className="placeholder-[#60606C] text-base outline-none  bg-transparent w-full"
            />
        </div>
    );
});

export default AppInput;