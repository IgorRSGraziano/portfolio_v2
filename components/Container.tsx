import React, { ReactNode } from "react";

import { useIndexContext } from "contexts/IndexContext";

interface IProps {
    children: ReactNode;
    className?: string;
    containerId: number;
}

const Container = ({ children, className, containerId }: IProps) => {
    const { focusContainer, setFocusContainer } = useIndexContext();
    return (
        <div
            className={`bg-primary container ${className || ""} ${
                focusContainer == containerId ? "z-10" : "blur-sm"
            }`}
            onMouseEnter={() => setFocusContainer(containerId)}
        >
            {children}
        </div>
    );
};

export default Container;
