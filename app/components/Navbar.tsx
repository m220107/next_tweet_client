"use client"

import Link from 'next/link';
import { SiLoopback } from 'react-icons/si';
import NavbarLink from './NavbarLink';
import Cookies from 'js-cookie';
import { useRouter } from 'next/dist/client/components/navigation';

const Navbar = () => {
    const router = useRouter();
    console.log('Navbar!!!')
    const signOut = async () => {
        await Cookies.remove('access_token');
        router.push('/auth/login');
    }
    return (
        <nav>
            <div className="flex px-5 py-3 border-b">
                <div className="flex items-center mr-6">

                    {/* アイコン */}
                    <SiLoopback className="me-3" size="2em" />
                    
                    {/* タイトル */}
                    <Link href="/" className="ms-3 me-3">
                        <span className="self-center text-black text-2xl font-semibold">Next Tweet</span>
                    </Link>
                </div>

                <div>
                    {/* <ul className="flex flex-wrap">
                        <li>
                            <Link 
                            href="/user/profile" 
                            className='hidden md:inline-block p-3 text-black'>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link href="/regist" className='py-2 px-3'>Register</Link>
                        </li>
                        <li>
                            <Link href="/login" className='py-2 px-3'>Sign in</Link>
                        </li>
                        <li>
                            <Link href="/user/logout" className='py-2 px-3'>Sign out</Link>
                        </li>
                    </ul> */}
                    <NavbarLink 
                    href="/user/profile" 
                    label="Profile" 
                    />
                    
                    <NavbarLink 
                    href="/auth/regist" 
                    label="Register" 
                    />
                    
                    <NavbarLink 
                    href="/auth/login" 
                    label="Sign in" 
                    />
                    
                    <NavbarLink 
                    href="#" 
                    label="Sign out" 
                    onClick={signOut}/>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

function userRouter() {
    throw new Error('Function not implemented.');
}