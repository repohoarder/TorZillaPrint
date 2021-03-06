'use strict';

self.addEventListener("activate", function(e) {
	console.debug(performance.now(), "sw: service worker: activated")
})

addEventListener("message", function(e) {
	console.debug(performance.now(), "sw: service worker: received message from client, getting nav properties")
	let list = ['userAgent','appCodeName','appName','product','appVersion','platform'],
		res = []
	for (let i=0; i < list.length; i++) {
		let r = navigator[list[i]]
		if (r == "") {r = "undefined"}
		res.push((i).toString().padStart(2,"0")+" "+r)
	}
	console.debug(performance.now(), "sw: service worker: nav properties done, broadcasting")
	let channel = new BroadcastChannel("sw-ua");
	channel.postMessage({msg: res});
	console.debug(performance.now(), "sw: service worker: broadcast sent")
}, false)
