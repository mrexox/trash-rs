#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

/// Move file or folder to trash.
#[napi]
pub fn trash(path: String) {
  trash::delete(path).unwrap()
}

/// Move all files and folders to trash.
#[napi]
pub fn trash_all(paths: Vec<String>) {
  trash::delete_all(paths).unwrap()
}
