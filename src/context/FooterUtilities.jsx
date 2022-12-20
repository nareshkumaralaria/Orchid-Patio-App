import { createContext, useEffect, useState } from 'react'

const footerContext = createContext();

const FooterUtilities = (props) => {

    const [whichFooter, setWhichFooter] = useState(null);
    let Footer = whichFooter === undefined || whichFooter === null ? "mainFooter" : whichFooter;

    const changeFooter = (FooterName) => {
        Footer = FooterName;
        localStorage.setItem('Footer', JSON.stringify(Footer));                          
    }

    useEffect(()=>{
        setWhichFooter(JSON.parse(localStorage.getItem("Footer")));
        // console.log("Footer: ",Footer);
    },[])

    return (
        <>
            <footerContext.Provider value={{Footer, changeFooter}}>
                {props.children}
            </footerContext.Provider>
        </>
    )
}

export default FooterUtilities;
export { footerContext };