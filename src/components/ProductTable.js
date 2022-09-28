import ProductRow from "./ProductRow";

function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product Price</th>
        </tr>
      </thead>
      <tbody>
        {props.tableData.map(listing => {
          return <ProductRow listing={listing} filter={props.searchFilter}/>
        })}
      </tbody>
    </table>
  )
}

export default ProductTable;