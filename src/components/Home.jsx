
import { useRoutes } from 'react-router-dom';
import { router } from '../router';
const Home = () => {
        const routes =useRoutes(router)
    return (
        <>
            {routes}
        </>
    );
}

export default Home;
