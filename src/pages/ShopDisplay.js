import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/Product';
import { addToCart } from '../store/CartSlice';
import { useNavigate } from 'react-router-dom';
import MainCategory from '../category/MainCategory';
import DisplaySlider from '../category/DisplaySlider';


function ShopDisplay() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.product.data);
    // console.log(data)
    const navigate = useNavigate();

    const handleCart = (product) => {
        dispatch(addToCart(product))
        navigate('/cart')
    }

    useEffect(()=> {
        dispatch(fetchProducts())
    }, [])

  return (
    <div className="shop p-3">
      <h2 className='shopTitle'>Shopify Online Market</h2>
      <DisplaySlider/>
      <MainCategory/>
      <div className="container row mx-auto mt-5">
        {data?.map(product => (    
            <div className='col-md-3 mt-4 polaroid' key={product.id}>
                <img
                  className='img-fluid mb-3 product-image'
                  key={product.id}
                  src={product.image_url} 
                  alt="original"/>
                  <div className="title">
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                  </div>
                  <div>
                    
                  </div>
                  <div className='title'>
                    <button className='addToCartBttn' onClick={() => handleCart(product)}>Add to cart</button>
                  </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ShopDisplay;

