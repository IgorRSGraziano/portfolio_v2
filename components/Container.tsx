import React, { ReactNode } from "react";

import { useIndexContext } from "contexts/IndexContext";

interface IProps {
    children: ReactNode;
    className?: string;
    id: number;
}

const Container = ({ children, className, id }: IProps) => {
    const { focusContainer, setFocusContainer } = useIndexContext();
    return (
        <div
            className={`bg-primary container ${className || ""} ${
                focusContainer == id ? "z-10" : "blur-sm"
            }`}
            onMouseMove={() => setFocusContainer(id)}
        >
            {children}
        </div>
    );
};

export default Container;
