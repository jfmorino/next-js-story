import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

function LandingPageLayout({ children }: {
    children:
    React.ReactNode
}) {
    return (
        <div className='h-full'>
            <Navbar />
            <main className=''>{children}</main>
            <Footer />
        </div>
    )
}

export default LandingPageLayout