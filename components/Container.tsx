import { ReactNode } from "react";

import React from "react";

interface IProps {
    children: ReactNode;
}

const Container = ({ children }: IProps) => {
    return <div className="bg-primary container">{children}</div>;
};

export default Container;
