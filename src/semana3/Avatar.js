import { getImageUrl } from "./utils";

export default function Avatar ({person}) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={`${person.titulo}`} 
            width="150"
        />
    );
}