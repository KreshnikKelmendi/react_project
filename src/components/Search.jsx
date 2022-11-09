import { React, useState } from "react";
import data from "../data/data";
import ItemCard from "../components/ItemCard";

const Search = (props) => {
    const [search, setSearch] = useState('');

    return(
        <div className="container-fluid text-center search-input">
            <div className="row">
            <input type="search" 
                   placeholder="Search watches . . ."
                   onChange={event => {setSearch(event.target.value)}} /></div>
            {data.filter((el) => {
                if (search === '') {
                    return el
                } else if (el.model.toLowerCase().includes(search.toLowerCase())){
                    return el
                }
            }).map((item, key) => {
                return <ItemCard 
                img={item.img} 
                model={item.model} 
                description={item.description} 
                price={item.price}
                item={item} 
                key={key} />
                  
            })}
            </div>
    );
}

export default Search;