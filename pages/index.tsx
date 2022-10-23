import Container from "components/Container";
import Header from "components/Header";
import WriteAnimation from "components/WriteAnimation";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <>
            <div>
                <Container>
                    <Header />
                    <WriteAnimation
                        text="> Full-Stack Developer"
                        interval={80}
                    />
                </Container>
            </div>
        </>
    );
};

export default Home;
