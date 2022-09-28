import { useState } from 'react';
import rawData from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [data, modifyData] = useState(rawData);
  const [searchFilter, updateFilter] = useState('');

  return (
    <div className='ProductPage'>
      <h1>IronStore</h1>
      <SearchBar updateSearch={updateFilter}/>
      <ProductTable tableData={data} searchFilter={searchFilter}/>
    </div>
  )
}

export default ProductsPage;