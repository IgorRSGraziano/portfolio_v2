import React, { ReactNode, useContext, useState } from "react";

interface IProps {
    children: ReactNode;
}

interface IContext {
    focusContainer: number;
    setFocusContainer: (n: number) => void;
    focusSection: number;
    setFocusSection: (n: number) => void;
    blockContainer: boolean;
    setBlockContainer: (b: boolean) => void;
}

const defaultValues: IContext = {
    focusContainer: 0,
    focusSection: 0,
    blockContainer: false,
    setFocusContainer: () => {},
    setFocusSection: () => {},
    setBlockContainer: () => {},
};

const Context = React.createContext<IContext>(defaultValues);

const IndexContext = ({ children }: IProps) => {
    const [focusContainer, _setFocusContainer] = React.useState<number>(1);
    const [focusSection, setFocusSection] = React.useState<number>(0);
    const [blockContainer, setBlockContainer] = React.useState<boolean>(false);

    const setFocusContainer = (value: number) => {
        if (!blockContainer) {
            _setFocusContainer(value);
        }
    };

    return (
        <Context.Provider
            value={{
                focusContainer,
                setFocusContainer,
                focusSection,
                setFocusSection,
                setBlockContainer,
                blockContainer,
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
