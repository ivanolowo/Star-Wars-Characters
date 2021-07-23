//import { render } from '@testing-library/react';
import { data } from 'jquery';
import React, { useState, useEffect  } from 'react'
import { Grid } from 'semantic-ui-react';
//import results from '../App';

export default function Search({ data, props }) {
    const onSearch = props
    const [searchText, setSearchText] = useState('')

    const handleSearch = (e) => { 
        const text = e.target.value;
        setSearchText(text);
    }
    
    const handleEnterKeyPress = (e) => { 
        if (e.key === 'Enter') {
            onSearch(searchText)
        }
    }

   /*  useEffect(() => {
        async function fetchSearch() {
            let res = await fetch('https://swapi.dev/api/people/?search');
            let data = await res.json();
            setSearch(data.results);
            console.log(data.results);
            setLoading(false);
        }
        fetchSearch();
    }, [])
 */    return (
        <>
            <h1>Search</h1>
            <div>
                        <div class='ui search'>
                            <div ui icon input>
                            <input
                                class='prompt'
                                onChange={handleSearch} 
                            onKeyPress={handleEnterKeyPress}
                            value={searchText}
                                type="text"
                                placeholder="Search character"   
                                />
                                <i className="search icon"></i>

                            {/*  {data.forEach(function (value) {
                                if (searchName === '') {
                                    return value;
                                } else if (value.name.toLowerCase().includes(searchName.toLowerCase())) {
                                    console.log(value);
                                    return value;
                                }
                            }).map((value, key) => {

                                return <div> {value.name}</div>
                            })} */}
                            </div>
                        </div>                
            </div>
        </>
    );
}