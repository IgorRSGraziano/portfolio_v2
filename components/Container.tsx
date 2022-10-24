import { ReactNode } from "react";

import React from "react";

interface IProps {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: IProps) => {
    const [onFocus, setOnFocus] = React.useState<boolean>(false);
    return (
        <div
            className={`bg-primary container ${className || ""} ${
                onFocus ? "z-10" : "blur-sm"
            }`}
            onMouseOver={() => setOnFocus(true)}
            onMouseLeave={() => setOnFocus(false)}
        >
            {children}
        </div>
    );
};

export default Container;
