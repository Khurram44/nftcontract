(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{2025:function(e,n,t){"use strict";t.d(n,{A:function(){return r},k:function(){return s}});var r="0xe0A7e3b5A487b61D1a86Dce5047EBb8180870E50",s="0xd4abeD89Ef8C26b9C2b3BA80a2aa60e863cfDb0f"},5737:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(809),s=t.n(r),a=t(5893),c=t(2447),i=t(241),d=t(387),o=t(7616),l=t(7294),u=t(9669),x=t.n(u),h=t(2484),f=t.n(h),p=t(2025),m=t(6127),g=t(3334);function v(){var e=(0,l.useState)([]),n=e[0],t=e[1],r=(0,l.useState)([]),u=r[0],h=r[1],v=(0,l.useState)("not-loaded"),w=v[0],N=v[1];function b(){return(b=(0,c.Z)(s().mark((function e(){var n,r,a,l,u,v,w,b,j;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(f())({network:"mainnet",cacheProvider:!0}),e.next=3,n.connect();case 3:return r=e.sent,a=new i.Q(r),l=a.getSigner(),u=new d.CH(p.A,m.Mt,l),v=new d.CH(p.k,g.Mt,a),e.next=10,u.fetchItemsCreated();case 10:return w=e.sent,e.next=13,Promise.all(w.map(function(){var e=(0,c.Z)(s().mark((function e(n){var t,r,a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.tokenURI(n.tokenId);case 2:return t=e.sent,e.next=5,x().get(t);case 5:return r=e.sent,a=o.bM(n.price.toString(),"ether"),c={price:a,tokenId:n.tokenId.toNumber(),seller:n.seller,owner:n.owner,sold:n.sold,image:r.data.image},e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 13:b=e.sent,j=b.filter((function(e){return e.sold})),h(j),t(b),N("loaded");case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]),"loaded"!==w||n.length?(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("h2",{className:"text-2xl py-2",children:"Items Created"}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:n.map((function(e,n){return(0,a.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,a.jsx)("img",{src:e.image,className:"rounded"}),(0,a.jsx)("div",{className:"p-4 bg-black",children:(0,a.jsxs)("p",{className:"text-2xl font-bold text-white",children:["Price - ",e.price," Eth"]})})]},n)}))})]}),(0,a.jsx)("div",{className:"px-4",children:Boolean(u.length)&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-2xl py-2",children:"Items sold"}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:u.map((function(e,n){return(0,a.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,a.jsx)("img",{src:e.image,className:"rounded"}),(0,a.jsx)("div",{className:"p-4 bg-black",children:(0,a.jsxs)("p",{className:"text-2xl font-bold text-white",children:["Price - ",e.price," Eth"]})})]},n)}))})]})})]}):(0,a.jsx)("h1",{className:"py-10 px-20 text-3xl",children:"No assets created"})}},9123:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creator-dashboard",function(){return t(5737)}])}},function(e){e.O(0,[277,380,669,465,774,888,179],(function(){return n=9123,e(e.s=n);var n}));var n=e.O();_N_E=n}]);