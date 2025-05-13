function s(r,l){for(var e=this,i=[e],t=[],h,n,o,p=-1;e=i.pop();)if(t.push(e),h=e.children)for(n=0,o=h.length;n<o;++n)i.push(h[n]);for(;e=t.pop();)r.call(l,e,++p,this);return this}export{s as n};
