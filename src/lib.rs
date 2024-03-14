#![deny(clippy::all)]

use napi::bindgen_prelude::*;
use std::path::Path;

#[macro_use]
extern crate napi_derive;

/// Move file or folder to trash.
#[napi]
pub fn trash(path: String) -> Result<()> {
  if !Path::new(&path).exists() {
    return Ok(());
  }

  match trash::delete(path) {
    Ok(_) => Ok(()),
    Err(e) => Err(Error::new(
      Status::GenericFailure,
      format!("error from Rust lib: {}", e),
    )),
  }
}

/// Move all files and folders to trash.
#[napi]
pub fn trash_all(paths: Vec<String>) -> Result<()> {
  let result = trash::delete_all(
    paths
      .iter()
      .filter(|path| Path::new(path).exists())
      .collect::<Vec<&String>>(),
  );

  match result {
    Ok(_) => Ok(()),
    Err(e) => Err(Error::new(
      Status::GenericFailure,
      format!("error from Rust lib: {}", e),
    )),
  }
}
