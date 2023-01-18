const { invoke, readFile } = window.__TAURI__.tauri

import './override-fetch.js'

// fetch text file
fetch('file://tauri.conf.json')
	.then((res) => res.json())
	.then((data) => {
		console.log(data)
	})

// fetch binary file
fetch('file://terrain.jpg')
	.then((res) => res.arrayBuffer())
	.then((buffer) => {
		const url = URL.createObjectURL(new Blob([buffer]))
		const image = document.querySelector('img')
		image.src = url
	})
