import { ReactNode } from "react";

import React from "react";

interface IProps {
    children: ReactNode;
    className?: string;
    focus: boolean;
}

const Container = ({ children, className, focus }: IProps) => {
    return (
        <div
            className={`bg-primary container ${className || ""} ${
                focus ? "z-10" : "blur-sm"
            }`}
        >
            {children}
        </div>
    );
};

export default Container;
