# JSON Server

## Reference
https://www.npmjs.com/package/json-server

## Example data

```
{
  "posts": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

## Usage

```
npm run json-server
npm run json-server:delayed
```

## Routes

### Plural
```
GET    /posts
GET    /posts/1
POST   /posts
PUT    /posts/1
PATCH  /posts/1
DELETE /posts/1
```

### Single
```
GET    /profile
POST   /profile
PUT    /profile
PATCH  /profile
```

### Access deep properties
```
GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
GET /comments?author.name=typicode
```

### Paginate

Keys `_page` and `_limit` are used to paginate results. 10 items are returned by default, unless `_limit` is set

```
GET /posts?_page=7
GET /posts?_page=7&_limit=20
```

### Sort
Keys `_sort` and `_order` (`asc` or `desc`) are used to sort results

```
GET /posts?_sort=views&_order=asc
GET /posts/1/comments?_sort=votes&_order=asc
GET /posts?_sort=user,views&_order=desc,asc
```

### Slice
Keys `_start` and `_end` (or `_start` and `_limit`) work on IDs

```
GET /posts?_start=20&_end=30
GET /posts/1/comments?_start=20&_end=30
GET /posts/1/comments?_start=20&_limit=10
```

### Operators

- Operators are
  - `_gte` is "greater than"
  - `_lte` is "less than"
  - `_ne` is "not equal"
  - `_like` is "like" (string search)
- Operators are concatenated to other keys to form a new key

```
GET /posts?views_gte=10&views_lte=20
GET /posts?id_ne=1
GET /posts?title_like=server
```

### Full-text search

Key `q` is for "query" and searches all resources (ex.: "posts") having given query on any key

```
GET /posts?q=internet
```

### Relationships

To include children resources, add the `_embed` key. To include parent resources, add the `_expand` key.

```
GET /posts?_embed=comments
GET /posts/1?_embed=comments
GET /comments?_expand=post
GET /comments/1?_expand=post
```

Get nested resources only

```
GET  /posts/1/comments
POST /posts/1/comments
```

## Options

Option | Desc
------ | ----
`--port` | Change port
`--routes` | JSON with custom routes (see doc)
`--watch` | Run in watch mode
`--middlewares` | List of scripts to run before/after requests
