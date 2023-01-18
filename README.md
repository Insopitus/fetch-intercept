A fetch api intercept demo to fetch local files for tauri.

## Description

This demo uses a "monkey patch" method to intercept the fetch api. If the requested url starts with `'file://'` it then invokes a tauri command to read the file and return it's content to the frontend. For consistency, all local file fetch request returns a buffer. You have to use `res.arrayBuffer()`, `res.text()` or `res.json()` to convert it like standard fetch API does.

## The drawback

Tauri uses serialization/deserialization to pass binary data to the frontend, which is terribly unefficient imo. The approach this demo uses may make it slower to read text based files, but reading binary files should be at the same speed as before. The tauri devs [said](https://github.com/tauri-apps/tauri/issues/1817#issuecomment-1018110141) this will be fixed in tauri v2, so, I'll leave it alone and wait for the next major version.
