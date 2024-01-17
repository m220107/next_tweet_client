import Link from 'next/link';

interface NavbarLinkProps{
    href: string;
    label: string;
    onClick?: () => void;
    // ↑の？は入力は任意ですよって意味
}

const NavbarLink = ({href, label, onClick} : NavbarLinkProps) => {
    return (
        <Link 
            href={href} 
            className='hidden md:inline-block p-3 text-black'
            onClick={onClick}
            >
            {label}
        </Link>
    );
}

export default NavbarLink;