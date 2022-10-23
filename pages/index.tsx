import Container from "components/Container";
import Header from "components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <>
            <div>
                <Container>
                    <Header />
                </Container>
            </div>
        </>
    );
};

export default Home;
