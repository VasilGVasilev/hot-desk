Unlike, Next.js where routes are more clearly nested via the principle -> routes are dirs with page.jsx/.tsx file and layout.jsx/.tsx, thus, you can clearly visualize the nesting of whole pages (directories) and components in them (components are imported into each page file),

Remix takes a different approach so you cannot realy compare with page/layout and the dirs as routes.

![routing img]()

- root.tsx is sort of the global layout so put navigation here

- <Outlet> is used in root.tsx to pass on children routes, which are all those in routes special directory.

- _index is the defualt placeholder for <Outlet> in the html

- any other file in /routes constitutes a page -> about.tsx, concerts.tsx

- we can have <Outlet> in those routes too and to fill them we have nested routes -> about.contacts.tsx, about.location.tsx

- we may want to navigate to a special page after a CRUD operation so _ in front of . to avoid nesting -> contacts_.edit , contacts_.destroy