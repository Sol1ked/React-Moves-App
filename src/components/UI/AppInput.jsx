import React from 'react';

const AppInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input
                autoComplete="off"
                ref={ref} {...props}
                className="placeholder-[#ABABAB] text-base outline-none text-[#ABABAB] py-2 border-b-[1px] border-b-[#646567] bg-[#1E1F24] w-full"
            />
        </div>
    );
});

export default AppInput;