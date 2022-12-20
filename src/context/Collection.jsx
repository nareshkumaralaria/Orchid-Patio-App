import { createContext, useState } from "react";
import Client from "shopify-buy";

const collectionContext = createContext();

const Collection = (props) => {

    const [collections, setCollections] = useState([]);

    const client = Client.buildClient({
        storefrontAccessToken: "343ca4edd49cdb49d5fd98251dffae10",
        domain: "the-orchid-patio.myshopify.com",
    });

    const fetchAllCollections = async () => {
        const result = await client.collection.fetchAllWithProducts({first: 100});
        setCollections([result]);
        // console.log(result);
    };

  return (
    <collectionContext.Provider value={{collections, fetchAllCollections}}>
        {props.children}
    </collectionContext.Provider>
  )
}

export default Collection;
export { collectionContext };