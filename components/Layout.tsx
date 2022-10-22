import React from 'react'
import Header from './header'

type AppLayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}: AppLayoutProps) => {
    return(
        <Header/>
    )
}
export default Layout