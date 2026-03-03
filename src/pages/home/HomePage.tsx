import type { ITvShow } from "../../types";
import { useEffect, useState } from "react";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import { BASE_URL } from "../../constants";

export const HomePage = () => {
    const [shows, setShows] = useState<ITvShow[]>([])
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const getTvSows = async() => {
            try {
                const response = await fetch(`${BASE_URL}/search/shows?q=${searchValue}`)
                if(!response.ok) {
                    throw new Error("Failed to get TV Shows!")
                }
                const showData: ITvShow[] = await response.json();
                setShows(showData);
            } catch (error) {
                console.log(error)
            }
        } 
        getTvSows()
    }, [searchValue]) 

    console.log(shows)

    return (
        <div>
            <SearchInput 
                searchValue={searchValue} 
                setSearchValue={setSearchValue}
            />
             
        </div>
    )
}