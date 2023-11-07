Loader for Remix has the same effect as getServerSideProps, both are optimised ways to fetch data instead of client-side useEffect.

useLoaderData consumes the loader in the closest(same) route so that there are no tracable network request nor need for JS on client as with useEffect

NB Note that whatever you return from your `loader` will be exposed to the client, even if the component doesn't render it. Treat your `loader`s with the same care as public API endpoints

loader needs json to transform data for server browser transfer, while useLoaderData return the serialized data directly so no need for json. The useLoaderData hook in Remix does not require the json function because it is designed to read the data that has already been loaded by the loader function. 

[see](https://www.youtube.com/watch?v=NXqEP_PsPNc&list=PLXoynULbYuEDG2wBFSZ66b85EIspy3fy6&index=2)