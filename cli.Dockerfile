ARG FROM_VERSION=1.88.0-slim-bullseye
FROM rust:${FROM_VERSION}

RUN apt-get update && apt-get install -yqq libssl-dev pkg-config protobuf-compiler

WORKDIR /usr/src/gtfsrt-processor
COPY . .

RUN cargo install --path ./cli --profile release

RUN apt-get remove -yqq protobuf-compiler

RUN rm -rf /usr/src/gtfsrt-processor

CMD ["gtfsrt-processor-cli"]