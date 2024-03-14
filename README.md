# trash-rs

> This is simple wrapper for [trash](https://crates.io/crates/trash) Rust library.

## Installation

```bash
yarn add trash-rs

npm install trash-sh
```

## Usage

```typescript
import { trash, trashAll } from 'trash-rs';

trash('/home/user/file.txt');
trashAll(['/Users/user/file.txt', '/Users/user/folder/']);
```
