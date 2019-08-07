1. 路由
  1). router.all() can be used to match against all methods.
  2). router.verb(), where verb is one of the HTTP verbs such as router.get() or router.post().

例子：
router
.get('/', (ctx, next) => {
  ctx.body = 'Hello World!';
})
.post('/users', (ctx, next) => {
  // ...
})
.put('/users/:id', (ctx, next) => {
  // ...
})
.del('/users/:id', (ctx, next) => {
  // ...
})
.all('/users/:id', (ctx, next) => {
  // ...
});

命名的路由
router.get('user', '/users/:id', (ctx, next) => {
 // ...
});
