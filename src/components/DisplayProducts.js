import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/Product';

export const DisplayProducts = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.product);
    console.log(data)

    useEffect(()=> {
        dispatch(fetchProducts())
    }, [])

  return (
    <div>DisplayProducts</div>
  )
}
