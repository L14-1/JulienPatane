(function(e){function i(i){for(var a,u,o=i[0],r=i[1],l=i[2],m=0,d=[];m<o.length;m++)u=o[m],Object.prototype.hasOwnProperty.call(s,u)&&s[u]&&d.push(s[u][0]),s[u]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);c&&c(i);while(d.length)d.shift()();return n.push.apply(n,l||[]),t()}function t(){for(var e,i=0;i<n.length;i++){for(var t=n[i],a=!0,o=1;o<t.length;o++){var r=t[o];0!==s[r]&&(a=!1)}a&&(n.splice(i--,1),e=u(u.s=t[0]))}return e}var a={},s={app:0},n=[];function u(i){if(a[i])return a[i].exports;var t=a[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=a,u.d=function(e,i,t){u.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,i){if(1&i&&(e=u(e)),8&i)return e;if(4&i&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var a in e)u.d(t,a,function(i){return e[i]}.bind(null,a));return t},u.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(i,"a",i),i},u.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},u.p="/JulienPatane/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=i,o=o.slice();for(var l=0;l<o.length;l++)i(o[l]);var c=r;n.push([0,"chunk-vendors"]),t()})({0:function(e,i,t){e.exports=t("56d7")},"11e4":function(e,i,t){"use strict";t("5d37")},"1a86":function(e,i,t){e.exports=t.p+"img/Logo.462f0880.svg"},3053:function(e,i,t){"use strict";t("8d27")},4817:function(e,i,t){},"56d7":function(e,i,t){"use strict";t.r(i);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),s=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:t("1a86"),alt:"julien Patane Logo"}})]),e._m(0),a("div",{staticClass:"nav-menu",on:{click:e.menuSwitch}},[a("div",{class:["default"==e.menu?"nav-menu_hamburger":"nav-menu_hamburgerCross"]})])],1),"opened"==e.menu?a("div",{staticClass:"menu_links"},[a("ul",[a("li",{on:{click:e.servicesSwitch}},[a("router-link",{attrs:{to:"/prestations"}},[e._v("Prestations")]),a("i",{class:["default"==e.servicesMenu?"left":"down","arrow"]})],1),"opened"==e.servicesMenu?a("ul",{staticClass:"sublinks"},[a("li",{on:{click:e.closingNav}},[e._v("Coaching")]),a("li",{on:{click:e.closingNav}},[e._v("Cohérence cardiaque")]),a("li",{on:{click:e.closingNav}},[e._v("Réflexologie")]),a("li",{on:{click:e.closingNav}},[e._v("Kinésiologie")])]):e._e(),a("li",{on:{click:e.pricesSwitch}},[a("router-link",{attrs:{to:"/tarifs"}},[e._v("Tarifs")]),a("i",{class:["default"==e.pricesMenu?"left":"down","arrow"]})],1),"opened"==e.pricesMenu?a("ul",{staticClass:"sublinks"},[a("li",{on:{click:e.closingNav}},[a("router-link",{attrs:{to:"/tarifs"}},[e._v("Coaching")])],1),a("li",{on:{click:e.closingNav}},[e._v("Cohérence cardiaque")]),a("li",{on:{click:e.closingNav}},[e._v("Réflexologie")]),a("li",{on:{click:e.closingNav}},[e._v("Kinésiologie")])]):e._e(),a("li",{on:{click:e.closingNav}},[a("router-link",{attrs:{to:"/mon-parcours"}},[e._v("Mon parcours")])],1),a("li",{on:{click:e.closingNav}},[a("router-link",{attrs:{to:"/les-bienfaits-du-sport"}},[e._v("Les bienfaits du sport")])],1),a("li",{on:{click:e.closingNav}},[a("router-link",{attrs:{to:"/faq"}},[e._v("F.A.Q.")])],1)])]):e._e(),a("router-view"),a("FooterComponent")],1)},n=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"nav-title"},[t("p",[e._v("Julien Patane")]),t("p",[e._v("Sport & Bien-être")])])}],u=function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("div",{staticClass:"footer"},[a("img",{attrs:{src:t("1a86"),alt:"julien Patane Logo"}}),a("p",[e._v("Julien Patane")]),e._m(0),a("div",{staticClass:"social-logos"},[a("a",{attrs:{href:"https://facebook.com"}},[a("font-awesome-icon",{attrs:{icon:"fa-brands fa-facebook-square"}})],1),a("a",{attrs:{href:"https://instagram.com"}},[a("font-awesome-icon",{attrs:{icon:"fa-brands fa-instagram-square"}})],1)]),a("ul",[a("li",[e._v("Acompagnement sportif")]),a("li",[a("router-link",{attrs:{to:"/mon-parcours"}},[e._v("Mon parcours")])],1),a("li",[e._v("Cohérence cardiaque")]),a("li",[a("router-link",{attrs:{to:"/tarifs"}},[e._v("Tarifs")])],1),a("li",[e._v("Reflexologie")]),a("li",[a("router-link",{attrs:{to:"/faq"}},[e._v("F.A.Q.")])],1),a("li",[e._v("Kinésiologie")])])])},o=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("Sport & cohérence cardiaque"),t("br"),e._v("Réflexologie & Kinésiologie")])}],r={name:"FooterComponent"},l=r,c=(t("b376"),t("2877")),m=Object(c["a"])(l,u,o,!1,null,null,null),d=m.exports,p={data:function(){return{menu:"default",servicesMenu:"default",pricesMenu:"default"}},components:{FooterComponent:d},methods:{menuSwitch:function(){"opened"==this.menu?(this.menu="default",this.servicesMenu="default",this.pricesMenu="default"):"default"==this.menu&&(this.menu="opened")},servicesSwitch:function(){"default"==this.servicesMenu?(this.servicesMenu="opened",this.pricesMenu="default"):"opened"==this.servicesMenu&&(this.servicesMenu="default")},pricesSwitch:function(){"default"==this.pricesMenu?(this.pricesMenu="opened",this.servicesMenu="default"):"opened"==this.pricesMenu&&(this.pricesMenu="default")},closingNav:function(){this.menu="default",this.servicesMenu="default",this.pricesMenu="default"}}},v=p,f=(t("5c0b"),Object(c["a"])(v,s,n,!1,null,null,null)),q=f.exports,b=t("8c4f"),g=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"home"},[t("FooterComponent")],1)},_=[],h={name:"Home",components:{FooterComponent:d}},x=h,C=Object(c["a"])(x,g,_,!1,null,null,null),M=C.exports,k=function(){var e=this,i=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"prestations"},[t("h1",[e._v("Mes prestations")]),t("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod cupiditate laborum cum sequi soluta reiciendis odit inventore provident autem. Odio quasi culpa ab consectetur quisquam odit velit nisi in! Rerum qui deleniti veritatis enim, doloremque, error consectetur earum illum quisquam sit temporibus eaque ex quam voluptas fugit et in ullam atque quae culpa quibusdam excepturi molestiae velit facilis? Dignissimos? Vero saepe consectetur animi numquam reprehenderit beatae laboriosam aliquid ullam sit fugit, magnam quae, libero at consequatur illo nam fuga doloribus veniam obcaecati similique cupiditate modi quod expedita atque? Deserunt. Sit reprehenderit repellat ad quibusdam accusamus obcaecati necessitatibus autem dignissimos temporibus, fugit molestias delectus a voluptate expedita iure tempore perferendis, eligendi optio aperiam aliquid corrupti libero esse adipisci saepe! Odit. Alias dolore tenetur quia incidunt magni dolorem cum. Tempore quisquam fugit ipsa suscipit vel, possimus qui ratione magni sint porro nam laudantium harum tenetur nihil aliquid dolore pariatur nesciunt ducimus?")])])}],w={name:"Prestations"},y=w,E=Object(c["a"])(y,k,A,!1,null,null,null),O=E.exports,P=function(){var e=this,i=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"tarifs"},[t("h1",[e._v("Mes tarifs")]),t("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod cupiditate laborum cum sequi soluta reiciendis odit inventore provident autem. Odio quasi culpa ab consectetur quisquam odit velit nisi in! Rerum qui deleniti veritatis enim, doloremque, error consectetur earum illum quisquam sit temporibus eaque ex quam voluptas fugit et in ullam atque quae culpa quibusdam excepturi molestiae velit facilis? Dignissimos? Vero saepe consectetur animi numquam reprehenderit beatae laboriosam aliquid ullam sit fugit, magnam quae, libero at consequatur illo nam fuga doloribus veniam obcaecati similique cupiditate modi quod expedita atque? Deserunt. Sit reprehenderit repellat ad quibusdam accusamus obcaecati necessitatibus autem dignissimos temporibus, fugit molestias delectus a voluptate expedita iure tempore perferendis, eligendi optio aperiam aliquid corrupti libero esse adipisci saepe! Odit. Alias dolore tenetur quia incidunt magni dolorem cum. Tempore quisquam fugit ipsa suscipit vel, possimus qui ratione magni sint porro nam laudantium harum tenetur nihil aliquid dolore pariatur nesciunt ducimus?")]),t("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptates commodi iure deserunt vero esse. Magnam, similique molestias error voluptates cupiditate eum, tenetur maiores esse magni hic quasi dolorem tempora? Nesciunt eaque porro veritatis explicabo odit in blanditiis, ut enim eveniet, autem tenetur! Veritatis architecto reiciendis beatae eum culpa sequi accusantium. Exercitationem corrupti ipsum facere ut odit maiores modi vero. Illum deleniti possimus quas esse exercitationem! Velit voluptatibus animi amet eveniet dolor adipisci fugit sit quisquam officiis. Autem eius, molestias aliquam dignissimos provident quia, aperiam veniam magni nemo animi distinctio! Minus consectetur, quas dolorem dignissimos blanditiis fugiat sint veniam, molestias, voluptatum atque tempora error architecto animi aspernatur eaque numquam unde nemo? Hic quas odio, adipisci fugit amet cupiditate expedita et. Quam soluta nobis dicta esse doloribus! Tempore veniam facere iure nemo quas, vel ex blanditiis et temporibus maxime id ab qui ipsa aperiam, ut cumque nulla voluptates quidem fuga repellat! Incidunt id, aspernatur non quo sapiente deserunt et aliquid magni repudiandae qui consequatur dolores libero, porro aperiam nobis. Distinctio reprehenderit et numquam quisquam ex quaerat illo eaque temporibus itaque corrupti? Molestiae voluptas obcaecati officia, et, quis a praesentium quas, quam sapiente totam recusandae non eveniet ut corrupti? Eveniet, nobis. Aliquid, rerum ex veritatis ut doloremque architecto sapiente vel aperiam minima. Reprehenderit esse adipisci, quisquam provident minima quidem non, odit unde illo distinctio odio facere eum? Molestias ipsum, temporibus at quam accusamus tempore? Accusantium dolor nemo esse quas ratione aliquid vel. Autem dolor a molestias voluptas optio delectus modi voluptates nostrum vel earum magni maiores, hic accusantium, libero quibusdam nam consequuntur debitis! Fuga excepturi repellendus ab, nemo quos enim distinctio sit. Soluta dolorem iste provident atque alias vero nihil voluptates rem libero. Aliquid, rem, neque dicta quasi alias laudantium autem, quidem velit dignissimos facilis numquam unde. Eos in iure ex quibusdam. Aspernatur alias quaerat quo, mollitia delectus magni optio architecto dicta labore? Ducimus alias dolorem ea exercitationem illo molestias ex excepturi error quia dolor unde, quis ipsum omnis similique cupiditate laborum. Explicabo praesentium animi nobis nesciunt odit incidunt, unde cupiditate ipsum adipisci numquam, assumenda, vel eveniet velit ut distinctio dolores ad exercitationem quo nostrum itaque id eius! Voluptatibus vero aspernatur odio. Excepturi tempora magni laboriosam fugiat praesentium quidem eius id at. Unde iure assumenda quos obcaecati sequi ex exercitationem eaque cupiditate autem possimus? Optio unde itaque sed facilis delectus vitae aliquid! Tenetur, in? Est cum odio quos necessitatibus! Deserunt, sapiente delectus aliquid odio, quaerat reprehenderit dolorum, at omnis officia libero ut exercitationem vitae debitis vel facilis ab fugit nisi nostrum. Id? Velit rerum temporibus ab distinctio architecto, delectus qui reprehenderit incidunt assumenda labore neque et enim fugiat. Alias neque facilis modi nesciunt sapiente amet voluptatem. Minima, sint et. Recusandae, porro blanditiis. Sunt possimus at illum in, velit, excepturi incidunt minima similique dignissimos ab delectus perferendis! Voluptate, possimus veniam? Quisquam est, odit ex esse quo numquam provident beatae molestiae ea explicabo consectetur. Esse quis repellendus alias fuga earum, excepturi cum culpa vel unde numquam quod consequuntur omnis inventore soluta amet minima laudantium! Qui porro tempora exercitationem sint deserunt. Nesciunt voluptas vel hic! Voluptates iusto saepe quae autem modi dolores reprehenderit. Totam eligendi cumque provident impedit hic? Nesciunt veritatis obcaecati ut exercitationem repellat? Facilis eius repellendus fugit in doloremque qui consectetur, quo hic. Asperiores rem architecto doloribus et debitis, at tempore excepturi repudiandae, nulla, sed eos esse repellendus maxime mollitia veniam dolor omnis! Rerum possimus mollitia quaerat quas labore accusantium sapiente voluptatibus tenetur? Iure aspernatur dolor, fugit, cumque asperiores necessitatibus cupiditate dolorem nihil fugiat laboriosam, pariatur non voluptatum ex. Perspiciatis, ducimus! Iste cupiditate optio fugit eveniet atque excepturi eos quibusdam, sequi eaque itaque?")]),t("h2",{attrs:{id:"coaching"}},[e._v("coaching")])])}],S={name:"Tarifs"},$=S,N=Object(c["a"])($,P,j,!1,null,null,null),F=N.exports,L=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"parcours"},[t("h1",[e._v("Mon parcours")]),e._m(0),t("p",[e._v("Un parcours et une histoire qui ont démarré dans un club de basket en tant que salarié en 2010. Puis coordinateur d'équipe dans le milieu périscolaire, directeur d'accueil collectif de mineurs, intervenant sportif dans diverses associations pour les publics enfants et adultes, j'ai décidé de devenir micro entrepreneur en 2017.")]),e._m(1),e._m(2),t("p",[e._v("Grand passionné de voyages, véritable amoureux de l'Amérique latine, je me suis aperçu que prendre soin de soi est accessible partout et pour tous.")]),t("p",[e._v("C'est une philosophie de vie, ce sont des rituels à adopter au quotidien. Notre voyage intérieur est infini. A très bientôt.")]),t("p",{staticClass:"blueAccent"},[e._v("Julien Patane")]),t("div",{staticClass:"diplomes"},[t("h2",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-ribbon"}}),e._v("Mes diplômes")],1),e._m(3)]),t("div",{staticClass:"buttons"},[t("div",{staticClass:"button-nav"},[t("router-link",{attrs:{to:"/prestations"}},[e._v("Mes prestations")])],1),t("div",{staticClass:"button-nav"},[t("router-link",{attrs:{to:"/tarifs"}},[e._v("Mes tarifs")])],1)])])},T=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("Diplômé des métiers du sport et de l'animation, je suis "),t("i",{staticClass:"orangeAccent"},[e._v("éducateur coach sportif")]),e._v(" sur le bassin grenoblois depuis plusieurs années.")])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("p",[e._v("La petite aventure continue avec un virage complémentaire depuis février 2020. Un parcours de formation pour devenir "),t("i",{staticClass:"orangeAccent"},[e._v("praticien kinésiologue certifié")]),e._v(".")])},function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("div",{staticClass:"ju_pics"},[a("img",{attrs:{src:t("6d31"),alt:"Julien Patane, de dos, en tailleur sur une mer de sel"}})])},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ul",[t("li",[e._v("BP JEPS Mention Sports Collectifs et Activités Physiques Pour Tous")]),t("li",[e._v("Certifié en méthode Réflexologie Cranio sacrée - Ostéo Fluidique")]),t("li",[e._v("Certifié en méthode cohérence cardiaque")]),t("li",[e._v("Futur certifié en kinésiologie")])])}],D={name:"Parcours"},R=D,V=(t("3053"),Object(c["a"])(R,L,T,!1,null,null,null)),J=V.exports,Q=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"bienfaits"},[t("h1",[e._v("Les bienfaits du sport sur la santé")]),t("ul",[t("li",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-yin-yang"}}),t("i",{staticClass:"boldAccent"},[e._v("Un antistress de qualité :")]),t("br"),e._v("Conséquence des hormones, et de ce bien-être général, les niveaux de stress et d’anxiété diminuent également de manière significative avec la pratique d’une "),t("i",{staticClass:"orangeAccent"},[e._v("activité sportive")]),e._v(". Une meilleure oxygénation du cerveau améliorant nos capacités de réflexion ou mémoire et lutte contre les tensions nerveuses. En outre, il favorise un "),t("i",{staticClass:"orangeAccent"},[e._v("sommeil de qualité")]),e._v(", stimulant et régulant les hormones concernées")],1),t("li",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-comment-medical"}}),t("i",{staticClass:"boldAccent"},[e._v("Pour prévenir ou accompagner le cancer :")]),t("br"),e._v("De nombreuses études scientifiques ont révélé l’action préventive de l’activité sportive contre certains types de "),t("i",{staticClass:"orangeAccent"},[e._v("cancer")]),e._v(" Au-delà de l’aspect préventif, le sport permet également aux patients atteints de cancer de conserver une bonne condition physique. Notamment en ce qui concerne la masse musculaire. Cela peut jouer un "),t("i",{staticClass:"orangeAccent"},[e._v("rôle positif")]),e._v(" dans la résistance aux traitements et le processus de guérison.")],1),t("li",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-bone"}}),t("i",{staticClass:"boldAccent"},[e._v("Un renforcement de la structure osseuse :")]),t("br"),e._v("Ce n’est pas l’effet le plus connu du sport sur le corps, mais il s’agit pourtant de l’un de ses plus grands bienfaits. Bénéfique pour l’amélioration de votre "),t("i",{staticClass:"orangeAccent"},[e._v("densité osseuse")]),e._v(", celle-ci ne dépend donc pas uniquement de la quantité de calcium que vous ingérez, mais aussi du sport que vous pratiquez. Le mouvement est donc tout à fait indiqué pour limiter l’apparition chroniques de type "),t("i",{staticClass:"orangeAccent"},[e._v("lombalgies")]),e._v(", rhumatismes inflammatoires, ostéoporoses, ou encore arthroses.")],1),t("li",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart-pulse"}}),t("i",{staticClass:"boldAccent"},[e._v("Lutte contre les maladies cardiovasculaires :")]),t("br"),e._v("Une activité physique régulière améliore et régule le fonctionnement du système cardiaque, en diminuant les facteurs de "),t("i",{staticClass:"orangeAccent"},[e._v("risque cardiovasculaire")]),e._v(". En l’occurrence, il régule l’hypertension artérielle, le taux de sucre dans le sang lié aux problématiques dû au diabète, augmente le taux de bon cholestérol.")],1),t("li",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-user-doctor"}}),t("i",{staticClass:"boldAccent"},[e._v("Limiter les signes de vieillissement :")]),t("br"),e._v("Tout en contribuant à la diminution des blessures osseuses, maux de dos, douleurs articulaires, et autres maladies chroniques, améliorant ainsi la longévité. En effet, le sport permet de repousser "),t("i",{staticClass:"orangeAccent"},[e._v("la perte d’autonomie")]),e._v(" qui survient le plus souvent avec l’âge. Celle-ci est liée à notre mode de vie sédentarisé, et non pas seulement au vieillissement.")],1),t("li",[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-face-laugh-beam"}}),t("i",{staticClass:"boldAccent"},[e._v("Le plaisir d’être ensemble :")]),t("br"),e._v("De façon indirecte, le sport permet de renforcer les liens d’appartenance "),t("i",{staticClass:"orangeAccent"},[e._v("sociale")]),e._v(". Le sport réunit autour d’une même passion des individus différents. De quoi pouvoir tisser des liens relationnels forts, des valeurs d’amitié, de solidarité, de respect et de dépassement de soi. Faisons équipe ensemble !")],1)]),t("div",{staticClass:"buttons"},[t("div",{staticClass:"button-nav"},[t("router-link",{attrs:{to:"/prestations"}},[e._v("Mes prestations")])],1),t("div",{staticClass:"button-nav"},[t("router-link",{attrs:{to:"/tarifs"}},[e._v("Mes tarifs")])],1)])])},U=[],B={name:"Bienfaits"},I=B,K=(t("11e4"),Object(c["a"])(I,Q,U,!1,null,null,null)),H=K.exports,z=function(){var e=this,i=e.$createElement;e._self._c;return e._m(0)},G=[function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"faq"},[t("h1",[e._v("Foire aux questions")]),t("p",[e._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quod cupiditate laborum cum sequi soluta reiciendis odit inventore provident autem. Odio quasi culpa ab consectetur quisquam odit velit nisi in! Rerum qui deleniti veritatis enim, doloremque, error consectetur earum illum quisquam sit temporibus eaque ex quam voluptas fugit et in ullam atque quae culpa quibusdam excepturi molestiae velit facilis? Dignissimos? Vero saepe consectetur animi numquam reprehenderit beatae laboriosam aliquid ullam sit fugit, magnam quae, libero at consequatur illo nam fuga doloribus veniam obcaecati similique cupiditate modi quod expedita atque? Deserunt. Sit reprehenderit repellat ad quibusdam accusamus obcaecati necessitatibus autem dignissimos temporibus, fugit molestias delectus a voluptate expedita iure tempore perferendis, eligendi optio aperiam aliquid corrupti libero esse adipisci saepe! Odit. Alias dolore tenetur quia incidunt magni dolorem cum. Tempore quisquam fugit ipsa suscipit vel, possimus qui ratione magni sint porro nam laudantium harum tenetur nihil aliquid dolore pariatur nesciunt ducimus?")])])}],W={name:"Faq"},X=W,Y=Object(c["a"])(X,z,G,!1,null,null,null),Z=Y.exports;a["a"].use(b["a"]);var ee=[{path:"/",name:"Home",component:M},{path:"/prestations",name:"Prestations",component:O},{path:"/tarifs",name:"Tarifs",component:F},{path:"/mon-parcours",name:"Parcours",component:J},{path:"/les-bienfaits-du-sport",name:"Bienfaits",component:H},{path:"/faq",name:"Faq",component:Z}],ie=new b["a"]({routes:ee}),te=ie,ae=t("ecee"),se=t("c074"),ne=t("b702"),ue=t("f2d1"),oe=t("ad3d");ae["c"].add(se["a"],ne["a"],ue["a"]),a["a"].component("font-awesome-icon",oe["a"]),a["a"].config.productionTip=!1,new a["a"]({router:te,render:function(e){return e(q)}}).$mount("#app")},"5c0b":function(e,i,t){"use strict";t("9c0c")},"5d37":function(e,i,t){},"6d31":function(e,i,t){e.exports=t.p+"img/uuu.9c832032.jpg"},"8d27":function(e,i,t){},"9c0c":function(e,i,t){},b376:function(e,i,t){"use strict";t("4817")}});
//# sourceMappingURL=app.4cdc1a59.js.map