const LINKS = [
    { to: '/', text: 'Home' },
    { to: '/prodcut', text: 'Product' },
    { to: '/contact', text: 'Contact' },
];

const Navbar = () => {
    return (
        <nav>
            <ul>
                {LINKS.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;