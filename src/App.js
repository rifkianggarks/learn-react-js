import React from 'react'
import './App.css';

function App() {
  
  return (
    <div className='Parentbox'>
      <FotoProduct />
      <ProductInfo isDiskon='yes' name='Nike Air Jordan 3' category='CASUAL' />
      
    </div>
  );
}

function CheckDiskon(props) {
  const { isDiskon } = props;

  if (isDiskon === 'yes') {
    return (
      <p>Diskon 50% off</p>
    );
  }

  else if (isDiskon === 'coming') {
    return (
      <p>Coming Soon</p>
    );
  }

  else {
    return (
      <p>Belum ada diskon</p>
    );
  }
}

function FotoProduct() {
  return(
  <div className='Foto'>
      <img src='airjordan.jpg' alt='sepatu' />
  </div>
  );
}

function ProductInfo(props) {

  const {category, name, isDiskon} = props ;

  const benefits = ['Tidak Mudah terkelupas', 'Anti Air', 'Tahan terhadap Api'];

  const listBenefits = benefits.map ((itemBenefit) => 
    <li>{itemBenefit}</li> 
  );

  return (
  <div>
    <div className='Deskripsi'>
        <p className='Cate'>{category}</p>
        <h1 className='Title'>{name}</h1>
        <p className='Price'>IDR 10.000.000</p>
        <CheckDiskon isDiskon={isDiskon} />
        <p className='Info'>
          One of the most recognizable shoes in AJ Collection, the Air Jordan 3 Retro features lightweight,
          visible cushioning just like original like from '88. Signature details and materials celebrate the game changing-icon.
        </p>
        <ul>
          {listBenefits}
        </ul>
        <a onClick={(e) => inCart(name, e)} href='#'>Add to cart</a>

      </div>
  </div>
  );
}

function inCart (e) {
  console.log('Membeli produk ' + e);
}

export default App;
