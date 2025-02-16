import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Header() {
    const isSignedIn = false; // You can manage this state however you'd like (e.g., via Redux, Context, etc.)

    return (
        <div className='p-3 px-12 flex justify-between shadow-md'>
            <Link to={'/'}>
                <h1 className='text-4xl font-bold text-primary'>Resu Pro</h1>
            </Link>
            {isSignedIn ?
                <div className='flex gap-12 items-center'>
                    <Link to={'/dashboard'}>
                        <a href="/dashboard" className="inline-flex justify-center items-center py-2 px-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Dashboard
                        </a>
                    </Link>
                </div> :
                <Link to={'/auth/sign-in'}>
                    <Button>Login</Button>
                </Link>
            }
        </div>
    )
}

export default Header
