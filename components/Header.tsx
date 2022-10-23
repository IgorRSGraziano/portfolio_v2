function Header() {
    return (
        <header className="flex justify-between">
            <strong className="html-tag text-primary font-bold text-2xl">
                Igor Graziano
            </strong>
            <nav>
                <ul className="flex gap-3">
                    {["Sobre", "Contato", "Skills", "Laboratório"].map(
                        (e, i) => (
                            <li key={i} className="relative">
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
