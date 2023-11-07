A route action is a server only function to handle data mutations and other actions. If a non-GET request is made to your route (DELETE, PATCH, POST, or PUT) then the action is called before the loaders.

actions have the same API as loaders, the only difference is when they are called. This enables you to co-locate everything about a data set in a single route module: the data read, the component that renders the data, and the data writes

Remix is built on web standards, so add post to form method: <Form method='POST'>
[see](https://www.davebitter.com/articles/remix-loaderfunction-vs-actionfunction)

You could **disable JavaScript and the whole thing will still work**. Instead of Remix serializing the form and making a fetch request to your server, the browser will serialize the form and make a document request. From there Remix will render the page server side and send it down. It's the same UI in the end either way.