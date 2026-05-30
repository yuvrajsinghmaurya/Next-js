# Catch-All Routes in Next.js

This project demonstrates how to create a catch-all route in Next.js using the App Router.

The catch-all route is created inside:

```txt
app/[...filePath]/page.tsx
```

## What Is a Catch-All Route?

A catch-all route is used when you want one page to handle multiple dynamic URL segments.

For example, this single route can handle URLs like:

```txt
/about
/docs
/docs/react
/docs/react/hooks
/folder/subfolder/file
```

All of these URLs are matched by `[...filePath]`.

## Route File

```tsx
export default async function File({ params }: { params: string[] }) {
  console.log(await params);

  const { filePath } = await params;

  return (
    <div>
      File {filePath.join("/")}
    </div>
  );
}
```

## How It Works

In Next.js, square brackets are used for dynamic routes.

```txt
[...filePath]
```

The three dots `...` make it a catch-all route. This means Next.js will collect all matching URL parts and store them inside the `filePath` parameter as an array.

Example:

```txt
URL: /docs/react/hooks
```

The `filePath` value will be:

```ts
["docs", "react", "hooks"]
```

Then this line joins the array into a readable path:

```tsx
filePath.join("/")
```

Output:

```txt
docs/react/hooks
```

So the page displays:

```txt
File docs/react/hooks
```

## Run the Project

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open the app in your browser:

```txt
http://localhost:3000
```

Then test different routes:

```txt
http://localhost:3000/about
http://localhost:3000/docs/react
http://localhost:3000/folder/subfolder/file
```

## Important Note

This route catches one or more path segments. That means `/about` works, but the home route `/` is not handled by `[...filePath]`.

To also catch the home route, use an optional catch-all route:

```txt
app/[[...filePath]]/page.tsx
```

## Summary

This project shows how to:

- Create a catch-all route in Next.js.
- Read multiple URL segments from `params`.
- Display the complete dynamic path on the page.
