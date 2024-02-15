import { memo } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Header = memo(() => {
    return (
        <header className='flex justify-between items-center w-full h-[10vh]'>
            <div className='cursor-pointer py-3 pl-2'>
                <Link
                    to="/"
                >
                    <img 
                        src="/logo.png" 
                        alt="logo image"
                        className='w-full h-12' 
                    />
                </Link>
            </div>
            <div className='px-2 w-2/6 relative'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute left-6 bottom-[10px] text-gray-500'/>
                <input 
                    type="text" 
                    placeholder='Tìm kiếm gì đó'
                    className='border-2 border-solid border-slate-400 rounded-md px-10 py-1 w-full'
                />
            </div>
            <div className='pr-6'>
                <ul className='flex gap-3 items-center'>
                    <li className='cursor-pointer'>Login</li>
                    <li className='cursor-pointer bg-blue-400 p-3 rounded-lg'>Register</li>
                </ul>
            </div>
        </header>
    )
});
