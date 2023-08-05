import React from 'react';

const AppForm = ({children, ...props}) => {
    return (
        <form className="mt-6 gap-4 flex flex-col" {...props} >
            {children}
        </form>
    );
};

export default AppForm;
