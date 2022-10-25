import React, { ReactNode, useContext, useState } from "react";

interface IProps {
    children: ReactNode;
}

interface IContext {
    focusContainer: number;
    setFocusContainer: (n: number) => void;
    focusSection: number;
    setFocusSection: (n: number) => void;
}

const defaultValues: IContext = {
    focusContainer: 0,
    focusSection: 0,
    setFocusContainer: () => {},
    setFocusSection: () => {},
};

const Context = React.createContext<IContext>(defaultValues);

const IndexContext = ({ children }: IProps) => {
    const [focusContainer, setFocusContainer] = React.useState<number>(1);
    const [focusSection, setFocusSection] = React.useState<number>(0);
    return (
        <Context.Provider
            value={{
                focusContainer,
                setFocusContainer,
                focusSection,
                setFocusSection,
            }}
        >
            {children}
        </Context.Provider>
    );
};

const useIndexContext = () => {
    const context = useContext(Context);

    return context;
};

export { IndexContext, useIndexContext, Context };
