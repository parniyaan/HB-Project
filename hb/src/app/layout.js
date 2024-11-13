import React from 'react';
import {ContextProvider} from './context/context'
import Header from "@/app/components/header/header";
import MainContainer from "@/app/components/mainContainer/mainContainer";
import WhatsApp from "@/app/components/whatsApp/whatsApp";
import Footer from "@/app/components/footer/footer";
import './globals.css';
import './reset.css';
import Navbar from "./components/header/navbar/navbar";


function RootLayout() {
    return (
        <ContextProvider>
            <html lang="en">
            <body>
            <Navbar/>
            <main>
                <Header/>
                <MainContainer/>
            </main>
            <Footer/>
            <WhatsApp/>
            </body>
            </html>
        </ContextProvider>
    );
}

export default RootLayout;