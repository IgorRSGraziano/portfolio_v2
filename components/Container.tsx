import { ReactNode } from "react";

import React from "react";

interface IProps {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className }: IProps) => {
    return (
        <div className={`bg-primary container ${className || ""}`}>
            {children}
        </div>
    );
};

export default Container;
