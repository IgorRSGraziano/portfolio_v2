import type { NextPage } from "next";
import React from "react";
import ContainerOne from "components/ContainerOne";
import ContainerTwo from "components/ContainerTwo";
import { IndexContext } from "contexts/IndexContext";

const Home: NextPage = () => {
    const [focus, setFocus] = React.useState<1 | 2>(1);
    return (
        <IndexContext>
            <main>
                <div onMouseEnter={() => setFocus(1)}>
                    <ContainerOne focus={focus == 1} />
                </div>
                <div onMouseEnter={() => setFocus(2)}>
                    <ContainerTwo focus={focus == 2} />
                </div>
            </main>
        </IndexContext>
    );
};

export default Home;
