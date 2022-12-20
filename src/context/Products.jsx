import { createContext, useState } from 'react'
import Client from "shopify-buy";

const productsContext = createContext();

const Products = (props) => {

    const [collections, setCollections] = useState([]);

    const client = Client.buildClient({
        storefrontAccessToken: "343ca4edd49cdb49d5fd98251dffae10",
        // storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
        domain: "the-orchid-patio.myshopify.com",
    });
    const fetchAllCollections = async (id) => {
        await client.collection.fetchWithProducts(id, { productsFirst: 100 })
        .then(res => {
            // console.log(res);
            setCollections([res]);
            // console.log(collections)
        });
    }

    return (
        <>
            <productsContext.Provider value={{ collections, fetchAllCollections, setCollections }}>
                {props.children}
            </productsContext.Provider>
        </>
    )
}

export default Products;
export { productsContext };