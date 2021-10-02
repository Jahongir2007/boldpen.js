## Why Boldpen.js
Have you ever tried using JavaScript code outside of your browser? This is possible with Boldpen.js. Let's try this:
1. Download the .zip or .tar.gz file of Boldpen.js from this site.
2. We can open a folder for our program:
```
mkdir app
cd app
```
3. We will unarchive the `.zip` file we downloaded from this site and put it in our folder called `app`
4. create a file named script.js
5. Writing code in script.js:
```js
// script.js

const boldpen = require('boldpen.js-main/src/main/boldpen')'

boldpen.run(`${new Date()}`);
```
6. Create `log.txt` file
7. We use the Boldpen.js CLI tool.
```
node script.js log.txt
```
8. Result:
```
Fri Oct 01 2021 11:52:46 GMT+0500 (Узбекистан, стандартное время)
```
## Documentations
