(this.webpackJsonpmygg=this.webpackJsonpmygg||[]).push([[0],{19:function(e,c,t){},20:function(e,c,t){},21:function(e,c,t){},28:function(e,c,t){},29:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){},40:function(e,c,t){},41:function(e,c,t){},42:function(e,c,t){},43:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),n=t(22),i=t.n(n),l=(t(28),t(2)),r=t(3),d=t.p+"static/media/logo-emerson.b2aa0a9a.png",o=(t(29),t(0)),j=function(){return Object(o.jsxs)(l.a,{children:[Object(o.jsxs)("div",{className:"mygg-navbar hide",children:[Object(o.jsx)("div",{className:"mygg-nav-logo",children:Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)("img",{src:d,alt:"logo-mygg"})})}),Object(o.jsx)("div",{className:"mygg-nav-list",children:Object(o.jsxs)("ul",{className:"mygg-nav-items",children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",children:"Inicio"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",children:"Campeones"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",children:"Divisiones"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.b,{to:"/",children:"Servidor"})})]})})]}),Object(o.jsxs)("div",{className:"nav-bottom",children:[Object(o.jsx)(l.b,{to:"/",className:"nav-b-item",children:Object(o.jsx)("i",{className:"fas fa-home fa-2x"})}),Object(o.jsx)(l.b,{to:"/",className:"nav-b-item",children:Object(o.jsx)("i",{className:"fas fa-list fa-2x"})}),Object(o.jsx)(l.b,{to:"/",className:"nav-b-item",children:Object(o.jsx)("i",{className:"fas fa-trophy-alt fa-2x"})}),Object(o.jsx)(l.b,{to:"/",className:"nav-b-item",children:Object(o.jsx)("i",{className:"fas fa-server fa-2x"})})]})]})},m=(t(19),t(5)),b=t(12),h=t(9),u=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=Object(a.useState)(e),t=Object(m.a)(c,2),s=t[0],n=t[1];return[s,function(e){var c=e.target;n(Object(h.a)(Object(h.a)({},s),{},Object(b.a)({},c.name,c.value)))},function(){n(e)}]}({username:""}),c=Object(m.a)(e,2),t=c[0].username,s=c[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.trim().length<=3||window.location.assign("#/".concat(document.querySelector("#region").value,"/user/").concat(t))},className:"search-bar",children:[Object(o.jsx)("input",{type:"text",value:t,name:"username",onChange:s,placeholder:"Nombre de usuario"}),Object(o.jsxs)("div",{className:"region",children:[Object(o.jsxs)("p",{children:["Regi\xf3n:",Object(o.jsxs)("select",{name:"region",id:"region",children:[Object(o.jsx)("option",{value:"la1",children:"LAN"}),Object(o.jsx)("option",{value:"la2",children:"LAS"}),Object(o.jsx)("option",{value:"euw1",children:"EUW"}),Object(o.jsx)("option",{value:"br1",children:"BR"}),Object(o.jsx)("option",{value:"eun1",children:"EUNE"}),Object(o.jsx)("option",{value:"jp1",children:"JP"}),Object(o.jsx)("option",{value:"kr",children:"KR"}),Object(o.jsx)("option",{value:"na1",children:"NA"}),Object(o.jsx)("option",{value:"oc1",children:"OCE"}),Object(o.jsx)("option",{value:"ru",children:"RU"}),Object(o.jsx)("option",{value:"tr1",children:"TR"})]})]}),Object(o.jsx)("button",{type:"submit",className:"btn",children:"Buscar"})]})]})})},O=function(){return Object(o.jsx)("div",{className:"inicio-bg",children:Object(o.jsx)(u,{})})},x=function(e){var c=Object(a.useState)({data:null,loading:!0,error:null}),t=Object(m.a)(c,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){n({data:null,loading:!0,error:null}),fetch(e).then((function(e){return e.json()})).then((function(e){n({loading:!1,error:null,data:e})}))}),[e]),s},p=(t(36),t(37),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],c=Object(a.useState)({ranked:"Flex",leagueId:"",leaguePoints:"",losses:"",wins:"",tier:"",rank:"",winrate:""}),t=Object(m.a)(c,2),s=t[0],n=t[1],i=Object(a.useState)({ranked:"Solo",leagueId:"",leaguePoints:"",losses:"",wins:"",tier:"",rank:"",winrate:""}),l=Object(m.a)(i,2),r=l[0],d=l[1];return Object(a.useEffect)((function(){null!=e&&(null===e||void 0===e||e.map((function(e){if("RANKED_FLEX_SR"===e.queueType){var c=Math.trunc(e.wins/(e.losses+e.wins)*100);n(Object(h.a)(Object(h.a)({},s),{},{leagueId:e.leagueId,leaguePoints:e.leaguePoints,losses:e.losses,wins:e.wins,tier:e.tier,rank:e.rank,winrate:c}))}else{var t=Math.trunc(e.wins/(e.losses+e.wins)*100);d(Object(h.a)(Object(h.a)({},r),{},{leagueId:e.leagueId,leaguePoints:e.leaguePoints,losses:e.losses,wins:e.wins,tier:e.tier,rank:e.rank,winrate:t}))}return""})))}),[e]),{flex:s,solo:r}}),g=s.a.memo((function(e){var c=e.personalData,t=Object(r.f)().region,a=x("https://".concat(t,".api.riotgames.com/lol/league/v4/entries/by-summoner/").concat(c.id,"?api_key=").concat("RGAPI-16481dd3-a217-4a29-b7d3-90addc66da6b")).data,s=p(a),n=s.flex,i=s.solo;return Object(o.jsx)("div",{id:"perfilUsuario",children:Object(o.jsxs)("div",{className:"icono-datos",children:[Object(o.jsx)("img",{src:"http://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/".concat(c.profileIconId,".png"),alt:"profle-icon"}),Object(o.jsxs)("div",{className:"icono-datos-info",children:[Object(o.jsx)("h1",{children:c.name}),Object(o.jsxs)("h2",{children:["Nivel ",c.summonerLevel]}),Object(o.jsxs)("div",{className:"flex-ranked",children:[n.tier?Object(o.jsxs)("button",{className:"flex-solo-button flex",children:["Flexible: ",n.tier," ",n.rank]}):"",n.tier?Object(o.jsxs)("button",{className:"flex-solo-button-lp flex",children:[n.leaguePoints," lp"]}):""]}),Object(o.jsxs)("div",{className:"solo-ranked",children:[i.tier?Object(o.jsxs)("button",{className:"flex-solo-button solo",children:["SoloQ: ",i.tier," ",i.rank]}):"",i.tier?Object(o.jsxs)("button",{className:"flex-solo-button-lp solo",children:[i.leaguePoints," lp"]}):""]})]})]})})})),v=(t(38),function(){var e=Object(r.f)().user;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{id:"noUsuario",children:Object(o.jsxs)("div",{className:"noUsuario",children:[Object(o.jsx)("div",{className:"noUsuario-lol",children:Object(o.jsx)("h1",{children:"Usuario no encontrado!"})}),Object(o.jsxs)("h2",{children:["lo siento pero no hemos encontrado ning\xfan usuario con ",e]}),Object(o.jsx)(l.a,{children:Object(o.jsx)(l.b,{to:"/",children:"Ve a la p\xe1gina principal"})})]})})})}),f=(t(20),t.p+"static/media/Emblem_Iron.9c3d63ce.png"),N=t.p+"static/media/Emblem_Bronze.ad96bf19.png",I=t.p+"static/media/Emblem_Silver.ba092276.png",y=t.p+"static/media/Emblem_Gold.617f139e.png",k=t.p+"static/media/Emblem_Platinum.26c61fd5.png",w=t.p+"static/media/Emblem_Diamond.8249cef1.png",E=t.p+"static/media/Emblem_Master.6cebbe60.png",R=t.p+"static/media/Emblem_Grandmaster.9a64d726.png",S=t.p+"static/media/Emblem_Challenger.bcddbed6.png",A=function(e){var c=e.tier;return"IRON"===c?Object(o.jsx)("img",{src:f,alt:"iron-emblem"}):"BRONZE"===c?Object(o.jsx)("img",{src:N,alt:"bronze-emblem"}):"SILVER"===c?Object(o.jsx)("img",{src:I,alt:"silver-emblem"}):"GOLD"===c?Object(o.jsx)("img",{src:y,alt:"gold-emblem"}):"PLATINUM"===c?Object(o.jsx)("img",{src:k,alt:"platinum-emblem"}):"DIAMOND"===c?Object(o.jsx)("img",{src:w,alt:"diamond-emblem"}):"MASTER"===c?Object(o.jsx)("img",{src:E,alt:"master-emblem"}):"GRAND MASTER"===c?Object(o.jsx)("img",{src:R,alt:"grandMaster-emblem"}):"CHALLENGER"===c?Object(o.jsx)("img",{src:S,alt:"challenger-emblem"}):void 0},P=s.a.memo((function(e){var c=e.flex,t=e.solo;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"card-class",children:[Object(o.jsx)("div",{className:"card-title",children:Object(o.jsx)("p",{children:"Estad\xedsticas de flex"})}),c.tier?Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"card-body-image",children:Object(o.jsx)(A,{tier:c.tier})}),Object(o.jsxs)("div",{className:"card-body-info",children:[Object(o.jsxs)("p",{children:[c.tier," ",c.rank]}),Object(o.jsxs)("p",{children:[c.leaguePoints," lp"]}),Object(o.jsxs)("p",{children:[c.wins," victorias - ",c.losses," derrotas"]})]})]}):Object(o.jsx)("p",{style:{textAlign:"center"},children:"A\xfan no tiene una clasificaci\xf3n"})]}),Object(o.jsxs)("div",{className:"card-class",children:[Object(o.jsx)("div",{className:"card-title",children:Object(o.jsx)("p",{children:"Estad\xedsticas de SoloQ"})}),t.tier?Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"card-body-image",children:Object(o.jsx)(A,{tier:t.tier})}),Object(o.jsxs)("div",{className:"card-body-info",children:[Object(o.jsxs)("p",{children:[t.tier," ",t.rank]}),Object(o.jsxs)("p",{children:[t.leaguePoints," lp"]}),Object(o.jsxs)("p",{children:[t.wins," victorias - ",t.losses," derrotas"]})]})]}):Object(o.jsx)("p",{style:{textAlign:"center"},children:"A\xfan no tiene una clasificaci\xf3n"})]})]})})),_=t(17),D=(t(39),t(40),function(e){var c=e.flex,t=e.solo;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"porcentaje",children:[c.tier?Object(o.jsxs)("div",{className:"porcentaje-ranked mr",children:[Object(o.jsx)("div",{className:"circulo-porcentaje",children:Object(o.jsx)(_.a,{value:c.winrate,children:Object(o.jsxs)("div",{className:"barra-texto",children:[Object(o.jsxs)("p",{children:[c.winrate,"%"]}),Object(o.jsx)("p",{children:"Win Rate"})]})})}),Object(o.jsx)("h3",{children:"Flexible"})]}):"",t.tier?Object(o.jsxs)("div",{className:"porcentaje-ranked",children:[Object(o.jsx)("div",{className:"circulo-porcentaje",children:Object(o.jsx)(_.a,{value:t.winrate,children:Object(o.jsxs)("div",{className:"barra-texto",children:[Object(o.jsxs)("p",{children:[t.winrate,"%"]}),Object(o.jsx)("p",{children:"Win Rate"})]})})}),Object(o.jsx)("h3",{children:"SoloQ"})]}):""]}),Object(o.jsx)("hr",{})]})}),M=(t(41),s.a.memo((function(e){var c=e.championId,t=e.spell1,a=e.spell2,s=e.summId,n=e.name,i=e.bannedChampions,l=e.idBan,d=Object(r.f)().region,j=x("https://ddragon.leagueoflegends.com/cdn/11.16.1/data/es_MX/champion.json").data,m=x("https://ddragon.leagueoflegends.com/cdn/11.16.1/data/es_MX/summoner.json").data,b=x("https://".concat(d,".api.riotgames.com/lol/league/v4/entries/by-summoner/").concat(s,"?api_key=").concat("RGAPI-16481dd3-a217-4a29-b7d3-90addc66da6b")).data,h=p(b),u=h.flex,O=h.solo,g=function(e){var c=(!!m&&m).data;for(var t in c)if(c[t].key==e)return Object(o.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/".concat(c[t].image.full),alt:""})};return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsxs)("div",{className:"c-p",children:[Object(o.jsxs)("div",{className:"c",children:[Object(o.jsx)("div",{className:"c-icon",children:function(){var e=(!!j&&j).data;for(var t in e)if(e[t].key==c)return Object(o.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/".concat(e[t].image.full),alt:""})}()}),Object(o.jsxs)("div",{className:"p-spell",children:[g(t),g(a)]})]}),Object(o.jsx)("div",{className:"p",children:n})]})}),Object(o.jsx)("td",{children:O.tier?Object(o.jsxs)("p",{title:"SoloQ",children:[O.tier," ",O.rank]}):u.tier?Object(o.jsxs)("p",{title:"Flexible",children:[u.tier," ",u.rank]}):Object(o.jsx)("p",{children:"Sin clasificaci\xf3n"})}),Object(o.jsx)("td",{children:O.winrate?Object(o.jsxs)("p",{title:"Win rate SoloQ",children:[O.winrate,"%"]}):u.tier?Object(o.jsxs)("p",{title:"Win rate Flexible",children:[u.winrate,"%"]}):void 0}),Object(o.jsx)("td",{children:function(){var e=(!!j&&j).data;for(var c in e)if(e[c].key==i[l].championId)return Object(o.jsx)("img",{className:"img-ban",src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/".concat(e[c].image.full),alt:""})}()})]})}))),L=(t(42),s.a.memo((function(e){var c=e.personalData,t=Object(r.f)().region,a=x("https://".concat(t,".api.riotgames.com/lol/spectator/v4/active-games/by-summoner/").concat(c.id,"?api_key=").concat("RGAPI-16481dd3-a217-4a29-b7d3-90addc66da6b")).data,s=!!a&&a,n=s.status,i=s.bannedChampions,l=s.participants;return Object(o.jsx)(o.Fragment,{children:n?"":Object(o.jsxs)("div",{className:"active-game",children:[Object(o.jsx)("div",{className:"active-title",children:Object(o.jsx)("h1",{children:"Partida en vivo"})}),Object(o.jsx)("div",{className:"active-body",children:Object(o.jsxs)("div",{className:"card-active",children:[Object(o.jsx)("div",{className:"card-active-team",children:Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Equipo Azul"}),Object(o.jsx)("th",{scope:"col",children:"Liga"}),Object(o.jsx)("th",{scope:"col",children:"Win ratio"}),Object(o.jsx)("th",{scope:"col",children:"Ban"})]})}),Object(o.jsx)("tbody",{children:null===l||void 0===l?void 0:l.map((function(e,c){return 100===e.teamId?Object(o.jsx)(M,{championId:e.championId,profileIcon:e.profileIconId,spell1:e.spell1Id,spell2:e.spell2Id,summId:e.summonerId,name:e.summonerName,bannedChampions:i,idBan:c},e.summonerId):""}))})]})}),Object(o.jsx)("div",{className:"card-active-team",children:Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Equipo Rojo"}),Object(o.jsx)("th",{scope:"col",children:"Liga"}),Object(o.jsx)("th",{scope:"col",children:"Win ratio"}),Object(o.jsx)("th",{scope:"col",children:"Ban"})]})}),Object(o.jsx)("tbody",{children:null===l||void 0===l?void 0:l.map((function(e,c){return 200===e.teamId?Object(o.jsx)(M,{championId:e.championId,profileIcon:e.profileIconId,spell1:e.spell1Id,spell2:e.spell2Id,summId:e.summonerId,name:e.summonerName,bannedChampions:i,idBan:c},e.summonerId):""}))})]})})]})})]})})}))),F=(t(21),s.a.memo((function(e){var c=e.champion,t=e.summoner;return Object(o.jsxs)("div",{className:"player-img",children:[Object(o.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/".concat(c,".png"),alt:""}),Object(o.jsx)("p",{children:t})]})}))),G=s.a.memo((function(e){var c=e.idGame,t=e.personalData,s=e.reg,n=Object(a.useState)({championName:"",assists:"",deaths:"",kills:"",lane:"",champLevel:"",item0:"",item1:"",item2:"",item3:"",item4:"",item5:"",item6:"",summoner1Id:"",summoner2Id:"",neutralMinionsKilled:"",win:""}),i=Object(m.a)(n,2),l=i[0],r=i[1],d=x("https://".concat(s,".api.riotgames.com/lol/match/v5/matches/").concat(c,"?api_key=").concat("RGAPI-16481dd3-a217-4a29-b7d3-90addc66da6b")).data,j=x("https://ddragon.leagueoflegends.com/cdn/11.16.1/data/es_MX/summoner.json").data,b=(!!d&&d).info,h=!!b&&b,u=h.gameDuration,O=h.gameMode,p=h.participants;Object(a.useEffect)((function(){g()}),[b]);var g=function(){null===p||void 0===p||p.map((function(e){return t.name===e.summonerName&&r({championName:e.championName,assists:e.assists,deaths:e.deaths,kills:e.kills,lane:e.lane,champLevel:e.champLevel,item0:e.item0,item1:e.item1,item2:e.item2,item3:e.item3,item4:e.item4,item5:e.item5,item6:e.item6,summoner1Id:e.summoner1Id,summoner2Id:e.summoner2Id,neutralMinionsKilled:e.neutralMinionsKilled,win:e.win}),""}))},v=function(e){var c=(!!j&&j).data;for(var t in c)if(c[t].key==e)return Object(o.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/spell/".concat(c[t].image.full),alt:""})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"historial-title",children:Object(o.jsxs)("p",{children:[O," ",(u/6e4).toFixed()," Minutos: ",l.win?Object(o.jsx)("span",{children:"Victoria"}):Object(o.jsx)("span",{children:"Derrota"})]})}),Object(o.jsxs)("div",{className:"historial-card",children:[Object(o.jsxs)("div",{className:"rs-ckdaline",children:[Object(o.jsxs)("div",{className:"card-body-cSmm",children:[Object(o.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/".concat(l.championName,".png"),alt:"",className:"c-img"}),Object(o.jsxs)("div",{className:"body-smm",children:[v(l.summoner1Id),v(l.summoner2Id)]})]}),Object(o.jsxs)("div",{className:"card-body-kda",children:[Object(o.jsxs)("p",{className:"kda",children:[l.kills," / ",Object(o.jsx)("span",{children:l.deaths})," / ",l.assists]}),Object(o.jsxs)("p",{className:"kda-p",children:[(l.kills+l.assists)/l.deaths," KDA"]})]}),Object(o.jsxs)("div",{className:"card-body-line",children:[Object(o.jsx)("p",{className:"rol",children:l.lane}),Object(o.jsxs)("p",{children:["lv ",l.champLevel]}),Object(o.jsxs)("p",{children:[l.neutralMinionsKilled," cs"]})]})]}),Object(o.jsxs)("div",{className:"rs-ip",children:[Object(o.jsxs)("div",{className:"card-body-items",children:[Object(o.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/".concat(l.item0,".png"),alt:""}),Object(o.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/".concat(l.item1,".png"),alt:""}),Object(o.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/".concat(l.item2,".png"),alt:""}),Object(o.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/".concat(l.item3,".png"),alt:""}),Object(o.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/".concat(l.item4,".png"),alt:""}),Object(o.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/".concat(l.item5,".png"),alt:""}),Object(o.jsx)("img",{src:"https://ddragon.leagueoflegends.com/cdn/11.16.1/img/item/".concat(l.item6,".png"),alt:""})]}),Object(o.jsxs)("div",{className:"card-body-players",children:[Object(o.jsx)("div",{className:"player-team m",children:null===p||void 0===p?void 0:p.map((function(e,c){return 100===e.teamId?Object(o.jsx)(F,{champion:e.championName,summoner:e.summonerName},c):""}))}),Object(o.jsx)("div",{className:"player-team",children:null===p||void 0===p?void 0:p.map((function(e,c){return 200===e.teamId?Object(o.jsx)(F,{champion:e.championName,summoner:e.summonerName},c):""}))})]})]})]})]})})),B=s.a.memo((function(e){var c=e.personalData,t=Object(r.f)().region,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"americas",c=Object(a.useState)(),t=Object(m.a)(c,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){n("la1"===e||"la2"===e||"na1"===e||"br1"===e?"americas":"euw1"===e||"eun1"===e||"tr1"===e||"ru"===e?"europe":"jp1"===e||"kr"===e||"oc1"===e?"asia":"americas")}),[e]),s}(t),n=x("https://".concat(t,".api.riotgames.com/lol/league/v4/entries/by-summoner/").concat(c.id,"?api_key=").concat("RGAPI-16481dd3-a217-4a29-b7d3-90addc66da6b")).data,i=p(n),l=i.flex,d=i.solo,j=x("https://".concat(s,".api.riotgames.com/lol/match/v5/matches/by-puuid/").concat(c.puuid,"/ids?start=0&count=10&api_key=").concat("RGAPI-16481dd3-a217-4a29-b7d3-90addc66da6b")).data;return Object(o.jsxs)("div",{id:"infoUsuario",children:[Object(o.jsxs)("div",{className:"datos-clasificatoria",children:[Object(o.jsx)(D,{flex:l,solo:d}),Object(o.jsx)(P,{flex:l,solo:d})]}),Object(o.jsxs)("div",{className:"datos-historial",children:[Object(o.jsx)(L,{personalData:c}),Object(o.jsx)("h1",{className:"historial-h1",children:"Historial"}),null===j||void 0===j?void 0:j.map((function(e,t){return Object(o.jsx)("div",{className:"historial-game",children:Object(o.jsx)(G,{personalData:c,idGame:e,reg:s})},t)}))]})]})})),U=function(){var e=Object(r.f)(),c=e.user,t=e.region,s="https://".concat(t,".api.riotgames.com/lol/summoner/v4/summoners/by-name/").concat(c,"?api_key=").concat("RGAPI-16481dd3-a217-4a29-b7d3-90addc66da6b");Object(a.useEffect)((function(){}),[s]);var n=x(s),i=n.loading,l=n.data;return Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:i?Object(o.jsx)("div",{className:"lds-hourglass text-center"}):l.status?Object(o.jsx)("div",{children:Object(o.jsx)(v,{})}):Object(o.jsxs)("div",{className:"user-perfil-gg",children:[Object(o.jsx)(g,{personalData:l}),Object(o.jsx)(B,{personalData:l})]})})})};var C=function(){var e=x("http://190.24.11.58:8090/lacolina/api/fallecidos.php?nombre=emerson").data;return console.log(e),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(l.a,{children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/:region/user/:user",children:Object(o.jsx)(U,{})}),Object(o.jsx)(r.a,{path:"/",children:Object(o.jsx)(O,{})})]})})]})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.34a82d14.chunk.js.map