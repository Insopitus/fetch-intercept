#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::fs;

#[tauri::command]
fn fetch_local(url: &str) -> Result<Vec<u8>, String> {
    fs::read(url).map_err(|_| "Failed to fetch file".to_string())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![fetch_local])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
