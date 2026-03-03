import TextField from '@mui/material/TextField';

interface Props {
    searchValue: string,
    setSearchValue: (value: string) => void
}

export const SearchInput = ({searchValue, setSearchValue}:Props) => {
    return (
            <TextField
                label = 'Type Tv Show'
                variant='outlined'
                value = {searchValue}
                onChange = {(e) => setSearchValue(e.target.value)}
            />
    )
}