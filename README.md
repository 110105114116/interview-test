# interview-test

Install
```
pnpm install
```
Run
```
pnpm run dev
```
---
1. GET localhost:3301/1
2. POST localhost:3301/2
    > { "message": "..."}
3. POST localhost:3301/3
    > {
   "data": [
     {
        "is_sample": true,
        "sample": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }, {
         "is_sample": true,
         "sample": [3, 2, 3, 4, 5, 6, 7, 8, 9, 10]
       }, {
         "is_sample": false,
         "sample": null
      }
    ]
}
