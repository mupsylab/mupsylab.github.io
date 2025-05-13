var u=800,i=16,s=Date.now;function o(a){var n=0,r=0;return function(){var t=s(),e=i-(t-r);if(r=t,e>0){if(++n>=u)return arguments[0]}else n=0;return a.apply(void 0,arguments)}}export{o as s};
