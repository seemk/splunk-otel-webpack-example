## Running

```
npm install
npm run build
cd docker
docker -f otel.yml up
```

```
OTEL_SERVICE_NAME=myservice node -r @splunk/otel/instrument dist/main.js
```

Make a request to `localhost:3000`, then visit `localhost:9411` to see the trace. Both redis and mongodb should be contained
in the trace.
