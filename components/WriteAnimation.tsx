import React from "react";

interface IProps {
    text: string;
    interval: number;
    className?: string;
}

const WriteAnimation = ({ text, interval, className }: IProps) => {
    const [mountedText, setMountedText] = React.useState<string>("");

    React.useEffect(() => {
        let tmpText = "";
        text.split("").forEach(async (e, i) => {
            setTimeout(() => {
                tmpText += e;
                setMountedText(tmpText);
            }, interval * i);
        });
    }, []);
    return (
        <div className={`blinking-underline ${className || ""}`}>
            {mountedText}
        </div>
    );
};

export default WriteAnimation;
