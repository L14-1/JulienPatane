(function(e){function t(t){for(var i,a,r=t[0],c=t[1],l=t[2],d=0,v=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&v.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],i=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var i={},n={app:0},o=[];function a(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=i,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/JulienPatane/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"11e4":function(e,t,s){"use strict";s("5d37")},"1a86":function(e,t,s){e.exports=s.p+"img/Logo.462f0880.svg"},"21bb":function(e,t,s){"use strict";s("2dad")},"2dad":function(e,t,s){},3053:function(e,t,s){"use strict";s("8d27")},"307a":function(e,t,s){"use strict";s("9d10")},"356a":function(e,t,s){},"3e17":function(e,t,s){e.exports=s.p+"img/Photo-profil-Julien.3cb13594.jpg"},4412:function(e,t,s){"use strict";s("356a")},4817:function(e,t,s){},"4b26":function(e,t,s){e.exports=s.p+"img/logo 3.30ed76cc.png"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"nav"}},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:s("1a86"),alt:"julien Patane Logo"}})]),e._m(0),i("div",{staticClass:"nav-menu",on:{click:e.menuSwitch}},[i("div",{class:["default"==e.menu?"nav-menu_hamburger":"nav-menu_hamburgerCross"]})])],1),"opened"==e.menu?i("div",{staticClass:"menu_links"},[i("ul",[i("li",{on:{click:e.servicesSwitch}},[e._v("Prestations"),i("i",{class:["default"==e.servicesMenu?"left":"down","arrow"]})]),"opened"==e.servicesMenu?i("ul",{staticClass:"sublinks"},[i("router-link",{attrs:{to:"/prestations"}},[i("li",{on:{click:e.closingNav}},[e._v("Coaching")])]),i("li",{on:{click:e.closingNav}},[e._v("Cohérence cardiaque")]),i("li",{on:{click:e.closingNav}},[e._v("Réflexologie")]),i("li",{on:{click:e.closingNav}},[e._v("Kinésiologie")])],1):e._e(),i("router-link",{attrs:{to:"/tarifs"}},[i("li",{on:{click:e.closingNav}},[e._v("Tarifs")])]),i("router-link",{attrs:{to:"/mon-parcours"}},[i("li",{on:{click:e.closingNav}},[e._v("Mon parcours")])]),i("router-link",{attrs:{to:"/les-bienfaits-du-sport"}},[i("li",{on:{click:e.closingNav}},[e._v("Les bienfaits du sport")])]),i("router-link",{attrs:{to:"/faq"}},[i("li",{on:{click:e.closingNav}},[e._v("F.A.Q.")])]),i("a",{attrs:{href:"mailto:someone@example.com"}},[i("li",{staticClass:"contact-me",on:{click:e.closingNav}},[e._v("Contactez-moi")])])],1)]):e._e(),i("router-view"),i("FooterComponent")],1)},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nav-title"},[s("p",[e._v("Julien Patane")]),s("p",[e._v("Sport & Bien-être")])])}],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"footer"},[i("img",{attrs:{src:s("1a86"),alt:"julien Patane Logo"}}),i("p",[e._v("Julien Patane")]),e._m(0),i("div",{staticClass:"social-logos"},[i("a",{attrs:{href:"https://facebook.com"}},[i("font-awesome-icon",{attrs:{icon:"fa-brands fa-facebook-square"}})],1),i("a",{attrs:{href:"https://instagram.com"}},[i("font-awesome-icon",{attrs:{icon:"fa-brands fa-instagram-square"}})],1)]),i("ul",[i("li",[e._v("Acompagnement sportif")]),i("li",[i("router-link",{attrs:{to:"/mon-parcours"}},[e._v("Mon parcours")])],1),i("li",[e._v("Cohérence cardiaque")]),i("li",[i("router-link",{attrs:{to:"/tarifs"}},[e._v("Tarifs")])],1),i("li",[e._v("Reflexologie")]),i("li",[i("router-link",{attrs:{to:"/faq"}},[e._v("F.A.Q.")])],1),i("li",[e._v("Kinésiologie")])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Sport & cohérence cardiaque"),s("br"),e._v("Réflexologie & Kinésiologie")])}],c={name:"FooterComponent"},l=c,u=(s("b376"),s("2877")),d=Object(u["a"])(l,a,r,!1,null,null,null),v=d.exports,p={data:function(){return{menu:"default",servicesMenu:"default",pricesMenu:"default"}},components:{FooterComponent:v},methods:{menuSwitch:function(){"opened"==this.menu?(this.menu="default",this.servicesMenu="default",this.pricesMenu="default"):"default"==this.menu&&(this.menu="opened")},servicesSwitch:function(){"default"==this.servicesMenu?this.servicesMenu="opened":this.servicesMenu="default"},closingNav:function(){this.menu="default",this.servicesMenu="default",this.pricesMenu="default"}}},f=p,m=(s("5c0b"),Object(u["a"])(f,n,o,!1,null,null,null)),_=m.exports,h=s("8c4f"),b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[e._m(0),e._m(1),e._m(2),s("h4",[e._v("Qui je suis")]),e._m(3),s("div",{staticClass:"button"},[s("router-link",{attrs:{to:"/mon-parcours"}},[e._v("Découvrez mon parcours")])],1),s("h4",[e._v("Mes prestations")]),s("h5",[e._v("Sport")]),s("div",{staticClass:"box",on:{click:e.individuelBoxSwitch}},[s("p",{staticClass:"the-title"},[e._v("Coaching individuel"),s("i",{class:[e.individuelBox?"leftArrow":"down","arrow"]})]),e.individuelBox?s("p",{staticClass:"the-text"},[e._v("1 à 2 personnes. Séance d’une heure personnalisée selon vos objectifs.")]):e._e(),e.individuelBox?s("div",{staticClass:"button"},[s("router-link",{attrs:{to:"/prestations"}},[e._v("En savoir plus")])],1):e._e()]),s("div",{staticClass:"box",on:{click:e.collectifBoxSwitch}},[s("p",{staticClass:"the-title"},[e._v("Coaching collectif"),s("i",{class:[e.collectifBox?"leftArrow":"down","arrow"]})]),e.collectifBox?s("p",{staticClass:"the-text"},[e._v("3 à 10 personnes. Reunissez vos forces et donnez le maximum de vous.")]):e._e(),e.collectifBox?s("div",{staticClass:"button"},[s("router-link",{attrs:{to:"/prestations"}},[e._v("En savoir plus")])],1):e._e()]),s("div",{staticClass:"box",on:{click:e.cardiaqueBoxSwitch}},[s("p",{staticClass:"the-title"},[e._v("Cohérence cardiaque"),s("i",{class:[e.cardiaqueBox?"leftArrow":"down","arrow"]})]),e.cardiaqueBox?s("p",{staticClass:"the-text"},[e._v("Apprenez à apaiser vos émotions et gérer votre stress.")]):e._e(),e.cardiaqueBox?s("div",{staticClass:"button"},[s("router-link",{attrs:{to:"/prestations"}},[e._v("En savoir plus")])],1):e._e()]),s("div",{staticClass:"button"},[s("router-link",{attrs:{to:"/les-bienfaits-du-sport"}},[e._v("Decouvrez les bienfaits"),s("br"),e._v("du sport sur la santé !")])],1),s("div",{staticClass:"break-line"}),s("h4",[e._v("Mes prestations")]),s("h5",[e._v("Bien-être")]),s("div",{staticClass:"box",on:{click:e.kinesiologieBoxSwitch}},[s("p",{staticClass:"the-title"},[e._v("Kinésiologie"),s("i",{class:[e.kinesiologieBox?"leftArrow":"down","arrow"]})]),e.kinesiologieBox?s("p",{staticClass:"the-text"},[e._v("Favorisez un état d’équilibre et de bien-être grâce à la kinésiologie.")]):e._e(),e.kinesiologieBox?s("div",{staticClass:"button"},[s("router-link",{attrs:{to:"/prestations"}},[e._v("En savoir plus")])],1):e._e()]),s("div",{staticClass:"box",on:{click:e.ReflexologieBoxSwitch}},[s("p",{staticClass:"the-title"},[e._v("Réflexologie"),s("i",{class:[e.ReflexologieBox?"leftArrow":"down","arrow"]})]),e.ReflexologieBox?s("p",{staticClass:"the-text"},[e._v("Douleurs chroniques, migraines, acouphènes, vertiges ? La reflexologie est faite pour vous.")]):e._e(),e.ReflexologieBox?s("div",{staticClass:"button"},[s("router-link",{attrs:{to:"/prestations"}},[e._v("En savoir plus")])],1):e._e()]),s("div",{staticClass:"button"},[s("router-link",{attrs:{to:"/les-bienfaits-du-sport"}},[e._v("Réflexologie, Kinésiologie"),s("br"),e._v("Pourquoi ? Pour qui ?")])],1),s("div",{staticClass:"break-line"}),s("h4",[e._v("Ils me font confiance")]),e._m(4)])},g=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"right"},[i("img",{staticClass:"ju_pic",attrs:{src:s("9014"),alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left"},[i("img",{staticClass:"ju_foot",attrs:{src:s("e58e"),alt:""}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title"},[s("div",{staticClass:"sport"},[s("h3",[e._v("SPORT &"),s("br"),e._v("COHERENCE CARDIAQUE")]),s("div",{staticClass:"infos"},[e._v("+ d'infos")])]),s("div",{staticClass:"kinesiologie"},[s("h3",[e._v("KINESIOLOGIE &"),s("br"),e._v("REFLEXOLOGIE")]),s("div",{staticClass:"infos"},[e._v("+ d'infos")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"qui-je-suis"},[i("img",{attrs:{src:s("3e17"),alt:""}}),i("p",[e._v("Micro entrepreneur dans le domaine du "),i("i",{staticClass:"orangeAccent"},[e._v("sport")]),e._v(" et "),i("i",{staticClass:"orangeAccent"},[e._v("des médecines douces")]),e._v(" Kinésiologie, Réflexologie et Educateur sportif de formation, j'accompagne les personnes dans la pratique d'une activité régulière pour favoriser l'équilibre du corps physique et mental.")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"confiance-pics"},[i("img",{attrs:{src:s("4b26"),alt:""}}),i("img",{attrs:{src:s("b2bf"),alt:""}}),i("img",{attrs:{src:s("cfdb"),alt:""}}),i("img",{attrs:{src:s("635b"),alt:""}})])}],C={name:"Home",data:function(){return{individuelBox:!1,collectifBox:!1,cardiaqueBox:!1,kinesiologieBox:!1,ReflexologieBox:!1}},methods:{individuelBoxSwitch:function(){1==this.individuelBox?this.individuelBox=!1:(this.individuelBox=!0,this.collectifBox=!1,this.cardiaqueBox=!1)},collectifBoxSwitch:function(){1==this.collectifBox?this.collectifBox=!1:(this.individuelBox=!1,this.collectifBox=!0,this.cardiaqueBox=!1)},cardiaqueBoxSwitch:function(){1==this.cardiaqueBox?this.cardiaqueBox=!1:(this.individuelBox=!1,this.collectifBox=!1,this.cardiaqueBox=!0)},kinesiologieBoxSwitch:function(){1==this.kinesiologieBox?this.kinesiologieBox=!1:(this.kinesiologieBox=!0,this.ReflexologieBox=!1)},ReflexologieBoxSwitch:function(){1==this.ReflexologieBox?this.ReflexologieBox=!1:(this.kinesiologieBox=!1,this.ReflexologieBox=!0)}}},x=C,q=(s("21bb"),Object(u["a"])(x,b,g,!1,null,null,null)),B=q.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"prestations"},[e._m(0),i("h1",[e._v("Mes prestations")]),i("div",{staticClass:"page-container"},[i("h3",[e._v("Accompagnement personnalisé")]),i("h4",[e._v("1 ou 2 personnes")]),e._m(1),i("div",{staticClass:"box",on:{click:e.firstBoxSwitch}},[i("p",{staticClass:"the-title"},[e._v("1. Respectez votre rythme !"),i("i",{class:[e.firstBox?"left":"down","arrow"]})]),e.firstBox?i("p",{staticClass:"the-text"},[e._v("Pour commencer, il convient de revenir sur la signification de « être à l’écoute de vos besoins »"),i("br"),e._v("C’est lors de notre première rencontre que nous échangeons sur vos problématiques et attentes. Cette séance « test » nous permet d’identifier vos capacités. C’est ensemble que nous pourrons construire pas à pas, par vos ressentis, la variabilité de l’intensité des efforts.")]):e._e()]),i("div",{staticClass:"box",on:{click:e.secondBoxSwitch}},[i("p",{staticClass:"the-title"},[e._v("2. Ritualiser, créer une routine !"),i("i",{class:[e.secondBox?"left":"down","arrow"]})]),e.secondBox?i("p",{staticClass:"the-text"},[e._v("Comme de nombreuses activités tel que la méditation, la cohérence cardiaque ou d’autres domaines, le sport nécessite d’être pratiqué de manière régulière. C’est lors de notre première séance que nous définissons ensemble la fréquence de nos rendez-vous."),i("br"),e._v("Grâce à la méthode d’intervalle / fractionné que je vous propose, vous pourrez rapidement intégrer ces séances dans votre semaine, de manière accompagnée ou en autonomie, seul ou à plusieurs !")]):e._e()]),i("div",{staticClass:"box",on:{click:e.thirdBoxSwitch}},[i("p",{staticClass:"the-title"},[e._v("3. La méthode intervalle training c’est quoi"),i("i",{class:[e.thirdBox?"left":"down","arrow"]})]),e.thirdBox?i("p",{staticClass:"the-text"},[e._v("Plus précisément appelé HIIT Training, cette méthode s’adapte partout et pour tous. "),i("br"),e._v("De courtes périodes d’exercices de haute intensité alterné avec des intervalles de mouvements plus lents. "),i("br"),i("br"),e._v("Très facile à mettre en place, ces séances durent entre 20 et 35 minutes. "),i("br"),i("br"),e._v("Les exercices s’effectuent au poids du corps et ne nécessite pas d’espace ou de matériels particulier. "),i("br"),i("br"),e._v("Avec ou sans pathologies, elle propose de nombreux bienfaits. ")]):e._e()]),i("div",{staticClass:"box",on:{click:e.fourthBoxSwitch}},[i("p",{staticClass:"the-title"},[e._v("4. Le mouvement pour tous"),i("i",{class:[e.fourthBox?"left":"down","arrow"]})]),e.fourthBox?i("p",{staticClass:"the-text"},[e._v("Vous êtes une personne active, vous avez dû ralentir la pratique sportive à la suite d’une blessure, une grossesse, une maladie, une pathologie et vous souhaitez être accompagné dans la reprise d’une activité physique et des mouvements adaptés. Le cœur de mes séances se résume en 2 mots. « Bienveillance » et « Plaisir ».")]):e._e()]),i("img",{attrs:{src:s("bd2e"),alt:""}}),i("div",{staticClass:"button"},[i("router-link",{attrs:{to:"/tarifs"}},[e._v("Tarifs")])],1),i("h3",[e._v("Accompagnement collectif")]),i("h4",[e._v("3 à 10 personnes")]),e._m(2),i("img",{attrs:{src:s("bd2e"),alt:""}}),i("div",{staticClass:"button"},[i("router-link",{attrs:{to:"/tarifs"}},[e._v("Tarifs")])],1),i("h3",[e._v("Base de la cohérence cardiaque")]),i("h4",[e._v("“ Le mouvement c’est la vie ”")]),e._m(3),e._m(4),i("img",{attrs:{src:s("bd2e"),alt:""}}),i("div",{staticClass:"button"},[i("router-link",{attrs:{to:"/tarifs"}},[e._v("Tarifs")])],1),i("div",{staticClass:"button"},[i("router-link",{attrs:{to:"/bienfaits"}},[e._v("Decouvrez les bienfaits"),i("br"),e._v("du sport sur la santé !")])],1),i("h3",[e._v("Réflexologie Cranio-Sacrée")]),e._m(5),i("img",{attrs:{src:s("bd2e"),alt:""}}),i("div",{staticClass:"button"},[i("router-link",{attrs:{to:"/tarifs"}},[e._v("Tarifs")])],1),i("h3",[e._v("La pratique kinésiologique")]),e._m(6),i("img",{attrs:{src:s("bd2e"),alt:""}}),i("div",{staticClass:"button"},[i("router-link",{attrs:{to:"/tarifs"}},[e._v("Tarifs")])],1)])])},k=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"anchors"},[s("div",[s("p",[e._v("Coaching")])]),s("div",[s("p",[e._v("Cohérence cardiaque")])]),s("div",[s("p",[e._v("Reflexo")])]),s("div",[s("p",[e._v("Kinéso")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" Seul ou à plusieurs, l’activité physique n’est pas seulement un moyen très efficace pour perdre du poids et conserver sa silhouette svelte et tonique. "),s("br"),e._v("En "),s("i",{staticClass:"orangeAccent"},[e._v("complément")]),e._v(" d’un rythme de vie à l’écoute de vos besoins, c’est aussi un formidable allié pour votre "),s("i",{staticClass:"orangeAccent"},[e._v("bien-être")]),e._v(" général. Le sport -ou plutôt le mouvement- contribue à prévenir bon nombre de déséquilibres sur le plan physique et mental. "),s("br"),s("br"),e._v("Voyons-en bref les bienfaits du sport sur votre organisme et votre qualité de vie générale: ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" Vous êtes un groupe de 3 personnes ou plus ? "),s("br"),e._v("Réunissez vos forces et lancez-vous pour des cours collectifs ! Lors de notre premier contact, nous fixerons ensemble un créneau hebdomadaire adapté à vos disponibilités. "),s("br"),s("br"),e._v("Les séances "),s("i",{staticClass:"orangeAccent"},[e._v("HIIT")]),e._v(" ou circuit training impliquent de courtes rafales d’exercices de haute intensité, travaillant jusqu’à "),s("i",{staticClass:"orangeAccent"},[e._v("100 %")]),e._v(" de la capacité maximale, alternées avec des intervalles d’activité plus faibles ou un arrêt complet. Parce que l’intensité est élevée, la durée d’une séance hors échauffement et étirements est courte – jamais "),s("i",{staticClass:"orangeAccent"},[e._v("plus de 35 minutes")]),e._v(". ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" La cohérence cardiaque s’intéresse à la variabilité du rythme cardiaque qui est l’une des manifestations physiologiques de nos sentiments et de nos "),s("i",{staticClass:"orangeAccent"},[e._v("émotions")]),e._v(". "),s("br"),e._v("Elle est reconnue comme un marqueur puissant de l’activité du système nerveux autonome et de son équilibre. Le cœur et le cerveau interagissent en permanence. Lorsque l’un s’emballe, l’autre suit. C’est ainsi que notre état émotionnel influence les battements de notre cœur. "),s("br"),s("br"),e._v("Grâce à des techniques simples, on peut apprendre à agir sur son rythme cardiaque pour "),s("i",{staticClass:"orangeAccent"},[e._v("apaiser")]),e._v(" ses émotions, mieux "),s("i",{staticClass:"orangeAccent"},[e._v("gérer")]),e._v(" son stress et prendre de "),s("i",{staticClass:"orangeAccent"},[e._v("meilleures décisions")]),e._v(". "),s("br"),e._v("A l’aide d’exercices, nous analysons ensemble la variabilité de votre respiration et apprenons comment mieux la réguler pour bénéficier des effets positifs : ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"list"},[s("ul",[s("li",[e._v("Baisse du niveau de stress")]),s("li",[e._v("Amélioration des peformances")]),s("li",[e._v("Meilleure gestion de vos émotions")]),s("li",[e._v("Renforcement du système immunitaire ")]),s("li",[e._v("Régulation de la glycémie")]),s("li",[e._v("Meilleure concentration ")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(' La Réflexologie crânio-sacrée est une approche unique et inspirée également appelé "'),s("i",{staticClass:"orangeAccent"},[e._v("ostéo fluidique")]),e._v('". '),s("br"),e._v("C'est une technique manuelle douce qui consiste à appliquer une légère pression sur les os du crâne et du visage de même que sur la partie inférieure de la moelle epinière qui s’étend jusqu'au sacrum. "),s("br"),s("br"),e._v("Efficace et utile pour un "),s("i",{staticClass:"orangeAccent"},[e._v("rééquilibrage")]),e._v(" optimal du bassin, de la posture et colonne vertébrale, elle procure des résultats notables sur le "),s("i",{staticClass:"orangeAccent"},[e._v("stress")]),e._v(" et l’"),s("i",{staticClass:"orangeAccent"},[e._v("anxiété")]),e._v(" en agissant directement sur le liquide céphalo rachidien. "),s("br"),s("br"),s("i",{staticClass:"blueAccent"},[e._v("Les motivations principales pour effectuer une séance sont :")]),s("br"),e._v("- éliminer des "),s("i",{staticClass:"orangeAccent"},[e._v("douleurs chroniques")]),e._v(". "),s("br"),e._v("- gérer des problématiques liés à la sphère crânienne ("),s("i",{staticClass:"orangeAccent"},[e._v("maux de tête, migraines, acouphènes, vertiges")]),e._v("). "),s("br"),e._v("- retrouver du "),s("i",{staticClass:"orangeAccent"},[e._v("tonus")]),e._v(" et de la "),s("i",{staticClass:"orangeAccent"},[e._v("vitalité")]),e._v(". "),s("br"),e._v("- se relaxer. "),s("br"),s("br"),e._v("Elle ne comporte aucune contre indication et sepratique sur tout public. ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" « Les bras m’en tombent », « J’ai les jambes en coton », « J’en ai plein le dos » "),s("br"),s("br"),e._v("Ces expressions populaires attestent du rapport étroit entre nos muscles et nos émotions. "),s("i",{staticClass:"orangeAccent"},[e._v("Écoutons votre corps")]),e._v(" ! Il a quelque chose à nous dire. "),s("br"),e._v("Initiée dans les années 1960 par le chiropracteur DRGOODHEART, la kinésiologie vise à rétablir "),s("i",{staticClass:"orangeAccent"},[e._v("l'équilibre")]),e._v(" global de la personne : structurel, psycho émotionnel,biochimique. "),s("br"),e._v("Aussi appelée science du mouvement ou physiologie du mouvement, elle fait le lien entre les muscles, les organes et les méridiens d’acupuncture. "),s("br"),e._v("Une pratique professionnelle destinée à favoriser un état d'équilibre et de "),s("i",{staticClass:"orangeAccent"},[e._v("bien être")]),e._v(". "),s("br"),e._v("Grace au test musculaire, nous établissons un dialogue silencieux avec le corps afin de détecter l'origine du stress, les émotions, "),s("i",{staticClass:"orangeAccent"},[e._v("les événements")]),e._v(" qui bloquent la personne dans son plein potentiel. Tout est en inter-relation: Si l'un des systèmes est perturbé, toute "),s("i",{staticClass:"orangeAccent"},[e._v("l'énergie")]),e._v(" de la personne sera déséquilibrée. ")])}],A={name:"Prestations",data:function(){return{firstBox:!1,secondBox:!1,thirdBox:!1,fourthBox:!1}},methods:{firstBoxSwitch:function(){1==this.firstBox?this.firstBox=!1:(this.firstBox=!0,this.secondBox=!1,this.thirdBox=!1,this.fourthBox=!1)},secondBoxSwitch:function(){1==this.secondBox?this.secondBox=!1:(this.firstBox=!1,this.secondBox=!0,this.thirdQuestion=!1,this.fourthBox=!1)},thirdBoxSwitch:function(){1==this.thirdBox?this.thirdBox=!1:(this.firstBox=!1,this.secondBox=!1,this.thirdBox=!0,this.fourthBox=!1)},fourthBoxSwitch:function(){1==this.fourthBox?this.fourthBox=!1:(this.firstBox=!1,this.secondBox=!1,this.thirdBox=!1,this.fourthBox=!0)}}},E=A,Q=(s("307a"),Object(u["a"])(E,w,k,!1,null,null,null)),y=Q.exports,S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tarifs"},[s("h1",[e._v("Mes tarifs")]),e._m(0),e._m(1),e._m(2),s("div",{staticClass:"button"},[s("router-link",{attrs:{to:"/les-bienfaits-du-sport"}},[e._v("Réflexologie, Kinésiologie"),s("br"),e._v("Pourquoi ? Pour qui ?")])],1),s("div",{staticClass:"container"},[s("h4",[e._v("Réflexologie")]),s("div",{staticClass:"inside-container"},[e._m(3),s("p",[e._v("La séance dure en moyenne 1h15 et se déroule à mon cabinet")]),s("div",{staticClass:"adress"},[s("p",[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-location-dot"}}),e._v("34 chemin de la reviree, 38240 Meylan")],1)])])]),s("div",{staticClass:"container"},[s("h4",[e._v("Kinésiologie")]),s("div",{staticClass:"inside-container"},[e._m(4),s("p",[e._v("La séance dure en moyenne 1h15 et se déroule à mon cabinet")]),s("div",{staticClass:"adress"},[s("p",[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-location-dot"}}),e._v("34 chemin de la reviree, 38240 Meylan")],1)])])])])},j=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("h4",[e._v("Accompagnement personnalisé")]),i("h5",[e._v("1 ou 2 personnes")]),i("div",{staticClass:"inside-container"},[i("p",{staticClass:"price-container"},[i("i",{staticClass:"price"},[e._v("40€")]),e._v(" / séance")]),i("p",[e._v("La séance dure une heure et se déroule à votre domicile ou dans un lieu extérieur."),i("br"),e._v("Jusqu’à 2 personnes.")]),i("div",{staticClass:"breakline"}),i("p",{staticClass:"price-container"},[i("i",{staticClass:"price"},[e._v("20€")]),e._v(" / séance")]),i("div",{staticClass:"pics"},[i("img",{attrs:{src:s("b2bf"),alt:""}}),i("img",{attrs:{src:s("ba6f"),alt:""}})]),i("p",[e._v("Vous êtes particulier ? "),i("br"),e._v("Bénéficiez d’une réduction d’impôt sur le revenu de 50% des sommes versées à un salarié à domicile.")]),i("p",{staticClass:"lowerCase"},[e._v("Plus d’informations:"),i("br"),e._v(" https://www.servicesalapersonne.gouv.fr")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container"},[i("h4",[e._v("Accompagnement collectif")]),i("h5",[e._v("3 à 10 personnes")]),i("div",{staticClass:"inside-container"},[i("p",{staticClass:"price-container"},[i("i",{staticClass:"price"},[e._v("15€")]),e._v(" / séance / personne")]),i("p",[e._v("La séance dure une heure et se déroule à votre domicile ou dans un lieu extérieur.")]),i("div",{staticClass:"breakline"}),i("p",{staticClass:"price-container"},[i("i",{staticClass:"price"},[e._v("7€50")]),e._v(" / séance / personne")]),i("div",{staticClass:"pics"},[i("img",{attrs:{src:s("b2bf"),alt:""}}),i("img",{attrs:{src:s("ba6f"),alt:""}})]),i("p",[e._v("Vous êtes particulier ? "),i("br"),e._v("Bénéficiez d’une réduction d’impôt sur le revenu de 50% des sommes versées à un salarié à domicile.")]),i("p",{staticClass:"lowerCase"},[e._v("Plus d’informations:"),i("br"),e._v(" https://www.servicesalapersonne.gouv.fr")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("h4",[e._v("Cohérence cardiaque")]),s("div",{staticClass:"inside-container"},[s("p",{staticClass:"price-container"},[s("i",{staticClass:"price"},[e._v("12€")]),e._v(" / séance / personne")]),s("p",[e._v("La séance dure une heure et se déroule à votre domicile ou dans un lieu extérieur. "),s("br"),e._v(" "),s("br"),e._v("Elle est complémentaire avec l’accompagnement sportif , la reflexologie ou la kinésiologie")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"price-container"},[s("i",{staticClass:"price"},[e._v("55€")]),e._v(" / séance")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"price-container"},[s("i",{staticClass:"price"},[e._v("55€")]),e._v(" / séance")])}],L={name:"Tarifs"},P=L,R=(s("4412"),Object(u["a"])(P,S,j,!1,null,null,null)),M=R.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"parcours"},[s("h1",[e._v("Mon parcours")]),e._m(0),s("p",[e._v("Un parcours et une histoire qui ont démarré dans un club de basket en tant que salarié en 2010. Puis coordinateur d'équipe dans le milieu périscolaire, directeur d'accueil collectif de mineurs, intervenant sportif dans diverses associations pour les publics enfants et adultes, j'ai décidé de devenir micro entrepreneur en 2017.")]),e._m(1),e._m(2),s("p",[e._v("Grand passionné de voyages, véritable amoureux de l'Amérique latine, je me suis aperçu que prendre soin de soi est accessible partout et pour tous.")]),s("p",[e._v("C'est une philosophie de vie, ce sont des rituels à adopter au quotidien. Notre voyage intérieur est infini. A très bientôt.")]),s("p",{staticClass:"blueAccent"},[e._v("Julien Patane")]),s("div",{staticClass:"diplomes"},[s("h2",[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-ribbon"}}),e._v("Mes diplômes")],1),e._m(3)]),s("div",{staticClass:"buttons"},[s("div",{staticClass:"button-nav"},[s("router-link",{attrs:{to:"/prestations"}},[e._v("Mes prestations")])],1),s("div",{staticClass:"button-nav"},[s("router-link",{attrs:{to:"/tarifs"}},[e._v("Mes tarifs")])],1)])])},O=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("Diplômé des métiers du sport et de l'animation, je suis "),s("i",{staticClass:"orangeAccent"},[e._v("éducateur coach sportif")]),e._v(" sur le bassin grenoblois depuis plusieurs années.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("La petite aventure continue avec un virage complémentaire depuis février 2020. Un parcours de formation pour devenir "),s("i",{staticClass:"orangeAccent"},[e._v("praticien kinésiologue certifié")]),e._v(".")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ju_pics"},[i("img",{attrs:{src:s("6d31"),alt:"Julien Patane, de dos, en tailleur sur une mer de sel"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("BP JEPS Mention Sports Collectifs et Activités Physiques Pour Tous")]),s("li",[e._v("Certifié en méthode Réflexologie Cranio sacrée - Ostéo Fluidique")]),s("li",[e._v("Certifié en méthode cohérence cardiaque")]),s("li",[e._v("Futur certifié en kinésiologie")])])}],T={name:"Parcours"},z=T,N=(s("3053"),Object(u["a"])(z,$,O,!1,null,null,null)),D=N.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bienfaits"},[s("h1",[e._v("Les bienfaits du sport sur la santé")]),s("ul",[s("li",[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-yin-yang"}}),s("i",{staticClass:"boldAccent"},[e._v("Un antistress de qualité :")]),s("br"),e._v("Conséquence des hormones, et de ce bien-être général, les niveaux de stress et d’anxiété diminuent également de manière significative avec la pratique d’une "),s("i",{staticClass:"orangeAccent"},[e._v("activité sportive")]),e._v(". Une meilleure oxygénation du cerveau améliorant nos capacités de réflexion ou mémoire et lutte contre les tensions nerveuses. En outre, il favorise un "),s("i",{staticClass:"orangeAccent"},[e._v("sommeil de qualité")]),e._v(", stimulant et régulant les hormones concernées")],1),s("li",[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-comment-medical"}}),s("i",{staticClass:"boldAccent"},[e._v("Pour prévenir ou accompagner le cancer :")]),s("br"),e._v("De nombreuses études scientifiques ont révélé l’action préventive de l’activité sportive contre certains types de "),s("i",{staticClass:"orangeAccent"},[e._v("cancer")]),e._v(" Au-delà de l’aspect préventif, le sport permet également aux patients atteints de cancer de conserver une bonne condition physique. Notamment en ce qui concerne la masse musculaire. Cela peut jouer un "),s("i",{staticClass:"orangeAccent"},[e._v("rôle positif")]),e._v(" dans la résistance aux traitements et le processus de guérison.")],1),s("li",[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-bone"}}),s("i",{staticClass:"boldAccent"},[e._v("Un renforcement de la structure osseuse :")]),s("br"),e._v("Ce n’est pas l’effet le plus connu du sport sur le corps, mais il s’agit pourtant de l’un de ses plus grands bienfaits. Bénéfique pour l’amélioration de votre "),s("i",{staticClass:"orangeAccent"},[e._v("densité osseuse")]),e._v(", celle-ci ne dépend donc pas uniquement de la quantité de calcium que vous ingérez, mais aussi du sport que vous pratiquez. Le mouvement est donc tout à fait indiqué pour limiter l’apparition chroniques de type "),s("i",{staticClass:"orangeAccent"},[e._v("lombalgies")]),e._v(", rhumatismes inflammatoires, ostéoporoses, ou encore arthroses.")],1),s("li",[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-heart-pulse"}}),s("i",{staticClass:"boldAccent"},[e._v("Lutte contre les maladies cardiovasculaires :")]),s("br"),e._v("Une activité physique régulière améliore et régule le fonctionnement du système cardiaque, en diminuant les facteurs de "),s("i",{staticClass:"orangeAccent"},[e._v("risque cardiovasculaire")]),e._v(". En l’occurrence, il régule l’hypertension artérielle, le taux de sucre dans le sang lié aux problématiques dû au diabète, augmente le taux de bon cholestérol.")],1),s("li",[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-user-doctor"}}),s("i",{staticClass:"boldAccent"},[e._v("Limiter les signes de vieillissement :")]),s("br"),e._v("Tout en contribuant à la diminution des blessures osseuses, maux de dos, douleurs articulaires, et autres maladies chroniques, améliorant ainsi la longévité. En effet, le sport permet de repousser "),s("i",{staticClass:"orangeAccent"},[e._v("la perte d’autonomie")]),e._v(" qui survient le plus souvent avec l’âge. Celle-ci est liée à notre mode de vie sédentarisé, et non pas seulement au vieillissement.")],1),s("li",[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-face-laugh-beam"}}),s("i",{staticClass:"boldAccent"},[e._v("Le plaisir d’être ensemble :")]),s("br"),e._v("De façon indirecte, le sport permet de renforcer les liens d’appartenance "),s("i",{staticClass:"orangeAccent"},[e._v("sociale")]),e._v(". Le sport réunit autour d’une même passion des individus différents. De quoi pouvoir tisser des liens relationnels forts, des valeurs d’amitié, de solidarité, de respect et de dépassement de soi. Faisons équipe ensemble !")],1)]),s("div",{staticClass:"buttons"},[s("div",{staticClass:"button-nav"},[s("router-link",{attrs:{to:"/prestations"}},[e._v("Mes prestations")])],1),s("div",{staticClass:"button-nav"},[s("router-link",{attrs:{to:"/tarifs"}},[e._v("Mes tarifs")])],1)])])},I=[],J={name:"Bienfaits"},U=J,K=(s("11e4"),Object(u["a"])(U,F,I,!1,null,null,null)),H=K.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"faq"},[s("h1",[e._v("Foire aux questions")]),s("div",{class:[e.firstQuestion?"opened-question":"","question"],on:{click:e.firstQuestionSwitch}},[s("p",{staticClass:"the-question"},[e._v("Quelle est la durée d’une séance d’accompagnement sportif ?"),s("i",{class:[e.firstQuestion?"left":"down","arrow"]})]),e.firstQuestion?s("p",{staticClass:"the-answer"},[e._v("Une séance individuelle ou collective dure 1 heure.")]):e._e()]),s("div",{class:[e.secondQuestion?"opened-question":"","question"],on:{click:e.secondQuestionSwitch}},[s("p",{staticClass:"the-question"},[e._v("Quel est le minimum de personne pour un cours collectif ?"),s("i",{class:[e.secondQuestion?"left":"down","arrow"]})]),e.secondQuestion?s("p",{staticClass:"the-answer"},[e._v("Le minimum pour un cours collectif est de 3 personnes.")]):e._e()]),s("div",{class:[e.thirdQuestion?"opened-question":"","question"],on:{click:e.thirdQuestionSwitch}},[s("p",{staticClass:"the-question"},[e._v("Les personnes en situation de handicap peuvent-elles être accompagnées sportivement ?"),s("i",{class:[e.thirdQuestion?"left":"down","arrow"]})]),e.thirdQuestion?s("p",{staticClass:"the-answer"},[e._v("Non, malheureusement je n’ai pas l’agrégation pour travailler avec des personnes en situation de handicap.")]):e._e()]),s("div",{class:[e.fourthQuestion?"opened-question":"","question"],on:{click:e.fourthQuestionSwitch}},[s("p",{staticClass:"the-question"},[e._v("Les chèque CESU (Service à la personne) sont-ils acceptés ?"),s("i",{class:[e.fourthQuestion?"left":"down","arrow"]})]),e.fourthQuestion?s("p",{staticClass:"the-answer"},[e._v("Oui, les chèque CESU sont acceptés.")]):e._e()])])},V=[],X={name:"Faq",data:function(){return{firstQuestion:!1,secondQuestion:!1,thirdQuestion:!1,fourthQuestion:!1}},methods:{firstQuestionSwitch:function(){1==this.firstQuestion?this.firstQuestion=!1:(this.firstQuestion=!0,this.secondQuestion=!1,this.thirdQuestion=!1,this.fourthQuestion=!1)},secondQuestionSwitch:function(){1==this.secondQuestion?this.secondQuestion=!1:(this.firstQuestion=!1,this.secondQuestion=!0,this.thirdQuestion=!1,this.fourthQuestion=!1)},thirdQuestionSwitch:function(){1==this.thirdQuestion?this.thirdQuestion=!1:(this.firstQuestion=!1,this.secondQuestion=!1,this.thirdQuestion=!0,this.fourthQuestion=!1)},fourthQuestionSwitch:function(){1==this.fourthQuestion?this.fourthQuestion=!1:(this.firstQuestion=!1,this.secondQuestion=!1,this.thirdQuestion=!1,this.fourthQuestion=!0)}}},W=X,Y=(s("678b"),Object(u["a"])(W,G,V,!1,null,null,null)),Z=Y.exports;i["a"].use(h["a"]);var ee=[{path:"/",name:"Home",component:B},{path:"/prestations",name:"Prestations",component:y},{path:"/tarifs",name:"Tarifs",component:M},{path:"/mon-parcours",name:"Parcours",component:D},{path:"/les-bienfaits-du-sport",name:"Bienfaits",component:H},{path:"/faq",name:"Faq",component:Z}],te=new h["a"]({routes:ee,scrollBehavior:function(){return{x:0,y:0}}}),se=te,ie=s("ecee"),ne=s("c074"),oe=s("b702"),ae=s("f2d1"),re=s("ad3d");ie["c"].add(ne["a"],oe["a"],ae["a"]),i["a"].component("font-awesome-icon",re["a"]),i["a"].config.productionTip=!1,new i["a"]({router:se,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";s("9c0c")},"5d37":function(e,t,s){},"635b":function(e,t,s){e.exports=s.p+"img/logo 6.99fa3071.png"},"678b":function(e,t,s){"use strict";s("69f4")},"69f4":function(e,t,s){},"6d31":function(e,t,s){e.exports=s.p+"img/uuu.9c832032.jpg"},"8d27":function(e,t,s){},9014:function(e,t,s){e.exports=s.p+"img/aaa.71875165.jpg"},"9c0c":function(e,t,s){},"9d10":function(e,t,s){},b2bf:function(e,t,s){e.exports=s.p+"img/kisspng-logo-services-la-personne-en-france-chque-emp-5b59512bc6c5e4.0972898015325801398142.640a2b16.png"},b376:function(e,t,s){"use strict";s("4817")},ba6f:function(e,t,s){e.exports=s.p+"img/Picto-reduction-impot-50-1.f610f43e.png"},bd2e:function(e,t,s){e.exports=s.p+"img/DSC_0735.b389b93e.jpg"},cfdb:function(e,t,s){e.exports=s.p+"img/HH.c3b487b3.png"},e58e:function(e,t,s){e.exports=s.p+"img/bb-bis.262a54df.jpg"}});
//# sourceMappingURL=app.38900ffd.js.map