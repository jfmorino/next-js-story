import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

function LandingPageLayout({ children }: {
    children:
    React.ReactNode
}) {
    return (
        <div className='h-auto flex flex-col'>
            <Navbar />
            <main className=' h-full max-w-7xl mx-auto px-5 relative pt-2'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default LandingPageLayout