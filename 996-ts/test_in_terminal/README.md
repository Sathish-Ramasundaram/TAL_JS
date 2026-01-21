

## ▶️ Running in Terminal
You can also run `.ts` files directly with **ts-node**:

1. Install ts-node:
   ```bash
   npm install -g ts-node
   ```

2. Create a simple file `test.ts`:
   ```ts
   console.log("Hello from terminal!");
   ```

   create a tsconfig.json file and paste what I have

3. Run it:
   ```bash
   ts-node test.ts
   ```

Output:
```
Hello from terminal!
```

---

## ✅ Summary
- Use `tsc` to compile `.ts` → `.js` for browser use.  
- Use `ts-node` to run `.ts` directly in terminal.  
- `tsconfig.json` ensures TypeScript knows which environment (Node + DOM) you’re targeting, so common globals like `console` and `document` work without errors.
```
