import { createContext } from "react";

const productList = createContext();

const AddProduct = (props) => {

    // const [myCheckout, setMyCheckout] = useState();

    const { addVariantToCartOnClick } = props;

    // var [first, setfirst] = useState(JSON.parse(localStorage.getItem("cartProductsList")));
    // console.log(first);

    // let cartProductsList = first === undefined || first === null ? [] : first;

    const handleAddProduct = (variants) => {
        // cartProductsList = [...cartProductsList, {
        //     ProductId: ProductId,
        //     title: title,
        //     image: image,
        //     price: parseInt(price),
        //     variants: variants
        // }]
        // localStorage.setItem('cartProductsList', JSON.stringify(cartProductsList));
        addVariantToCartOnClick(variants, 1);
    }

    return (
        <>
            <productList.Provider value={{ handleAddProduct }}>
                {props.children}
            </productList.Provider>
        </>
    )
}

export default AddProduct;
export { productList };

