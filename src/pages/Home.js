import Table from "../components/Table";

const Home = (props) => {

    let {products, setProducts} = props.products;
    
    return (
    <>
        <div className="container mx-auto px-11">
            <h2 className="font-bold"> List of all the Products</h2>
            <Table products={{products, setProducts}} />
            <h2 className="mt-4 font-bold"> Total Products Found : {products.length}</h2>

        </div>
    </>
    )
}

export default Home;