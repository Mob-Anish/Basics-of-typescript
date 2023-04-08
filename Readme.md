# Typescript Basics 😄

- You need to know javascript first.
- Learning basics of typescript which is superset of javascript.
- Static typing

## Getting Started 🚩

### Typescript setup for all beginners

- Install the typescript if not

```
npm i -g typescript
tsc -v (to check)
```

- Create folder from terminal on specific dir/drive

```
mkdir (your-folder-name)
```

- Create src folder and create index.ts in src folder.
- Create dist folder
- Now create tsconfig file

```
tsc --init
```

- Open tsconfig.json file and uncomment and find the following line and update it.

```
rootDir: "./src"
outDir: "./dist"
noEmitOnError: true
removeComments: true
```

- Now open the index.ts file and gets your hand dirty ⌨️

- We need to compile the typescript into javascript so write one line command on cli after every code on index.ts file:

```
tsc (typescript compiler)
```

- You can clone this repo by following steps but you need to install typescript first from above command.

```
git clone https://github.com/Mob-Anish/Basics-of-typescript.git
```
