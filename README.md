# NPM workspaces scripts
```bash
npm --workspace=@mrck-labs/module-b run start
```

```bash
npm --workspaces run test
```

```bash
npm --workspaces --if-present run test
```

Or other syntax:
```bash
npm run start -w=@mrck-labs/module-b
```

```bash
npm run test -ws (everywhere)
```