import Header from "components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <>
            <div className="bg-primary">
                <Header />
            </div>
        </>
    );
};

export default Home;
