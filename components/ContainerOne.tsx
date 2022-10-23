import React from "react";
import Image from "next/image";
import Header from "./Header";
import Container from "./Container";
import WriteAnimation from "./WriteAnimation";

function ContainerOne() {
    return (
        <Container className="container-one">
            <Header />
            <section>
                <div className="flex ">
                    <div className="w-2/4">
                        <WriteAnimation
                            text="> Full-Stack Developer"
                            className="text-accent"
                            interval={80}
                        />
                        <h2 className="title">Igor Graziano</h2>
                        <span>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Amet iusto ab magnam consectetur illum tenetur
                            magni recusandae nulla, sapiente deserunt
                            reprehenderit deleniti. Sapiente, voluptates?
                            Adipisci amet rerum distinctio nulla ullam?
                        </span>
                    </div>
                    <Image
                        src="/images/computer-illustration.png"
                        width={439}
                        height={326}
                        alt=""
                        className="w-2/4"
                    />
                </div>
            </section>
            <section>
                <h3 className="title">Contato</h3>
                <span>
                    Sinta-se a vontade para entrar em contato comigo, será um
                    prazer te atende-lo
                </span>
            </section>
        </Container>
    );
}

export default ContainerOne;
