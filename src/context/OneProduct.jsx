import { createContext, useState } from 'react'
import Client from "shopify-buy";

const productContext = createContext();

const OneProduct = (props) => {

    const [collections, setCollections] = useState([]);

    const client = Client.buildClient({
        storefrontAccessToken: "343ca4edd49cdb49d5fd98251dffae10",
        // storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
        domain: "the-orchid-patio.myshopify.com",
    });

    const fetchProductWithId = async (id) => {
        await client.product.fetch(id)
        .then(res =>{
            // console.log(res);
            setCollections([res]);
            // console.log(collections)
        })
      };

    return (
        <>
            <productContext.Provider value={{ collections, fetchProductWithId, setCollections }}>
                {props.children}
            </productContext.Provider>
        </>
    )
}

export default OneProduct;
export {productContext};