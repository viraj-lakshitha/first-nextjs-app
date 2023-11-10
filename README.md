# Learn Next JS

### Routes (App Router)
1. In app router, `/app` folder do the magic for you, use dont need to worry any routing mechanism (or installing react-router-dom, like we did in React)
2. If you want to use the `useParams()` to catch the path variables of the URL, you have use client component, and its not possible in server components/pages
3. Also, in one particular route, you can't have same path variable like `/posts/{id}/comments/{id}`. So it should be like `/posts/{postId}/comments/{commentId}` or `/posts/{id}/comments/{commentId}`