pbjs -t static-module proto/gtfs-realtime.proto -o src/proto/gtfs-rt.js -w es6
pbts src/proto/gtfs-rt.js -o src/proto/gtfs-rt.d.ts

pbjs -t static-module proto/trip-index.proto -o src/proto/trip-index.js -w es6
pbts src/proto/trip-index.js -o src/proto/trip-index.d.ts

pbjs -t static-module proto/output.proto -o src/proto/output.js -w es6
pbts src/proto/output.js -o src/proto/output.d.ts