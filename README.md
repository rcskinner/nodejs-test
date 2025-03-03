# NodeJS API 

Written to test out a log injection question / learn a little more about NodeJS 


### Running the API - Locally

```
//install the required packages 
node install 

// use the build step to bundle the API with ESBuild
node build

// start the API 
node start
```

### Running the API - Containerized
``` 
docker build -t $IMAGE_NAME . 
docker run -p 3000:3000 $IMAGE_NAME 
curl localhost:3000 or visit http://localhost:3000