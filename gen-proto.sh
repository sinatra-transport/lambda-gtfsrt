pbjs -t static-module gtfs-realtime.proto -o src/gtfs-rt.js -w es6
pbts src/gtfs-rt.js -o src/gtfs-rt.d.ts

pbjs -t static-module gtfs-api.proto -o src/gtfs-api.js -w es6
pbts src/gtfs-api.js -o src/gtfs-api.d.ts