import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import NavbarComponent from "../components/navbar/navbar.component.tsx";

export const Route = createRootRoute({
    component: () => (
        <>
            <NavbarComponent />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})
