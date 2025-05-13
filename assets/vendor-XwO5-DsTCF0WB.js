function i(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function l(t,o){let e=t.length,f,n;for(;e;)n=o()*e--|0,f=t[e],t[e]=t[n],t[n]=f;return t}export{i as a,l as s};
