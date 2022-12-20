import { createContext, useEffect, useState } from 'react'

const headerContext = createContext();

const HeaderUtilities = (props) => {

    const [whichHeader, setWhichHeader] = useState(null);
    
    let Header = whichHeader === undefined || whichHeader === null ? "SearchHeader" : whichHeader;

    const changeHeader = (headerName) => {
        Header = headerName;
        localStorage.setItem('Header', JSON.stringify(Header));                          
    }

    useEffect(()=>{
        setWhichHeader(JSON.parse(localStorage.getItem("Header")));
        // console.log(Header);
    },[])
    // console.log(Header);
    return (
        <>
            <headerContext.Provider value={{Header, changeHeader}}>
                {props.children}
            </headerContext.Provider>
        </>
    )
}

export default HeaderUtilities;
export { headerContext };