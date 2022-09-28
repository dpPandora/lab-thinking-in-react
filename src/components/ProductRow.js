function ProductRow(props) {
  if (!props.listing.name.toLowerCase().includes(props.filter.toLowerCase())) {
    return;
  }
  return (
    <tr key={props.listing.id}>
      {props.listing.inStock && <td>{props.listing.name}</td>}
      {!props.listing.inStock && <td className="red">{props.listing.name}</td>}
      <td>{props.listing.price}</td>
    </tr>
  )
}

export default ProductRow;