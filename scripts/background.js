"use strict";!function(e){e.storage.local.set({IdExtension:e.runtime.id}),e.runtime.onMessage.addListener(function(t){"doQuiz"==t.name&&fetch("../file.txt").then(e=>e.text()).then(function(n){var i=n.split("\r\n");for(let n=0;n<i.length;n+=2)if(i[n].includes(t.id)>0){e.tabs.query({active:!0,currentWindow:!0},function(s){e.tabs.sendMessage(s[0].id,{name:t.next,answer:i[n+1],id:t.id})});break}})})}(chrome);