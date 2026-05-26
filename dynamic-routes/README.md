# Dynamic Routes Practice

This project is a Next.js App Router practice project for learning dynamic routes and nested dynamic routes.

## Project Routes

```txt
app/
  page.tsx
  blogs/
    page.tsx
    [slug]/
      page.tsx
      [comments]/
        page.tsx
```

## Static Route

### `/blogs`

File:

```txt
app/blogs/page.tsx
```

This is a normal static route. The folder name `blogs` becomes the URL path `/blogs`.

Example URL:

```txt
http://localhost:3000/blogs
```

## Dynamic Route

### `/blogs/[slug]`

File:

```txt
app/blogs/[slug]/page.tsx
```

The `[slug]` folder creates a dynamic route segment. Any value after `/blogs/` is captured as `slug`.

Example URLs:

```txt
http://localhost:3000/blogs/react
http://localhost:3000/blogs/nextjs
http://localhost:3000/blogs/nodejs
```

For `/blogs/react`, the route params will be:

```ts
{
  slug: "react"
}
```

In this project, the dynamic page reads the `slug` value from `params`:

```tsx
export default async function Blog({ params }) {
  const { slug } = await params;

  return (
    <div>
      Blog Page hello
      {slug}
    </div>
  );
}
```

Because this project uses Next.js 16, `params` is handled as an async value, so we use:

```ts
const { slug } = await params;
```

## Nested Dynamic Route

### `/blogs/[slug]/[comments]`

File:

```txt
app/blogs/[slug]/[comments]/page.tsx
```

This is a nested dynamic route. It has two dynamic segments:

- `[slug]` captures the blog name or blog id.
- `[comments]` captures the nested comment value.

Example URLs:

```txt
http://localhost:3000/blogs/react/first-comment
http://localhost:3000/blogs/nextjs/comment-10
http://localhost:3000/blogs/nodejs/hello-comment
```

For `/blogs/react/first-comment`, the route params will be:

```ts
{
  slug: "react",
  comments: "first-comment"
}
```

In this project, the nested dynamic page reads both values from `params`:

```tsx
export default async function comments({ params }) {
  const { slug, comments } = await params;

  return (
    <div>
      comments from nested dynamic routes
      {slug} and the nested comments is {comments}
    </div>
  );
}
```

## Important Concepts Practiced

1. Folder names create routes in the App Router.
2. A `page.tsx` file makes that folder accessible as a page.
3. Square brackets create dynamic route segments.
4. `[slug]` means the value can change based on the URL.
5. Nested folders create nested URLs.
6. Multiple dynamic folders create multiple params.
7. In Next.js 16, `params` can be awaited inside async page components.

## Route Summary

| File | URL Pattern | Params |
| --- | --- | --- |
| `app/blogs/page.tsx` | `/blogs` | No dynamic params |
| `app/blogs/[slug]/page.tsx` | `/blogs/:slug` | `slug` |
| `app/blogs/[slug]/[comments]/page.tsx` | `/blogs/:slug/:comments` | `slug`, `comments` |

## How To Run

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Then open:

```txt
http://localhost:3000/blogs
http://localhost:3000/blogs/react
http://localhost:3000/blogs/react/first-comment
```
