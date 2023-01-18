const { invoke } = window.__TAURI__.tauri
const webfetch = window.fetch
const fetch = async (url) => {
	if (url.startsWith('file://')) {
		const res = await invoke('fetch_local', { url: url.slice(7) })
		const buffer = new Uint8Array(res).buffer
		const response = new Response(buffer)
		return response
	} else {
		return webfetch(url)
	}
}
window.fetch = fetch
