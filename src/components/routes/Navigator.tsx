import { Route } from "@/models/Routes.models"
import Link from "next/link"

interface Prosp {
    pathNames: Route[]
}

function Routes({ pathNames }: Prosp) {
    return (
        <ul>
            {pathNames.map(pathNames => (
                <Link key={pathNames.path}  href={pathNames.path}><li>{pathNames.name}</li></Link>
            ))}
        </ul>
    )
}

export default Routes;