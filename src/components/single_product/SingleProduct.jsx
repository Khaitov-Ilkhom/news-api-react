import Container from "../container/Container"
import { useState } from "react";
import './SingleProduct.css'

const SingleProductPage = ({ data }) => {
    const [count, setCount] = useState(1);

    return (
        <Container>
            <h2 className="single_product_main_title">Product</h2>
            <div className='single_product_content'>
                <div className="single_product_img_content">
                    <img src={data.thumbnail} alt={data.title} />
                </div>
                <div className="single_product_wrapper">
                    <h3 className="single_product_title">{data.title}</h3>
                    <p className="single_product_description">"{data.description}"</p>
                    <div className="single_product_info">
                        <div className="single_products_stock">
                            <b>Stock:</b> <span>{data.stock}</span>
                        </div>
                        <div className="single_products_category">
                            <b>Category:</b> <span>{data.category}</span>
                        </div>
                        <div className="single_products_rating">
                            <b>Rating:</b> <p>{data.rating} / 5</p>
                        </div>
                    </div>
                    <div className="single_product_btn_content">
                        <div className="single_btn_items">
                            <div className="single_products_price_discount">
                                ${((data?.price - (data?.price * data?.discountPercentage) / 100).toFixed(2) * count).toFixed(2)}
                                <span>${((data?.price * count).toFixed(2))}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SingleProductPage;
