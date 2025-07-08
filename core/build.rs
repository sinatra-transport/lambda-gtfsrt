use std::io::Result;

fn main() -> Result<()> {
    prost_build::compile_protos(&[
        "src/protos/gtfs-realtime.proto",
        "src/protos/output.proto",
        "src/protos/trip-index.proto",
    ], &["src/"])?;
    Ok(())
}