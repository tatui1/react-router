import { useNavigate } from "react-router"

export const HomePage = () =>{
    const navigate = useNavigate()

    const onContactsClick = () => {
        navigate('/contacts')
    }

    const onAboutClick = (id: number) =>  {
        navigate(`/about/${id}`)
    }
    return (
        <div>
            home
            <button onClick={onContactsClick}>go to contacts</button>
            <button onClick={() => onAboutClick(1)}> go to about page id 1</button>
            <button onClick={() => onAboutClick(2)}> go to about page id 2</button>
        </div>
    )
}