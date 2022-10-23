import type { NextPage } from "next";
import ContainerOne from "components/ContainerOne";
import ContainerTwo from "components/ContainerTwo";

const Home: NextPage = () => {
    return (
        <>
            <main>
                <ContainerOne />
                <ContainerTwo />
            </main>
        </>
    );
};

export default Home;
