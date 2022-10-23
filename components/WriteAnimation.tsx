import React from "react";

interface IProps {
    text: string;
    interval: number;
}

const WriteAnimation = ({ text, interval }: IProps) => {
    const [mountedText, setMountedText] = React.useState<string>("");

    React.useEffect(() => {
        let tmpText = "> ";
        text.split("").forEach(async (e, i) => {
            await new Promise<void>((r) => {
                setTimeout(() => {
                    tmpText += e;
                    setMountedText(tmpText);
                }, interval * i);
                r();
            });
        });
    }, []);
    return <div className="blinking-underline">{mountedText}</div>;
};

export default WriteAnimation;
