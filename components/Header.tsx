import { useIndexContext } from "contexts/IndexContext";

function Header() {
    const { focusSection, setFocusSection } = useIndexContext();
    return (
        <header className="flex justify-between items-center mt-9 mb-12">
            <strong className="html-tag text-primary font-bold text-2xl">
                Igor Graziano
            </strong>
            <nav>
                <ul className="flex gap-3">
                    {["Sobre", "Contato", "Skills", "Laboratório"].map(
                        (e, i) => (
                            <li
                                key={i}
                                className="relative"
                                onClick={() => setFocusSection(i + 1)}
                            >
                                {e}
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
