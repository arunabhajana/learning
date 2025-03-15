import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import QueryFetch from '../components/QueryFetch';
import MutatePost from '../components/MutatePost';

const queryClient = new QueryClient();

const TanstackPage = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <QueryFetch />
            <MutatePost />
        </QueryClientProvider>
    );
}

export default TanstackPage;