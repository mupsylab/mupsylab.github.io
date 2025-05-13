function r(i){return this.eachAfter(function(e){for(var t=+i(e.data)||0,n=e.children,a=n&&n.length;--a>=0;)t+=n[a].value;e.value=t})}export{r as n};
