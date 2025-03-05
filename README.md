# NodeJS API 

Written to test out a log injection question / learn a little more about NodeJS 


### Running the API - Locally

```
//install the required packages 
npm install --only=production
npm install --save-dev esbuild

// use the build step to bundle the API with ESBuild
node build.mjs

// start the API 
node dist/bundle.js
```

### Running the API - Containerized
``` 
docker build -t $IMAGE_NAME . 
docker run -p 3000:3000 $IMAGE_NAME 
curl localhost:3000 or visit http://localhost:3000