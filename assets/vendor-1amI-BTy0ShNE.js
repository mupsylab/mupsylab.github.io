function*o(){var e=this,t,n=[e],i,r,h;do for(t=n.reverse(),n=[];e=t.pop();)if(yield e,i=e.children)for(r=0,h=i.length;r<h;++r)n.push(i[r]);while(n.length)}export{o as n};
