import { App } from "components/App";
import { List } from "components/List";
import PrivateRoute from "components/PrivateRouter";
import RestrictedRoute from "components/RestrictedRouters";
import { Home, Login, Registration } from 'pages';
import { createBrowserRouter } from "react-router-dom"

// /
// / tasks
// /login
// /register

export const contactsRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/contacts',
                element: <PrivateRoute component={List} redirecTo='/login'/>
            },
            {
                path: '/login',
                element: <RestrictedRoute component={Login} redirecTo={'/'}/>
            },
            {
                path: '/register',
                element: <Registration component={Registration} redirecTo={'/'}/>
            }
        ]
    }
])