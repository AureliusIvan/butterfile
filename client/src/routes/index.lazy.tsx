import { createLazyFileRoute } from '@tanstack/react-router'
import "./../index.css"

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2 Ybg-red-200">
            <h3>Welcome Home!</h3>
        </div>
    )
}
