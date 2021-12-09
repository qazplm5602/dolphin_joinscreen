dependency "vrp"

ui_page "html/index.html"

client_scripts{ 
	"@vrp/client/Tunnel.lua",
	"@vrp/client/Proxy.lua",
    "client.lua",
}

files {
	"html/*"
}