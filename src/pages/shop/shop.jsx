import PRODUCT from '../../data/products'
import Products from '../products/products'


const shop = () => {
  
  return (
    <div>
      <h1 className='m-5'>Shop Products</h1>
      <div className="row">


      {PRODUCT.map((productdata)=> <Products key={productdata.id}   data={productdata}  />)}


      </div>
        

    </div>
  )

     
  
}

export default shop;
        



