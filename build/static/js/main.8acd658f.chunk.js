(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,t,a){},116:function(e,t,a){e.exports=a.p+"static/media/icon-left-font-monochrome-white.16bd95a8.svg"},130:function(e,t,a){e.exports=a(181)},175:function(e,t,a){},178:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),l=a.n(o),c=a(13),i=a(14),m=a(16),s=a(15),u=a(24),d=a(12),p=a(25),f=a(19),h=a.n(f),g="https://back-groupomania.herokuapp.com/api/user",b=function(e,t,a,n){return h.a.post(g+"/signup",{firstname:e,lastname:t,email:a,password:n})},v=function(e,t){return h.a.post(g+"/login",{email:e,password:t})},E=function(e){return h.a.get(g+"/me",{headers:e})},y=function(e,t){return h.a.put(g+"/me",e,{headers:t})},C=function(e){return h.a.delete(g+"/me",{headers:e})},N=a(214),S=a(210),x=function(e){var t=e.firstnameValue,a=e.lastnameValue,n=e.emailValue,o=e.passwordValue,l=e.cpasswordValue,c=e.Change,i=e.Submit,m=e.errors;return r.a.createElement("article",{className:"container-fluid container-signUp py-5"},r.a.createElement("h2",{className:"text-white text-center mb-4"},"Bienvenue \xe0 groupomania"),r.a.createElement("h2",{className:"text-white text-center mb-4"},"Inscription"),r.a.createElement("form",{className:"signUp mx-auto",onSubmit:i},m,r.a.createElement(S.a,{container:!0,spacing:2},r.a.createElement(S.a,{item:!0,xs:12,sm:6},r.a.createElement("input",{autoFocus:!0,required:!0,id:"firstname",name:"firstname",type:"text",value:t,onChange:c,label:"Pr\xe9nom",placeholder:"Pr\xe9nom",className:"form-control mb-4 mx-auto"})),r.a.createElement(S.a,{item:!0,xs:12,sm:6},r.a.createElement("input",{required:!0,id:"lastname",name:"lastname",type:"text",value:a,onChange:c,label:"Nom",placeholder:"Nom",className:"form-control mb-4 mx-auto"})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement("input",{required:!0,id:"email",name:"email",type:"email",value:n,onChange:c,label:"Email",placeholder:"Email",className:"form-control mb-4 mx-auto"})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement("input",{required:!0,id:"password",name:"password",type:"password",value:o,onChange:c,label:"Mot de passe",placeholder:"Mot de passe",className:"form-control mb-4 mx-auto",autoComplete:"on"})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement("input",{required:!0,id:"confirmPassword",name:"confirmPassword",type:"password",value:l,onChange:c,label:"Confirmation de mot de passe",placeholder:"Confirmation de mot de passe",className:"form-control mb-4 mx-auto",autoComplete:"on"}))),r.a.createElement("input",{type:"submit",variant:"contained",value:"Inscription",className:"my-3 p-0"}),r.a.createElement(S.a,{className:"text-center"},r.a.createElement(S.a,{item:!0},r.a.createElement(N.a,{href:"/",variant:"body2",underline:"hover"},"Vous avez d\xe9j\xe0 un compte ? Connectez-vous")))))},k=(a(96),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={firstname:"",lastname:"",email:"",password:"",confirmPassword:"",redirection:!1,formIsValid:!0,errors:{}},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(p.a)({},n,r)),e.setState(Object(p.a)({},n,r))},e.verification=function(){var t=e.state,a=t.firstname,n=t.lastname,r=t.email,o=t.password,l=t.confirmPassword,c=t.errors,i=t.formIsValid;return/^[A-Za-z]{2,}$/.test(a)||(e.setState({formIsValid:!1}),c.firstname="Le pr\xe9nom est incorrect"),/^[A-Za-z]{2,}$/.test(n)||(e.setState({formIsValid:!1}),c.lastname="Le nom est incorrect"),/^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,}$/.test(r)||(e.setState({formIsValid:!1}),c.email="L'email est incorrect"),(!o||o.length<8)&&(e.setState({formIsValid:!1}),c.password="Le mot de passe doit contenir au moins 8 caract\xe8res"),l!==o&&(e.setState({formIsValid:!1}),c.confirmPassword="La confirmation du mot de passe est incorrect"),e.setState({errors:c}),i},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.firstname,r=a.lastname,o=a.email,l=a.password;e.verification()?b(n,r,o,l).then((function(){e.setState({redirection:!0})})).catch((function(e){console.log(e)})):console.log("Form has errors"),e.setState({formIsValid:!0})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.firstname,a=e.lastname,o=e.email,l=e.password,c=e.confirmPassword,i=e.redirection,m=e.errors;if(localStorage.getItem("token"))return r.a.createElement(d.a,{to:"/post"});if(i)return r.a.createElement(d.a,{to:"/"});var s=Object.keys(m).map((function(e){return r.a.createElement("p",{className:"errors",key:e},m[e])}));return r.a.createElement(n.Fragment,null,r.a.createElement(x,{firstnameValue:t,lastnameValue:a,email:o,passwordValue:l,cpasswordValue:c,Change:this.handleChange,Submit:this.handleSubmit,errors:s}))}}]),a}(n.Component)),j=function(e){var t=e.emailValue,a=e.passwordValue,n=e.Change,o=e.Submit,l=e.errors;return r.a.createElement("div",{className:"container-fluid container-login pt-5"},r.a.createElement("h2",{className:"text-white text-center mb-4"},"Connexion"),r.a.createElement("form",{className:"login mx-auto",onSubmit:o},l,r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement("input",{required:!0,id:"email",name:"email",autoFocus:!0,value:t,onChange:n,label:"Email",placeholder:"Email",className:"form-control mb-4 mx-auto"})),r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement("input",{required:!0,name:"password",type:"password",id:"password",value:a,onChange:n,label:"Mot de passe",placeholder:"Mot de passe",className:"form-control mb-4 mx-auto",autoComplete:"on"})),r.a.createElement("input",{type:"submit",value:"Connectez-vous",className:"my-3 p-0"}),r.a.createElement(S.a,{className:"text-center"},r.a.createElement(S.a,{item:!0},r.a.createElement(N.a,{href:"/signup",variant:"body2",underline:"hover"},"Vous n'avez pas encore de compte ? Inscrivez vous")))))},w=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",admin:!1,formIsValid:!0,errors:{},redirection:!1},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(p.a)({},n,r))},e.verification=function(){var t=e.state,a=t.email,n=t.password,r=t.errors,o=t.formIsValid;return/^[A-Za-z0-9_.-]+@[A-Za-z0-9_.-]+\.[A-Za-z]{2,}$/.test(a)||(r.email="L'email est invalide",e.setState({formIsValid:!1})),(!n||n.length<8)&&(r.password="Le mot de passe est invalide",e.setState({formIsValid:!1})),e.setState({errors:r}),o},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,r=a.password;e.verification()?v(n,r).then((function(t){t.data.isAdmin&&e.setState({admin:!0}),localStorage.setItem("token",t.data.token),localStorage.setItem("userId",t.data.userId),e.setState({redirection:!0})})).catch((function(e){return console.log(e)})):console.log("Form has errors"),e.setState({formIsValid:!0})},e}return Object(i.a)(a,[{key:"render",value:function(){if(localStorage.getItem("token"))return r.a.createElement(d.a,{to:"/post"});if(this.state.redirection)return r.a.createElement(d.a,{to:"/post"});var e=this.state,t=e.email,a=e.password,n=e.errors,o=Object.keys(n).map((function(e){return r.a.createElement("p",{className:"errors",key:e},n[e])}));return r.a.createElement(j,{emailValue:t,passwordValue:a,Change:this.handleChange,Submit:this.handleSubmit,errors:o})}}]),a}(n.Component),O=a(57),A="https://back-groupomania.herokuapp.com/api/article",I=function(e){return h.a.get(A+"/",{headers:e})},V=function(e,t){return h.a.post(A+"/",e,{headers:t})},P=function(e,t,a){return h.a.put(A+"/"+e,t,{headers:a})},q=function(e,t){return h.a.delete(A+"/"+e,{headers:t})},z=function(e,t){return h.a.post("https://back-groupomania.herokuapp.com/api/like/article/"+e,{},{headers:t})},F=a(68),D=a(215),H=a(216),B=a(226),U=a(219),L=a(217),M=a(59),Z=a(220),T=a(221),_=a(222),$=a(111),J=a.n($),Q=a(79),R=a.n(Q),G=a(113),K=a.n(G),W=a(112),X=a.n(W),Y="https://back-groupomania.herokuapp.com/api/article/",ee=function(e,t,a){return h.a.post(Y+e,{comment:t},{headers:a})},te=function(e,t){return h.a.get(Y+e,{headers:t})},ae=function(e,t,a){return h.a.delete(Y+e+"/"+t,{headers:a})},ne=a(218);a(97);function re(e){var t=e.isAdmin,a=e.creator,n=e.profilePicture,o=e.name,l=e.comment,c=e.handleDeleteComment;return r.a.createElement(D.a,{variant:"outlined",className:"show-comment-card m-2"},r.a.createElement(H.a,{avatar:r.a.createElement(B.a,{"aria-label":"recipe",src:n,className:""}),title:r.a.createElement("div",{className:"mr-5"},o)}),r.a.createElement(L.a,null,r.a.createElement(M.a,{variant:"body2",color:"textSecondary",component:"p"},l)),parseInt(localStorage.getItem("userId"))===a||t?r.a.createElement(ne.a,{className:"d-flex mx-auto",color:"secondary",onClick:c},"supprimer"):null)}var oe=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isAdmin:!1,allComment:{},reqHeader:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},e.handleDeleteComment=function(t,a){ae(t,a,e.state.reqHeader).then((function(t){var n=Object(O.a)(e.state.allComment),r=n.find((function(e){return e.id===a})),o=n.map((function(e){return e.id})).indexOf(r.id);n.splice(o,1),e.setState({allComment:n})})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.articleId;te(t,this.state.reqHeader).then((function(t){e.setState({allComment:t.data.comments,isAdmin:t.data.isAdmin})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.allComment,a=Object.keys(t).map((function(a){return r.a.createElement(re,{key:t[a].id,profilePicture:t[a].User.profilePicture,name:t[a].User.firstname+" "+t[a].User.lastname,comment:t[a].commentText,handleDeleteComment:function(){e.handleDeleteComment(t[a].ArticleId,t[a].id)},creator:t[a].UserId,isAdmin:e.state.isAdmin})}));return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"show-comment p-2 mb-2"},a))}}]),a}(n.Component),le=function(e){var t=e.isAdmin,a=e.creator,n=e.profilePicture,o=e.name,l=e.likes,c=e.attachment,i=e.content,m=e.handleLikeClick,s=e.commentFormComponent,u=e.handleDelete,d=e.handleUpdate,p=e.articleId,f=r.a.useState(!1),h=Object(F.a)(f,2),g=h[0],b=h[1];return r.a.createElement(D.a,{className:"col-12 col-sm-10 col-md-8 mx-auto my-5 p-2 p-sm-4 container-card-article"},r.a.createElement(H.a,{avatar:r.a.createElement(B.a,{"aria-label":"recipe",className:"",src:n}),title:o}),c?r.a.createElement(U.a,{className:"mx-auto mt-2 img-Article",image:c}):null,r.a.createElement(L.a,null,r.a.createElement(M.a,{variant:"body2",color:"textSecondary",className:""},i)),r.a.createElement(Z.a,{disableSpacing:!0,className:"container-card-icon"},r.a.createElement(T.a,{"aria-label":"likes",onClick:m},r.a.createElement(J.a,{className:"mr-2",color:"secondary"})," ",l),r.a.createElement(T.a,{className:g?"expand ml-auto":"expandOpen ml-auto",onClick:function(){b(!g)},"aria-expanded":g,"aria-label":"show comments"},r.a.createElement(X.a,null))),r.a.createElement(_.a,{in:g,timeout:"auto",unmountOnExit:!0},r.a.createElement(oe,{articleId:p})),s,parseInt(localStorage.getItem("userId"))===a?r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement(T.a,{onClick:u},r.a.createElement(R.a,{color:"secondary",style:{fontSize:40}})),r.a.createElement(T.a,{onClick:d},r.a.createElement(K.a,{style:{color:"green",fontSize:40}}))):null,t?r.a.createElement("div",{className:"Actions"},r.a.createElement(T.a,{onClick:u},r.a.createElement(R.a,{color:"secondary",style:{fontSize:40}}))):null)},ce=a(56),ie=a.n(ce),me=a(223),se=a(80),ue=a.n(se);a(102);ue.a.setAppElement("#root");var de=function(e){var t=e.buttonContent,a=e.contentValue,o=e.contentChange,l=e.attachmentChange,c=e.fileName,i=e.Submit,m=Object(n.useState)(!1),s=Object(F.a)(m,2),u=s[0],d=s[1];return r.a.createElement("article",{className:"container-fluid pt-4"},r.a.createElement("div",{className:"container-article-form d-flex col-12 col-sm-10 col-md-6 d-flex pt-4 mx-sm-auto"},r.a.createElement("div",{className:"mx-auto"},r.a.createElement(me.a,{onClick:function(){return d(!0)},className:"mx-auto mb-4 input-open-modal",placeholder:"Que voulez vous dire ?"}),r.a.createElement(ie.a,{onClick:function(){return d(!0)},className:"icon-camera mt-1 mx-3"})),r.a.createElement(ue.a,{isOpen:u,shouldCloseOnOverlayClick:!1,onRequestClose:function(){return d(!1)},className:"modal-container p-5"},r.a.createElement("div",{className:"col-12 col-sm-8 col-md-6 modal-item-container"},r.a.createElement("h2",{className:"modal-title text-center text-white my-4"},"Ma publication"),r.a.createElement("form",{className:"col-8 container-glassmorph mx-auto pb-2",onSubmit:i},r.a.createElement(S.a,{container:!0,className:"d-flex justify-content-center",spacing:0},r.a.createElement(S.a,{item:!0,xs:8},r.a.createElement(me.a,{name:"content",id:"content",variant:"outlined",multiline:!0,placeholder:"Que voulez vous dire ?",value:a,onChange:o,required:!0,className:"textFiel-article"})),r.a.createElement("input",{accept:"image/*",className:"d-none",id:"attachment",name:"attachment",type:"file",onChange:l}),r.a.createElement("label",{htmlFor:"attachment"},r.a.createElement(ne.a,{variant:"contained",color:"primary",component:"span",className:"mt-2 ml-2"},r.a.createElement(ie.a,null))),c,r.a.createElement(ne.a,{type:"submit",variant:"contained",color:"primary",className:"mx-auto mt-5"},t))),r.a.createElement("div",{className:"d-flex flex-column mt-5"},r.a.createElement("button",{className:"mx-auto modal-btn-close button-glassmorph",onClick:function(){return d(!1)}},"Ferme"))))))},pe=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={errors:[],content:"",attachment:null,fileName:"",redirect:!1,reqHeader:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},e.handleSubmit=function(){var t=new FormData;t.append("content",e.state.content),t.append("attachment",e.state.attachment),V(t,e.state.reqHeader).then((function(){console.log("Article ajout\xe9"),e.setState({redirect:!0})})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(p.a)({},n,r))},e.handleFileChange=function(t){e.setState({attachment:t.target.files[0],fileName:t.target.files[0].name})},e}return Object(i.a)(a,[{key:"render",value:function(){return localStorage.getItem("token")?this.state.redirect?r.a.createElement(d.a,{to:"/post"}):r.a.createElement(de,{contentValue:this.state.content,contentChange:this.handleChange,attachmentChange:this.handleFileChange,fileName:this.state.fileName,Submit:this.handleSubmit,buttonContent:"Publier"}):r.a.createElement(d.a,{to:"/"})}}]),a}(n.Component),fe=function(e){var t=e.commentValue,a=e.commentChange,n=e.commentSubmit;return r.a.createElement("div",{className:"container-comment-form"},r.a.createElement("form",{className:"form mt-1",onSubmit:n},r.a.createElement(me.a,{name:"comment",id:"comment",multiline:!0,placeholder:"Commentez...",value:t,onChange:a,className:"input",required:!0}),r.a.createElement(ne.a,{type:"submit",variant:"contained",color:"primary",className:"mt-3 comment-form-btn"},"Commenter")))},he=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={comment:"",reqHeader:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(p.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault(),ee(e.props.id,e.state.comment,e.state.reqHeader).then((function(){return e.setState({comment:""})})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(fe,{commentValue:this.state.comment,commentChange:this.handleChange,commentSubmit:this.handleSubmit})}}]),a}(n.Component),ge=a(224),be=a(225),ve=a(114),Ee=a(119),ye=a(115),Ce=a.n(ye),Ne=(a(175),a(116)),Se=a.n(Ne),xe=function(){return r.a.createElement("div",{className:""},r.a.createElement(ge.a,{sticky:"top",bg:"dark",variant:"dark",className:"navbar"},r.a.createElement(ge.a.Toggle,{"aria-controls":"navbarScroll"}),r.a.createElement(ge.a.Collapse,{id:"navbarScroll"},r.a.createElement(be.a,{className:"my-2 my-lg-0 d-flex justify-content-between",style:{maxHeight:"100px",width:"100%"},navbarScroll:!0},r.a.createElement(u.b,{className:"",to:"/post"},r.a.createElement("img",{src:Se.a,alt:"logo",className:"logo h-100"})),r.a.createElement(u.b,{to:"/post",className:"nav-link my-auto"},"Forum"),r.a.createElement(u.b,{to:"/profile",className:"nav-link my-auto"},"Mon profil"),r.a.createElement(ve.a,{icon:Ee.a,className:"nav-icon my-auto",onClick:function(){Ce.a.fire({title:"\xcates-vous s\xfbr(e) ?",text:"Une fois d\xe9connect\xe9(e), vous ne pourrez plus acc\xe9der au forum",icon:"warning",showDenyButton:!0,confirmButtonText:"Me d\xe9connecter",denyButtonText:"Annuler",confirmButtonColor:"#3085d6",cancelButtonColor:"#d33"}).then((function(e){if(e.isConfirmed)return localStorage.clear(),window.location.href="/"}))}})))))},ke=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={posts:{},isLoaded:!1,update:!1,updateArticle:null,error:null,isAdmin:!1,id:"",reqHeader:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},e.handleLikeClick=function(t){z(t,e.state.reqHeader).then((function(a){console.log(a);var n=Object(O.a)(e.state.posts),r=n.find((function(e){return e.id===t}));201===a.status?r.likes+=1:r.likes-=1,e.setState({posts:n})})).catch((function(e){return console.log(e)}))},e.handleDeletePost=function(t){q(t,e.state.reqHeader).then((function(){var a=Object(O.a)(e.state.posts),n=a.find((function(e){return e.id===t})),r=a.map((function(e){return e.id})).indexOf(n.id);a.splice(r,1),e.setState({posts:a}),console.log("Article supprim\xe9")})).catch((function(e){return console.log(e)}))},e.handleUpdatePost=function(t){e.setState({update:!0,updateArticle:t})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;I(this.state.reqHeader).then((function(t){e.setState({posts:t.data.article,isAdmin:t.data.isAdmin})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.posts,o=t.update,l=t.updateArticle,c=t.isAdmin;if(o)return r.a.createElement(d.a,{to:"/post/update/"+l});var i=Object.keys(a).map((function(t){return r.a.createElement(le,{key:a[t].id,profilePicture:a[t].User.profilePicture,name:a[t].User.firstname+" "+a[t].User.lastname,likes:a[t].likes,content:a[t].content,attachment:a[t].attachment,handleLikeClick:function(){return e.handleLikeClick(a[t].id)},handleDelete:function(){return e.handleDeletePost(a[t].id)},handleUpdate:function(){return e.handleUpdatePost(a[t].id)},commentFormComponent:r.a.createElement(he,{id:a[t].id}),creator:a[t].UserId,articleId:a[t].id,isAdmin:c})}));return r.a.createElement(n.Fragment,null,r.a.createElement(xe,null),r.a.createElement("div",{className:"container-fluid pb-4 d-flex flex-column flex-fill container-article"},r.a.createElement(pe,null),i))}}]),a}(n.Component),je=Object(d.g)(ke),we=function(e){var t=e.profilePicture,a=e.lastname,o=e.firstname,l=e.email,c=e.biography,i=e.component,m=e.handleDelete;return r.a.createElement(n.Fragment,null,r.a.createElement(xe,null),r.a.createElement("main",{className:"container-profile"},r.a.createElement("section",{className:"section pb-5"},r.a.createElement("div",{className:"card card-profile col-sm-10 col-lg-6 12 mx-0 mx-sm-auto"},r.a.createElement("div",{className:"px-4"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card-profile-image"},t?r.a.createElement("img",{className:"rounded-circle",src:t,alt:"profil"}):null))),r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("h3",null,a,"  "," ","  ",o),r.a.createElement("div",{className:"h6 mt-4"},r.a.createElement("i",{className:"ni business_briefcase-24 mr-2"}),l)),r.a.createElement("div",{className:"mt-5 py-5 border-top text-center"},r.a.createElement("div",{className:"justify-content-center row"},r.a.createElement("div",{className:"col"},r.a.createElement("p",null,c))))),i,r.a.createElement(ne.a,{className:"btn w-50 mx-auto mb-3",variant:"contained",color:"secondary",onClick:m},"Supprimer le compte")))))},Oe=function(e){var t=e.biographyValue,a=e.biographyChange,n=e.profilePictureChange,o=e.fileName,l=e.Submit;return r.a.createElement("section",{className:"px-0 px-md-4 mt-4 mb-5"},r.a.createElement("div",{className:"d-flex flex-column pt-4 container-update-profil"},r.a.createElement("form",{className:"w-100 mt-2",onSubmit:l},r.a.createElement("div",{className:"form-item"},r.a.createElement(me.a,{name:"biography",id:"biography",className:"TextField w-75 ml-auto",variant:"outlined",multiline:!0,placeholder:"Biographie...",value:t,onChange:a}),r.a.createElement("input",{accept:"image/*",className:"d-none",id:"profilePicture",name:"profilePicture",type:"file",onChange:n}),r.a.createElement("label",{htmlFor:"profilePicture"},r.a.createElement(ne.a,{variant:"contained",color:"primary",component:"span",className:"ml-2 mt-2"},r.a.createElement(ie.a,null))),o,r.a.createElement(ne.a,{type:"submit",variant:"contained",color:"primary",className:"mx-auto my-3 btn"},"Mettre \xe0 jour")))))},Ae=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={biography:"",profilePicture:null,fileName:"",reqHeader:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(p.a)({},n,r))},e.handleSubmit=function(t){var a=new FormData;a.append("biography",e.state.biography),a.append("profilePicture",e.state.profilePicture),y(a,e.state.reqHeader).then().catch((function(e){console.log(e)}))},e.profilePictureChange=function(t){e.setState({profilePicture:t.target.files[0],fileName:t.target.files[0].name})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.biography,a=e.fileName;return localStorage.getItem("token")?r.a.createElement(n.Fragment,null,r.a.createElement(Oe,{biographyValue:t,biographyChange:this.handleChange,profilePictureChange:this.profilePictureChange,Submit:this.handleSubmit,fileName:a})):r.a.createElement(d.a,{to:"/"})}}]),a}(n.Component),Ie=(a(178),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:{},redirect:!1,reqHeader:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},e.handleDelete=function(){C(e.state.reqHeader).then((function(){console.log("Account was deleted"),localStorage.clear(),e.setState({redirect:!0})})).catch((function(e){console.log(e)}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E(this.state.reqHeader).then((function(t){e.setState({user:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.redirect;return localStorage.getItem("token")?a?r.a.createElement(d.a,{to:"/"}):r.a.createElement(we,{profilePicture:t.profilePicture,lastname:t.lastname,firstname:t.firstname,email:t.email,biography:t.biography,component:r.a.createElement(Ae,null),handleDelete:this.handleDelete}):r.a.createElement(d.a,{to:"/"})}}]),a}(r.a.Component)),Ve=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={errors:[],content:"",attachment:null,fileName:"",redirect:!1,reqHeader:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(p.a)({},n,r))},e.handleFileChange=function(t){e.setState({attachment:t.target.files[0],fileName:t.target.files[0].name})},e.handleSubmit=function(t){t.preventDefault();var a=new FormData;a.append("content",e.state.content),a.append("attachment",e.state.attachment);var n=window.location.href.split("/update/")[1];P(n,a,e.state.reqHeader).then((function(){console.log("Article mis \xe0 jour"),e.setState({redirect:!0})})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return localStorage.getItem("token")?this.state.redirect?r.a.createElement(d.a,{to:"/post"}):r.a.createElement(n.Fragment,null,r.a.createElement(de,{Submit:this.handleSubmit,contentValue:this.state.content,contentChange:this.handleChange,attachmentChange:this.handleFileChange,fileName:this.state.fileName,buttonContent:"Mettre \xe0 jour"})):r.a.createElement(d.a,{to:"/"})}}]),a}(n.Component);function Pe(){return r.a.createElement(u.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:w}),r.a.createElement(d.b,{exact:!0,path:"/signup",component:k}),r.a.createElement(d.b,{exact:!0,path:"/profile",component:Ie}),r.a.createElement(d.b,{exact:!0,path:"/post",component:je}),r.a.createElement(d.b,{exact:!0,path:"/post/update/:id",component:Ve}),r.a.createElement(d.b,{exact:!0,path:"/comment",component:re}),r.a.createElement(d.a,{to:"/",component:w})))}var qe=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(Pe,null))}}]),a}(n.Component);a(179),a(180);l.a.render(r.a.createElement(qe,null),document.getElementById("root"))},96:function(e,t,a){},97:function(e,t,a){}},[[130,1,2]]]);
//# sourceMappingURL=main.8acd658f.chunk.js.map