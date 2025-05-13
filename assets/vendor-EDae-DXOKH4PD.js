function u(i){var e=0,n=i.children,t=n&&n.length;if(!t)e=1;else for(;--t>=0;)e+=n[t].value;i.value=e}function c(){return this.eachAfter(u)}export{c as n};
