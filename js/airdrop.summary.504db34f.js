(self["webpackChunktornado_test"]=self["webpackChunktornado_test"]||[]).push([[378],{9860:(e,t,n)=>{"use strict";n.d(t,{ZG:()=>Z,Zz:()=>j,iO:()=>N,LS:()=>Q,wl:()=>U,nl:()=>z,G$:()=>C});var a=n(3914),s=n(8069),o=n(2312),i=n(3729),r=n(7453),l=n(7644),u=n(1942),p=n(9813),d=n(6603),c=n.n(d),y=n(1492),m=n.n(y),f=n(4244),b=n(2674),v=function(e,t,n,a){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{l(a.next(e))}catch(t){o(t)}}function r(e){try{l(a["throw"](e))}catch(t){o(t)}}function l(e){e.done?n(e.value):s(e.value).then(i,r)}l((a=a.apply(e,t||[])).next())}))};const w="https://json.extendsclass.com/bin",g={"api-key":"2a4e00f1-83f1-11ec-b95c-0242ac110002"},h=e=>e.ok?e.json():Promise.reject(e),M=e=>v(void 0,void 0,void 0,(function*(){const t=JSON.stringify(e);return fetch(w,{method:"POST",body:t,headers:g}).then((e=>h(e)))})),k=e=>v(void 0,void 0,void 0,(function*(){const t=`${w}/${e}`;return fetch(t,{method:"GET",headers:g}).then((e=>h(e)))}));var x=n(5527);const _=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"DECIMALS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"value","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]');class A{constructor(e,t){const n=new x.CH(e,_,t);this.methods=n}}const T=JSON.parse('[{"constant":false,"inputs":[{"name":"_root","type":"bytes32"},{"name":"_tokenAddress","type":"address"},{"name":"_total","type":"uint256"},{"name":"_ipfs","type":"string"}],"name":"createNewAirdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_ipfs","type":"string"}],"name":"cancelAirdrop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"proof","type":"bytes32[]"},{"name":"root","type":"bytes32"},{"name":"leaf","type":"bytes32"}],"name":"verify","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"start","type":"uint256[]"},{"name":"length","type":"uint256[]"},{"name":"proofs","type":"bytes32[]"},{"name":"root","type":"bytes32"},{"name":"leafs","type":"bytes32[]"}],"name":"verifyProofs","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"proof","type":"bytes32[]"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_ipfs","type":"string"}],"name":"drop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"airdrops","outputs":[{"name":"owner","type":"address"},{"name":"root","type":"bytes32"},{"name":"tokenAddress","type":"address"},{"name":"total","type":"uint256"},{"name":"claimed","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"ipfs","type":"string"},{"indexed":true,"name":"rec","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Drop","type":"event"}]');class S{constructor(e,t){const n=new x.CH(e,T,t);this.methods=n}}var P=function(e,t,n,a){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{l(a.next(e))}catch(t){o(t)}}function r(e){try{l(a["throw"](e))}catch(t){o(t)}}function l(e){e.done?n(e.value):s(e.value).then(i,r)}l((a=a.apply(e,t||[])).next())}))};window.Buffer=f.Buffer;const z=e=>e.replace(/\s+/g," ").trim().split(" ").map((e=>e.split(","))).sort(((e,t)=>+e[0]-+t[0])),q=e=>s.UJ(e),L=e=>e.every((([e,t])=>e&&t&&s.UJ(e)&&Number(t).toString()===t)),O=e=>c()(e,"0").length===e.length,C=e=>q(e.tokenAddress)?L(e.listTransactions)?!!O(e.listTransactions)||"Все адреса должны быть уникальны":"Адрес или количество токенов невалидно":"Адрес токена невалидный",U=(e,t,n)=>P(void 0,void 0,void 0,(function*(){const s=new A(n.tokenAddress,t),[i,r="",l=18,u="0",p="0"]=yield Promise.all([s.methods.name(),s.methods.symbol(),s.methods.decimals(),s.methods.allowance(e,"0x45df93713f04972e6419d31780a85b0fff56604c"),s.methods.balanceOf(e)]).catch((()=>[])),d=n.listTransactions.reduce(((e,[,t])=>e.add(o.vz(t,l))),a.O$.from(0)).toString(),c=o.bM(d,l).toString();return{name:i,symbol:r,address:s.methods.address,decimals:l,total:c,totalUnits:d,allowance:o.bM(u,l),balance:o.bM(p,l),isEnoughBalance:a.O$.from(p).gte(d),isNeedApprove:a.O$.from(u).lt(d)}})),Z=(e,t,n)=>P(void 0,void 0,void 0,(function*(){const a=new u.Q(t),s=new A(n.tokenAddress,a),i=a.getSigner(0),r=s.methods.connect(i),l=e?o.vz(e,yield s.methods.decimals()):p.Bz,d=yield r.approve("0x45df93713f04972e6419d31780a85b0fff56604c",l);return d})),$=([e,t],n)=>{const a=o.vz(t,n),s=i.$.encode(["address","uint256"],[e,a]);return s},H=(e,t)=>{const n=e.map((e=>$(e,t))),a=new b.MerkleTree(n,m(),{hashLeaves:!0,sortPairs:!0});return a},N=(e,t,n)=>P(void 0,void 0,void 0,(function*(){const a=H(e.listTransactions,t.decimals),s=yield M(e),o=new u.Q(n),i=new S("0x45df93713f04972e6419d31780a85b0fff56604c",o),r=o.getSigner(0),l=i.methods.connect(r),p=[a.getHexRoot(),t.address,t.totalUnits,s.id],d=yield l.createNewAirdrop(...p);return Object.assign(Object.assign({},s),{tx:d})})),Q=(e,t)=>P(void 0,void 0,void 0,(function*(){const n=new S("0x45df93713f04972e6419d31780a85b0fff56604c",t),a=r.w(l.Y0(e)),[s,i]=yield Promise.all([k(e),n.methods.airdrops(a)]),u=new A(i.tokenAddress,t),[p,d,c]=yield Promise.all([u.methods.name(),u.methods.symbol(),u.methods.decimals()]);return{data:s,airdrops:{claimed:o.bM(i.claimed,c),owner:i.owner,tokenAddress:i.tokenAddress,total:o.bM(i.total,c),name:p,symbol:d,decimals:c}}})),j=(e,t,n,a,s,i)=>P(void 0,void 0,void 0,(function*(){const r=new u.Q(i),l=new S("0x45df93713f04972e6419d31780a85b0fff56604c",r),p=r.getSigner(0),d=l.methods.connect(p),c=H(s.listTransactions,a),y=m()($([t,n],a)),f=c.getHexProof(y),b=c.verify(f,y,c.getRoot());console.assert(b,"proof is invalid ((");const v=[f,t,o.vz(n,a).toString(),e],w=yield d.drop(...v);return w}))},366:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var a=n(3673),s=n(2323);const o={key:0,class:"q-pa-lg"},i={key:1},r={key:0,class:"q-mb-md"},l=["href","textContent"],u=(0,a._)("br",null,null,-1),p=(0,a._)("br",null,null,-1),d=(0,a._)("br",null,null,-1),c=(0,a._)("br",null,null,-1),y=(0,a.Uk)("Token address: "),m=["href","textContent"];function f(e,t,n,f,b,v){const w=(0,a.up)("q-banner"),g=(0,a.up)("q-btn"),h=(0,a.up)("AirdropViewAddressTable"),M=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(M,{padding:"",class:"page-airdrop-summary"},{default:(0,a.w5)((()=>[e.errorMessage?((0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(w,{class:"bg-grey-3 text-red"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,s.zw)(e.errorMessage),1)])),_:1}),(0,a.Wm)(g,{to:e.backLocation,color:"primary",outline:"",class:"q-mt-md",label:"Назад"},null,8,["to"])])):((0,a.wg)(),(0,a.iD)("div",i,[e.airdrops?((0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("a",{target:"_blank_",href:`https://goerli.etherscan.io/address/${e.airdrops.owner}`,textContent:(0,s.zw)(e.airdrops.owner)},null,8,l),u,(0,a.Uk)("Claimed: "+(0,s.zw)(e.airdrops.claimed)+" "+(0,s.zw)(e.airdrops.symbol)+" ",1),p,(0,a.Uk)("Total: "+(0,s.zw)(e.airdrops.total)+" "+(0,s.zw)(e.airdrops.symbol)+" ",1),d,(0,a.Uk)("Token name: "+(0,s.zw)(e.airdrops.name)+" ",1),c,y,(0,a._)("a",{target:"_blank_",href:`https://goerli.etherscan.io/address/${e.airdrops.tokenAddress}`,textContent:(0,s.zw)(e.airdrops.tokenAddress)},null,8,m)])):(0,a.kq)("",!0),(0,a.Wm)(g,{outline:"",to:e.dropLocation,label:"Ссылка для получения вознаграждения пользователем",class:"q-mb-md"},null,8,["to"]),(0,a.Wm)(h,(0,a.dG)(e.data,{loading:e.isLoading,class:"page-airdrop-summary__table"}),null,16,["loading"])]))])),_:1})}var b=n(1959),v=n(4778),w=n(59),g=n(9860);const h=["href","textContent"];function M(e,t,n,o,i,r){const l=(0,a.up)("q-td"),u=(0,a.up)("q-table");return(0,a.wg)(),(0,a.j4)(u,{rows:e.listTransactions,columns:e.columns,"row-key":"0","rows-per-page-options":[0],loading:e.loading,class:"q-mb-md",flat:""},{"body-cell-address":(0,a.w5)((e=>[(0,a.Wm)(l,{props:e},{default:(0,a.w5)((()=>[(0,a._)("a",{href:`https://goerli.etherscan.io/address/${e.value}`,target:"__blank",textContent:(0,s.zw)(e.value)},null,8,h)])),_:2},1032,["props"])])),_:1},8,["rows","columns","loading"])}const k=[{field:"0",label:"Адрес",name:"address",align:"left",sortable:!0},{field:"1",label:"Количество",align:"right",sortable:!0}],x=(0,a.aZ)({name:"AirdropViewAddressTable",props:{listTransactions:{type:Array},loading:{type:Boolean,required:!0}},setup:()=>({columns:k})});var _=n(4260),A=n(9743),T=n(3884),S=n(7518),P=n.n(S);const z=(0,_.Z)(x,[["render",M]]),q=z;P()(x,"components",{QTable:A.Z,QTd:T.Z});var L=function(e,t,n,a){function s(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{l(a.next(e))}catch(t){o(t)}}function r(e){try{l(a["throw"](e))}catch(t){o(t)}}function l(e){e.done?n(e.value):s(e.value).then(i,r)}l((a=a.apply(e,t||[])).next())}))};const O={name:w.aL},C=(0,a.aZ)({name:"PageAirdropSummary",components:{AirdropViewAddressTable:q},props:{id:{type:String,required:!0}},setup:e=>{const t=(0,b.iH)(!0),n=(0,b.iH)(""),a=(0,b.iH)(),s=(0,b.iH)({tokenAddress:"",listTransactions:[]}),{webProvider:o}=(0,v.O)().state;return(()=>{L(void 0,void 0,void 0,(function*(){if(o.value){t.value=!0;try{const t=yield(0,g.LS)(e.id,o.value);s.value=t.data,a.value=t.airdrops}catch(i){n.value=`Рассылки с id="${e.id}" не существует`}t.value=!1}}))})(),{isLoading:t,errorMessage:n,data:s,airdrops:a,backLocation:O,dropLocation:{name:w.KU,params:{id:e.id}}}}});var U=n(4379),Z=n(5607),$=n(4607);const H=(0,_.Z)(C,[["render",f]]),N=H;P()(C,"components",{QPage:U.Z,QBanner:Z.Z,QBtn:$.Z})},3472:()=>{},2361:()=>{},4616:()=>{}}]);