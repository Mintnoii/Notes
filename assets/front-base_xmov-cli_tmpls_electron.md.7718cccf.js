import{_ as s,c as n,o as a,d as l}from"./app.b507ab9c.js";const i=JSON.parse('{"title":"XMOV \u524D\u7AEF vue3-electron-template \u9879\u76EE\u6A21\u677F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B80\u4ECB","slug":"\u7B80\u4ECB","link":"#\u7B80\u4ECB","children":[]},{"level":2,"title":"\u5F00\u59CB","slug":"\u5F00\u59CB","link":"#\u5F00\u59CB","children":[]},{"level":2,"title":"\u76EE\u5F55","slug":"\u76EE\u5F55","link":"#\u76EE\u5F55","children":[]},{"level":2,"title":"\u529F\u80FD\u6A21\u5757","slug":"\u529F\u80FD\u6A21\u5757","link":"#\u529F\u80FD\u6A21\u5757","children":[{"level":3,"title":"\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6/\u8DEF\u7531","slug":"\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6-\u8DEF\u7531","link":"#\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6-\u8DEF\u7531","children":[]},{"level":3,"title":"IPC \u901A\u4FE1","slug":"ipc-\u901A\u4FE1","link":"#ipc-\u901A\u4FE1","children":[]},{"level":3,"title":"\u7A97\u53E3\u7BA1\u7406","slug":"\u7A97\u53E3\u7BA1\u7406","link":"#\u7A97\u53E3\u7BA1\u7406","children":[]},{"level":3,"title":"\u73AF\u5883\u53D8\u91CF","slug":"\u73AF\u5883\u53D8\u91CF","link":"#\u73AF\u5883\u53D8\u91CF","children":[]},{"level":3,"title":"\u7248\u672C\u66F4\u65B0","slug":"\u7248\u672C\u66F4\u65B0","link":"#\u7248\u672C\u66F4\u65B0","children":[]}]}],"relativePath":"front-base/xmov-cli/tmpls/electron.md"}'),p={name:"front-base/xmov-cli/tmpls/electron.md"},o=l(`<h1 id="xmov-\u524D\u7AEF-vue3-electron-template-\u9879\u76EE\u6A21\u677F" tabindex="-1">XMOV \u524D\u7AEF vue3-electron-template \u9879\u76EE\u6A21\u677F <a class="header-anchor" href="#xmov-\u524D\u7AEF-vue3-electron-template-\u9879\u76EE\u6A21\u677F" aria-hidden="true">#</a></h1><h2 id="\u7B80\u4ECB" tabindex="-1">\u7B80\u4ECB <a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>vue3-electron-template \u662F\u4E00\u4E2A\u57FA\u4E8E Vue3\u3001Vite3\u3001TypeScript\u3001Pinia\u3001Element Plus \u548C Windi CSS \u7684 Electron \u6A21\u7248\u3002\u5B83\u62E5\u6709\u81EA\u52A8\u6CE8\u518C\u8DEF\u7531\u3001\u81EA\u52A8\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6\u3001IPC \u901A\u4FE1\u53CA\u767D\u540D\u5355\u3001\u5168\u5C40\u7A97\u53E3\u7BA1\u7406\u3001\u7248\u672C\u81EA\u52A8\u66F4\u65B0\u7B49\u529F\u80FD\u3002\u5F00\u7BB1\u5373\u7528\uFF0C\u53EF\u6839\u636E\u9879\u76EE\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u4E8C\u6B21\u62C6\u88C5\u3002</p><h2 id="\u5F00\u59CB" tabindex="-1">\u5F00\u59CB <a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a></h2><ol><li><code>git clone git@git.xmov.ai:frontend/vue3-electron-template.git</code></li><li><code>cd vue3-electron-template</code></li><li><code>yarn i</code></li><li><code>yarn dev</code></li></ol><h2 id="\u76EE\u5F55" tabindex="-1">\u76EE\u5F55 <a class="header-anchor" href="#\u76EE\u5F55" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .vscode                    // vscode \u63D2\u4EF6\u548C\u8BBE\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 extensions.json        // vscode \u63A8\u8350\u7684\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 settings.json          // vscode \u914D\u7F6E\uFF08\u5728\u8BE5\u9879\u76EE\u4E2D\u751F\u6548\uFF0C\u53EF\u4EE5\u590D\u5236\u5230\u7528\u6237\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 dist</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 release                    // \u6253\u5305\u540E\u5B89\u88C5\u5305\u6240\u5728\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 electron                   // electron \u76F8\u5173\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 main                   // \u4E3B\u8FDB\u7A0B\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 ipc-event          // ipc \u901A\u4FE1\u4E8B\u4EF6\u76D1\u542C\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 check-update       // \u7248\u672C\u66F4\u65B0\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 electron-windows   // \u5168\u5C40\u7A97\u53E3\u7BA1\u7406\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 index.ts           // \u4E3B\u8FDB\u7A0B\u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 preload                // \u9884\u52A0\u8F7D\u6A21\u5757\u4EE3\u7801</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502       \u251C\u2500\u2500 white-channel.ts   // ipc \u901A\u4FE1\u767D\u540D\u5355</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502       \u2514\u2500\u2500 index.ts           // \u9884\u52A0\u8F7D\u6A21\u5757\u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 public                     // \u516C\u5171\u76EE\u5F55\uFF08\u6587\u4EF6\u5939\u91CC\u9762\u7684\u8D44\u6E90\u6253\u5305\u540E\u4F1A\u5728 dist \u76EE\u5F55\u4E0B\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 tray-icon.png          // \u7CFB\u7EDF\u6258\u76D8\u56FE\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 src</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 api                    // \u8BF7\u6C42\u63A5\u53E3\u76F8\u5173</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 assets                 // \u9759\u6001\u8D44\u6E90</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 imgs               // \u56FE\u7247</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 svg-icon           // \u672C\u5730 svg \u56FE\u6807</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 biz-components         // \u5168\u5C40\u4E1A\u52A1\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 components             // \u5168\u5C40 ui \u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 hooks                  // \u7EC4\u5408\u5F0F\u7684\u51FD\u6570</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 layouts                // \u5E03\u5C40\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 plugins                // \u63D2\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 auto-register      // \u81EA\u52A8\u6CE8\u518C\u8DEF\u7531\u548C\u5168\u5C40\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 axios              // \u7F51\u7EDC\u8BF7\u6C42</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 renderer-ipc       // ipc \u901A\u4FE1</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 router                 // vue \u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 index              // \u8DEF\u7531\u5B88\u536B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 routes             // \u58F0\u660E\u7684\u56FA\u5B9A\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 store                  // pinia \u72B6\u6001\u7BA1\u7406</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 app                // \u6574\u4E2A app \u5171\u4EAB</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 styles                 // \u5168\u5C40\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u2514\u2500\u2500 scss               // scss</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 typings                // TS \u7C7B\u578B\u58F0\u660E\u6587\u4EF6 (*.d.ts)</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 api.d.ts           // \u8BF7\u6C42\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 env.d.ts           // vue \u8DEF\u7531\u63CF\u8FF0\u548C\u8BF7\u6C42\u73AF\u5883\u76F8\u5173\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2502   \u251C\u2500\u2500 global.d.ts        // \u5168\u5C40\u901A\u7528\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 views                  // \u9875\u9762\uFF0C\u76EE\u5F55\u4E0B vue \u6587\u4EF6\u81EA\u52A8\u751F\u6210\u8DEF\u7531</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u251C\u2500\u2500 App.vue                // vue \u6587\u4EF6\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2502   \u2514\u2500\u2500 main.ts                // \u9879\u76EE\u5165\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .eslintrc.js               // eslint \u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 .gitignore                 // \u5FFD\u7565 git \u63D0\u4EA4\u7684\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 electron-builder.json5     // electron \u6253\u5305\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 auto-imports.d.ts          // \u52A8\u6001\u5F15\u7528\u7684\u7EC4\u4EF6\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 components.d.ts            // \u81EA\u52A8\u5F15\u5165\u7684\u7EC4\u4EF6\u7684\u7C7B\u578B\u58F0\u660E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 package-env.ts             // electron \u6253\u5305\u540E\u73AF\u5883\u53D8\u91CF\u8BFB\u53D6\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 package.json               // npm \u4F9D\u8D56\u63CF\u8FF0\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 set-package-env.js         // \u6253\u5305\u540E\u73AF\u5883\u53D8\u91CF\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 README.md                  // \u9879\u76EE\u4ECB\u7ECD\u6587\u6863</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 tsconfig.json              // TS \u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 windi.config.js            // \u539F\u5B50 css \u6846\u67B6 windicss \u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u251C\u2500\u2500 vite.config.ts             // vite \u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500\u2500 yarn.lock                  // npm \u5305\u7BA1\u7406\u5668 yarn \u4F9D\u8D56\u9501\u5B9A\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u529F\u80FD\u6A21\u5757" tabindex="-1">\u529F\u80FD\u6A21\u5757 <a class="header-anchor" href="#\u529F\u80FD\u6A21\u5757" aria-hidden="true">#</a></h2><h3 id="\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6-\u8DEF\u7531" tabindex="-1">\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6/\u8DEF\u7531 <a class="header-anchor" href="#\u81EA\u52A8\u6CE8\u518C\u7EC4\u4EF6-\u8DEF\u7531" aria-hidden="true">#</a></h3><ul><li>\u81EA\u52A8\u6CE8\u518C src/components\uFF0Csrc/biz-components \u76EE\u5F55\u4E0B vue \u6587\u4EF6\u4E3A\u5168\u5C40\u7EC4\u4EF6\uFF0C\u81EA\u52A8\u5F15\u5165\u3002</li><li>\u81EA\u52A8\u6CE8\u518C src/view \u76EE\u5F55\u4E0B vue \u6587\u4EF6\u4E2D defineOptions \u58F0\u660E\u4E86 isRouter: true \u7684\u7EC4\u4EF6\u4E3A\u8DEF\u7531\u3002</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#82AAFF;">defineOptions</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Home</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">isRouter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// layout: &#39;MainLayout&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><br><h3 id="ipc-\u901A\u4FE1" tabindex="-1">IPC \u901A\u4FE1 <a class="header-anchor" href="#ipc-\u901A\u4FE1" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// \u6E32\u67D3\u8FDB\u7A0B -&gt; \u4E3B\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ipcSend</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/plugins/renderer-ipc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">ipcSend</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">white-channel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> params)</span></span>
<span class="line"><span style="color:#A6ACCD;">ipcMain</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">white-channel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6E32\u67D3\u8FDB\u7A0B -&gt; \u4E3B\u8FDB\u7A0B -&gt; \u6E32\u67D3\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ipcInvoke</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/plugins/renderer-ipc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">ipcInvoke</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">white-channel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> params)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ipcMain</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">handle</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">white-channel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">params</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">params</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4E3B\u8FDB\u7A0B -&gt; \u6E32\u67D3\u8FDB\u7A0B</span></span>
<span class="line"><span style="color:#A6ACCD;">win</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">webContent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">white-channel</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data)</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ipcReceive</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/plugins/renderer-ipc</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#82AAFF;">ipcReceive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">white-channel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u8BF4\u660E\uFF1A1. \u793A\u4F8B\u4E2D ipc \u901A\u4FE1\u7684 white-channel \u9700\u8981\u5728\u76EE\u5F55\uFF1Aelectron/preload/white-channel.ts \u4E2D\u8FDB\u884C\u7C7B\u578B\u58F0\u660E\u3002<br>2. \u793A\u4F8B\u4E2D ipcMain \u9700\u8981\u5728\u76EE\u5F55\uFF1Aelectron/main/ipc-event \u5185\u6302\u8F7D\u3002</p></blockquote><br><h3 id="\u7A97\u53E3\u7BA1\u7406" tabindex="-1">\u7A97\u53E3\u7BA1\u7406 <a class="header-anchor" href="#\u7A97\u53E3\u7BA1\u7406" aria-hidden="true">#</a></h3><ul><li>\u5168\u5C40\u7A97\u53E3\u96C6\u5408</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> ElecWindows </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./electron-windows</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> elecWindows </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ElecWindows</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElecWindows</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">windows group: </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">elecWindows</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">group</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// windows group: { &#39;1&#39;: { route: &#39;&#39;, isMultiWindow: false, isMainWin: true } }</span></span>
<span class="line"></span></code></pre></div><ul><li>\u521B\u5EFA\u7A97\u53E3</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// \u6E32\u67D3\u8FDB\u7A0B\u521B\u5EFA</span></span>
<span class="line"><span style="color:#82AAFF;">ipcSend</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">window-new</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> windowParams)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4E3B\u8FDB\u7A0B\u521B\u5EFA</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> ElecWindows </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./electron-windows</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> elecWindows </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ElecWindows</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElecWindows</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">elecWindows</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createWindow</span><span style="color:#A6ACCD;">(windowParams)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u8BF4\u660E\uFF1A\u901A\u8FC7 ElecWindows \u7C7B\u7EDF\u4E00\u7BA1\u7406\u5E94\u7528\u7A97\u53E3\uFF0C\u7CFB\u7EDF\u6258\u76D8\u7B49\uFF1B\u66F4\u65B9\u4FBF\u7684\u67E5\u627E\uFF0C\u5173\u95ED\uFF0C\u914D\u7F6E\u7A97\u53E3\u3002</p></blockquote><br><h3 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1">\u73AF\u5883\u53D8\u91CF <a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// \u6253\u4E00\u4E2A\u5F00\u53D1\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn </span><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6253\u4E00\u4E2A\u6D4B\u8BD5\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn </span><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6253\u4E00\u4E2A\u751F\u4EA7\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn build</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u8BF4\u660E\uFF1A\u6253\u5305\u65F6\u901A\u8FC7\u91CD\u5199 package-env.ts \u6587\u4EF6\uFF0C\u8BBE\u7F6E\u6253\u5305\u540E\u73AF\u5883\u53D8\u91CF\uFF1B\u6253\u5305\u540E\u8BFB\u53D6 packageEnv \u73AF\u5883\u53D8\u91CF\uFF0C\u8FDB\u884C\u5DEE\u5F02\u5316\u64CD\u4F5C\u3002</p></blockquote><br><h3 id="\u7248\u672C\u66F4\u65B0" tabindex="-1">\u7248\u672C\u66F4\u65B0 <a class="header-anchor" href="#\u7248\u672C\u66F4\u65B0" aria-hidden="true">#</a></h3><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// 1.check-update \u6587\u4EF6\u4E2D\u914D\u7F6E\u66F4\u65B0\u5305\u7684\u670D\u52A1\u5668\u8D44\u6E90\u5730\u5740</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> serverMap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">dev</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">devServerUrl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">testServerUrl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">production</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">productionServerUrl</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">// 2.electron-build.json5 \u6587\u4EF6\u4E2D\u914D\u7F6E\u76F8\u5E94\u7684\u670D\u52A1\u5668\u8D44\u6E90\u57DF\u540D</span></span>
<span class="line"><span style="color:#FFCB6B;">publish</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">provider</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">generic</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://xxx.com/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#676E95;">// 3. \u6E32\u67D3\u8FDB\u7A0B\u5C55\u793A\u5BF9\u5E94\u7684\u66F4\u65B0\u8FDB\u5EA6</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ipcReceive</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@/plugins/rendererIpc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">ipcReceive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update-start</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7248\u672C\u68C0\u6D4B\u4E2D\u3002..</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">ipcReceive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update-progress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">\u7248\u672C\u66F4\u65B0\u4E2D\u3002..(</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">percent</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toFixed</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">%)\uFF0C\u8BF7\u52FF\u5173\u95ED\u7CFB\u7EDF</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">ipcReceive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update-end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7248\u672C\u66F4\u65B0\u5B8C\u6210</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">ipcReceive</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update-err</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u7248\u672C\u66F4\u65B0\u5931\u8D25</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u8BF4\u660E\uFF1A\u7248\u672C\u81EA\u52A8\u66F4\u65B0\u9700\u8981\u63D0\u4F9B\u7EBF\u4E0A oss \u8D44\u6E90\u5730\u5740\u5B58\u653E\u6700\u65B0\u7248\u672C\u6253\u5305\u8D44\u6E90\uFF0C\u4EE5\u4F9B\u8BBF\u95EE\u3002</p></blockquote>`,30),e=[o];function c(t,r,D,y,A,F){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};