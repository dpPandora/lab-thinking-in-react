import {Input} from 'antd'

function SearchBar(props) {
  return (
    <Input type='text' onChange={event => {
      props.updateSearch(event.target.value)
    }}/>
  )
}

export default SearchBar;