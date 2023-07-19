(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const C=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <!-- selected -->\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`;let w;const L=new Uint8Array(16);function S(){if(!w&&(w=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!w))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(L)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function E(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const P=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),v={randomUUID:P};function A(e,t,i){if(v.randomUUID&&!t&&!e)return v.randomUUID();e=e||{};const d=e.random||(e.rng||S)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=d[o];return t}return E(d)}class h{constructor(t){this.id=A(),this.description=t,this.done=!1,this.createAt=new Date}}const a={All:"all",Completed:"Completed",Pending:"Pending"},s={todo:[new h("Piedra del alma"),new h("Piedra del infinito"),new h("Piedra del tiempo"),new h("Piedra del poder"),new h("Piedra de la realidad")],filter:a.All},I=()=>{T(),console.log("InitStore ")},T=()=>{if(!localStorage.getItem("state"))return;const{todo:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));s.todo=e,s.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(s))},k=(e=a.All)=>{switch(e){case a.All:return[...s.todo];case a.Completed:return s.todo.filter(t=>t.done);case a.Pending:return s.todo.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid.`)}},U=e=>{if(!e)throw new Error("Description is required");s.todo.push(new h(e)),f()},x=e=>{s.todo=s.todo.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},D=e=>{s.todo=s.todo.filter(t=>t.id!==e),f()},O=()=>{s.todo=s.todo.filter(e=>!e.done),f()},q=(e=a.All)=>{s.filter=e,f()},F=()=>s.filter,c={addTodo:U,deleteCompleted:O,deleteTodo:D,getCurrentFilter:F,getTodo:k,initStore:I,loadStore:T,loadStore:T,setFilter:q,toggleTodo:x},M=e=>{if(!e)throw new Error("A TODO object is required");const{id:t,description:i,done:d}=e,o=`<div class="view">
                    <input class="toggle" type="checkbox" ${d?"checked":""}>
                    <label>${i}</label>
                    <button class="destroy"></button>
                  </div>
                  <input class="edit" value="Create a TodoMVC template">`,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",t),e.done&&n.classList.add("completed"),n};let b;const N=e=>{if(b||(b=document.querySelector(e)),!b)throw new Error(`Element ${e} not found`);b.innerHTML=c.getTodo(a.Pending).length};let g;const H=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element ${e} not found`);g.innerHTML="",t.forEach(i=>{g.append(M(i))})},m={ClearCompletedButton:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filtro",PendingCount:"#pending-count"},V=e=>{const t=()=>{const l=c.getTodo(c.getCurrentFilter());H(m.TodoList,l),i()},i=()=>{N(m.PendingCount)};(()=>{const l=document.createElement("div");l.innerHTML=C,document.querySelector(e).append(l),t()})();const d=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),n=document.querySelector(m.ClearCompletedButton),u=document.querySelectorAll(m.TodoFilters);d.addEventListener("keyup",l=>{l.keyCode===13&&l.target.value.trim().length!==0&&(c.addTodo(l.target.value),t(),l.target.value="")}),o.addEventListener("click",l=>{const p=l.target.closest("[data-id]");c.toggleTodo(p.getAttribute("data-id")),t()}),o.addEventListener("click",l=>{const p=l.target.className==="destroy",y=l.target.closest("[data-id]");!y||!p||(c.deleteTodo(y.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{c.deleteCompleted(),t()}),u.forEach(l=>{l.addEventListener("click",p=>{switch(u.forEach(y=>y.classList.remove("selected")),p.target.classList.add("selected"),p.target.text){case"Todos":c.setFilter(a.All);break;case"Pendientes":c.setFilter(a.Pending);break;case"Completados":c.setFilter(a.Completed);break}t()})})};c.initStore();V("#app");
