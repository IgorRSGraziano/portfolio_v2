import React, { ReactNode } from "react";

import { useIndexContext } from "contexts/IndexContext";

interface IProps {
    children: ReactNode;
    className?: string;
    id: number;
    containerId: number;
}

const Section = ({ children, className, id, containerId }: IProps) => {
    const { focusContainer, setFocusContainer, focusSection, setFocusSection } =
        useIndexContext();

    const [isHighlight, setIsHighlight] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (focusSection.includes(id)) {
            setFocusContainer(containerId);
            setFocusSection(focusSection.filter((x) => x != id));
            setIsHighlight(true);
            setTimeout(() => setIsHighlight(false), 1000);
        }
    }, [focusSection]);

    return (
        <div
            className={`${className || ""} ${
                isHighlight ? "section-highlight" : "section"
            }`}
        >
            {children}
        </div>
    );
};

export default Section;
