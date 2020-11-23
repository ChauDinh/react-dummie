# Pagination

This is my implementation for items pagination in React. In previous side
projects, I use pagination feature supported by Apollo ecosystem since I mainly
use GraphQL apis. However, in this practice, I want to work with a native
solution for this task with the `randomuser.me/api`.

### Pagination with Prev/Next buttons

There are two common ways to paginate items. The first one I use `load more`
button to mimic the infinite scroll, you can check in `Users` folder. The second
one is prev/next pagination (this folder).

First, let see the structure of `api` for fetching multiple users:

`https://randomuser.me/api/?page=3&results=10`

So we need `page` and `results` parameters, actually we can set the `results`
default to be 3 (as our demo) and so we just need the `page` for every request.

Second, the initial users fetched by using `React.useEffect`
