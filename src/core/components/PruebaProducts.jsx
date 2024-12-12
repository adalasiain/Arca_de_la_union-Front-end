import { useState } from "react";

function Products() {

    const [products, setProducts] = useState([])
    const getData= async()=>{
        const response = await fetch('http://localhost:8080/products',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJJc3JhZWwiLCJpYXQiOjE3MzI2NzA0NjQsImV4cCI6MTczMjcwNjQ2NH0.1zz13v8OVUkqQtbw5qhqdckDhUVzaJ_Hq7g8y22pI1s'  
            }
        });

        const data =await response.json()
        setProducts(data)
        console.log(data)

    }
    return (
        <div className="products">
            <h2>Products</h2>
            <button
            className="bg-blue-500 px-3 py-2 rounded"
            onClick={getData}
            >
                Get Products

            </button>
<div className="grid grid-cols-3 gap-3">
     {
                products?.map((product, index) => {
                    return (
                        <div
                        className="bg-gray-200 p-5 "
                         key={index}>
                            <h3>{product.name}</h3>
                            <p>
                                {product.description}
                            </p>
                            <div>
                                <img src={product.image} alt={product.name} />

                            </div>
                            <div>
                                <p>Price: {product.price}</p>
                                <p>Quantity: {product.quantity}</p>
                            </div>

                            </div>)
                            })

            
                        }
</div>
           
        </div>
        );
        
    
}

export default Products

