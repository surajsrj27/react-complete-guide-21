import { useRouter } from 'next/router';
// our-domain.com/news/something-important

const DetailsPage = () => {
    const router = useRouter();

    console.log(router.query.newsId);
    return (
        <div>
            <h1>The Detail Page</h1>
            <p>{router.query.newsId}</p>
        </div>
    );
}

export default DetailsPage;