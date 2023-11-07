Instead of sending data from a form to the server, Remix utilizes client side routing and sends the data to the route's action function (server only function).(much like useLoaderData utilizes the data returned from the loader function)

Without client side routing, the browser will serialize the form's data automatically and send it to the server as the request body for POST, and as URLSearchParams for GET. Remix does the same thing, except instead of sending the request to the server, it uses client side routing and sends it to the route's action function.
