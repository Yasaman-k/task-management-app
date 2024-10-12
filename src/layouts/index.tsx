import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div>
            <header>
                <nav className='bg-slate-800 text-white content-center text-center h-32 p-2'>
                    <h1>
                        Task Management
                    </h1>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                copy@2024
            </footer>
        </div>
    )
}

export default RootLayout