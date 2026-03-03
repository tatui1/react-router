import { useParams } from "react-router"

export const AboutPage = () =>{
    const {id} = useParams()
    return (
        <div>
            About Page{id}
        </div>
    )
}