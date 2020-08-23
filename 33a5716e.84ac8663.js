(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return b}));var l=n(2),i=n(6),a=(n(0),n(87)),r={id:"ref-config-file",title:"\u914d\u7f6e\u6587\u4ef6\u53c2\u8003"},o={unversionedId:"pnohs-alpha/ref-config-file",id:"pnohs-alpha/ref-config-file",isDocsHomePage:!1,title:"\u914d\u7f6e\u6587\u4ef6\u53c2\u8003",description:"\u793a\u4f8b",source:"@site/docs/pnohs-alpha/ref-config-file.md",permalink:"/docs/docs/pnohs-alpha/ref-config-file",editUrl:"https://git.hpcer.dev/HPCer/hydrology/pnohs-document/blob/master/docs/docs/pnohs-alpha/ref-config-file.md",lastUpdatedBy:"genshen",lastUpdatedAt:1598194610,sidebar:"pnohs-alpha",previous:{title:"\u6c34\u5faa\u73af\u6a21\u62df",permalink:"/docs/docs/pnohs-alpha/run-simulation"},next:{title:"\u4efb\u52a1\u5212\u5206\u6587\u4ef6\u53c2\u8003",permalink:"/docs/docs/pnohs-alpha/ref-dispatch-file"}},u=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",children:[{value:"<code>dispatch.dispatch_file</code>",id:"dispatchdispatch_file",children:[]},{value:"<code>simulation.run_mode</code>",id:"simulationrun_mode",children:[]},{value:"<code>simulation.time_steps</code>",id:"simulationtime_steps",children:[]},{value:"<code>simulation.input_data_path</code>",id:"simulationinput_data_path",children:[]},{value:"<code>simulation.start_time</code>",id:"simulationstart_time",children:[]},{value:"<code>simulation.end_time</code>",id:"simulationend_time",children:[]},{value:"<code>simulation.time_stride</code>",id:"simulationtime_stride",children:[]},{value:"<code>scheduler.pickup_strategy</code>",id:"schedulerpickup_strategy",children:[]},{value:"<code>models.global_runoff_model</code>",id:"modelsglobal_runoff_model",children:[]},{value:"<code>models.global_routing_model</code>",id:"modelsglobal_routing_model",children:[]},{value:"<code>output.eval_mode</code>",id:"outputeval_mode",children:[]},{value:"<code>output.output_tmp</code>",id:"outputoutput_tmp",children:[]},{value:"<code>output.result_subbasins</code>",id:"outputresult_subbasins",children:[]},{value:"<code>output.ext</code>",id:"outputext",children:[]},{value:"<code>output.outpu_path</code>",id:"outputoutpu_path",children:[]}]}],c={rightToc:u};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(l.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(a.b)("p",null,"\u4e0b\u9762\u7ed9\u51fa\u4e86\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b: "),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-toml"}),'# This is the configure file for pnohs-alpha.\n#\n# visite https://github.com/toml-lang/toml\n# and https://github.com/toml-lang/toml/blob/master/versions/cn/toml-v0.4.0.md\n# to see more information about toml standard.\n#\n\ntitle = "Configure file for pnohs"\nversion = "0.1.0"\n\n[dispatch]\ndispatch_file = "dispatch.dis"\n\n[simulation]\nrun_mode = 0\n# time_steps = 6\nmax_iter = 20\ninput_data_path = "model_input"\n\nstart_time = "2006-01-01 00:00"\nend_time = "2006-01-06 00:00"\ntime_stride = 24\n\n[scheduler]\npickup_strategy = "ring"\n\n[models]\nglobal_runoff_model = "xaj"\nglobal_routing_model = "mskg"\n[models.xinanjiang]\n    name = "xaj"\n[models.sac]\n    name = "sac"\n[models.muskingum]\n    name = "mskg"\n[models.diffusive_wave]\n    name = "dswv"\n\n[output]\neval_mode = true\noutput_tmp = true\nresult_subbasins = []\npath = "outputs"\next = "dump" \n')),Object(a.b)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),Object(a.b)("p",null,"\u4ee5\u4e0b\u9010\u9879\u8bf4\u660e\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5404\u4e2a\u914d\u7f6e\u9879:"),Object(a.b)("h3",{id:"dispatchdispatch_file"},Object(a.b)("inlineCode",{parentName:"h3"},"dispatch.dispatch_file")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aString\uff0c\u5fc5\u9009"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u4e8c\u8fdb\u5236\u683c\u5f0f\u7684\u4efb\u52a1\u5212\u5206\u6587\u4ef6\u8def\u5f84\uff0c\u76f8\u5bf9\u4e8e\u7a0b\u5e8f\u6267\u884c\u65f6\u6240\u5728\u76ee\u5f55\uff1b"),Object(a.b)("li",{parentName:"ul"},'\u793a\u4f8b\uff1a"dispatch.dis"')),Object(a.b)("h3",{id:"simulationrun_mode"},Object(a.b)("inlineCode",{parentName:"h3"},"simulation.run_mode")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aInteger\uff0c\u5fc5\u9009"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u8fd0\u884c\u6a21\u5f0f\uff0c0 \u4e3a\u6c34\u5faa\u73af\u6a21\u62df\u6a21\u5f0f\uff0c1 \u4e3a\u53c2\u6570\u7387\u5b9a\u6a21\u5f0f\uff0c2 \u4e3a\u96c6\u5408\u9884\u62a5\u6a21\u5f0f\uff1b")),Object(a.b)("h3",{id:"simulationtime_steps"},Object(a.b)("inlineCode",{parentName:"h3"},"simulation.time_steps")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aInteger"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u6c34\u5faa\u73af\u6a21\u62df\u7684\u65f6\u95f4\u6b65\u6570\uff1b")),Object(a.b)("h3",{id:"simulationinput_data_path"},Object(a.b)("inlineCode",{parentName:"h3"},"simulation.input_data_path")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aString\uff0c\u5fc5\u9009"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u5404\u4e2a\u5b50\u6d41\u57df\u4e0a\u7684\u9a71\u52a8\u6a21\u578b\u8fd0\u884c\u7684\u6570\u636e\u6587\u4ef6\u6240\u5728\u8def\u5f84\uff0c\u6570\u636e\u6587\u4ef6\u53c2\u8003",Object(a.b)("a",Object(l.a)({parentName:"li"},{href:"/docs/docs/pnohs-alpha/ref-model-input-file"}),"\u6a21\u578b\u8f93\u5165\u6587\u4ef6"),"\u5c0f\u8282\uff1b"),Object(a.b)("li",{parentName:"ul"},'\u793a\u4f8b\uff1a"model_input"')),Object(a.b)("h3",{id:"simulationstart_time"},Object(a.b)("inlineCode",{parentName:"h3"},"simulation.start_time")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aDateTime\uff0c\u5fc5\u9009"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u6c34\u5faa\u73af\u6a21\u62df\u7684\u5f00\u59cb\u65f6\u95f4\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a2006-01-01 00:00")),Object(a.b)("h3",{id:"simulationend_time"},Object(a.b)("inlineCode",{parentName:"h3"},"simulation.end_time")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aDateTime\uff0c\u5fc5\u9009"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u6c34\u5faa\u73af\u6a21\u62df\u7684\u7ed3\u675f\u65f6\u95f4\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a2006-01-01 00:00")),Object(a.b)("h3",{id:"simulationtime_stride"},Object(a.b)("inlineCode",{parentName:"h3"},"simulation.time_stride")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aInteger\uff0c\u5fc5\u9009"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u6c34\u5faa\u73af\u6a21\u62df\u7684\u5355\u65f6\u95f4\u6b65\u957f\uff1b\u5b9e\u9645\u4e0a\uff0c\u5e94\u6709 \u6a21\u62df\u7ed3\u675f\u65f6\u95f4 = \u6a21\u62df\u5f00\u59cb\u65f6\u95f4 + \u65f6\u95f4\u6b65\u6570 x \u65f6\u95f4\u6b65\u957f\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u5355\u4f4d\uff1a\u5c0f\u65f6(h)"),Object(a.b)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a24")),Object(a.b)("h3",{id:"schedulerpickup_strategy"},Object(a.b)("inlineCode",{parentName:"h3"},"scheduler.pickup_strategy")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aString\uff0c\u5fc5\u9009"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u5e76\u884c\u6a21\u62df\u4e2d\u7684\u8c03\u5ea6\u7b56\u7565\uff0c\u53ef\u9009\u503c\u4e3a ",Object(a.b)("inlineCode",{parentName:"li"},"ring"),"(\u73af\u8c03\u5ea6\u7b56\u7565)\u6216",Object(a.b)("inlineCode",{parentName:"li"},"longest"),"(\u6700\u957f\u6c47\u6d41\u961f\u5217\u8c03\u5ea6\u7b56\u7565)\uff1b"),Object(a.b)("li",{parentName:"ul"},'\u793a\u4f8b\uff1a"ring"')),Object(a.b)("h3",{id:"modelsglobal_runoff_model"},Object(a.b)("inlineCode",{parentName:"h3"},"models.global_runoff_model")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aString\uff0c\u5fc5\u9009"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u9ed8\u8ba4\u7684\u6a21\u578b\u4ea7\u6d41\u6a21\u578b\uff0c\u53ef\u7528\u7684\u4ea7\u6d41\u6a21\u578b\u53ef\u4ee5\u901a\u8fc7",Object(a.b)("inlineCode",{parentName:"li"},"pnohs-alpha list"),"\u547d\u4ee4\u67e5\u770b\uff1b"),Object(a.b)("li",{parentName:"ul"},'\u793a\u4f8b\uff1a"xaj"')),Object(a.b)("h3",{id:"modelsglobal_routing_model"},Object(a.b)("inlineCode",{parentName:"h3"},"models.global_routing_model")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aString\uff0c\u5fc5\u9009"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u9ed8\u8ba4\u7684\u6a21\u578b\u6c47\u6d41\u6a21\u578b\uff0c\u53ef\u7528\u7684\u6c47\u6d41\u6a21\u578b\u53ef\u4ee5\u901a\u8fc7",Object(a.b)("inlineCode",{parentName:"li"},"pnohs-alpha list"),"\u547d\u4ee4\u67e5\u770b\uff1b"),Object(a.b)("li",{parentName:"ul"},'\u793a\u4f8b\uff1a"mskg"')),Object(a.b)("h3",{id:"outputeval_mode"},Object(a.b)("inlineCode",{parentName:"h3"},"output.eval_mode")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aBoolean"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u63a7\u5236\u662f\u5426\u8f93\u51fa\u8bc4\u4ef7\u6307\u6807\u7684\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse"),Object(a.b)("li",{parentName:"ul"},"\u793a\u4f8b\uff1atrue")),Object(a.b)("h3",{id:"outputoutput_tmp"},Object(a.b)("inlineCode",{parentName:"h3"},"output.output_tmp")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aBoolean"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u63a7\u5236\u662f\u5426\u8f93\u51fa\u6a21\u578b\u7684\u4e2d\u95f4\u7ed3\u679c\uff1b"),Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse"),Object(a.b)("li",{parentName:"ul"},"\u793a\u4f8b\uff1afalse")),Object(a.b)("h3",{id:"outputresult_subbasins"},Object(a.b)("inlineCode",{parentName:"h3"},"output.result_subbasins")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aInteger Array"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u63a7\u5236\u8f93\u51fa\u54ea\u4e9b\u5b50\u6d41\u57df\u7684\u5404\u4e2a\u65f6\u95f4\u6b65\u7684\u6a21\u62df\u7ed3\u679c\uff08\u5b50\u6d41\u57df\u7684\u6d41\u91cf\u503c\uff09\uff1b\u82e5\u4e3a\u7a7a\u5219\u8f93\u51fa\u6240\u6709\u5b50\u6d41\u57df\u7684\u6d41\u91cf\u503c\uff1b\n\u6bcf\u4e00\u9879\u662f\u4e00\u4e2a\u5b50\u6d41\u57dfid\uff0c\u5176\u4e2d\u5b50\u6d41\u57dfid\u4e3a\u4e00\u4e2a\u6b63\u6574\u6570\uff0c\u4e14\u5404\u4e2a\u5b50\u6d41\u57df\u552f\u4e00\uff0c\u7528\u4ee5\u6807\u793a\u6bcf\u4e00\u4e2a\u5b50\u6d41\u57df;"),Object(a.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a[]"),Object(a.b)("li",{parentName:"ul"},"\u793a\u4f8b\uff1a","[1, 2, 6]")),Object(a.b)("h3",{id:"outputext"},Object(a.b)("inlineCode",{parentName:"h3"},"output.ext")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aString\uff0c\u5fc5\u9009"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u5b50\u6d41\u57df\u6a21\u62df\u7ed3\u679c\u6587\u4ef6\u7684\u6269\u5c55\u540d\uff1b"),Object(a.b)("li",{parentName:"ul"},'\u793a\u4f8b\uff1a"dump"')),Object(a.b)("h3",{id:"outputoutpu_path"},Object(a.b)("inlineCode",{parentName:"h3"},"output.outpu_path")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aString\uff0c\u5fc5\u9009"),Object(a.b)("li",{parentName:"ul"},"\u8bf4\u660e\uff1a\u8f93\u51fa\u6587\u4ef6\u5b58\u653e\u7684\u76ee\u5f55\uff0c\u8be5\u76ee\u5f55\u4e0b\u53ef\u80fd\u4f1a\u8f93\u51fa\u5b50\u6d41\u57df\u7ed3\u679c\u3001\u8bc4\u4ef7\u6307\u6807\u3001\u6a21\u578b\u4e2d\u95f4\u7ed3\u679c\u7b49\u6587\u4ef6\uff1b\u8bf7\u786e\u4fdd\u8be5\u76ee\u5f55\u5df2\u7ecf\u5b58\u5728\uff1b"),Object(a.b)("li",{parentName:"ul"},'\u793a\u4f8b\uff1a"outputs"')))}b.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var l=n(0),i=n.n(l);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,r=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=b(n),m=l,s=p["".concat(r,".").concat(m)]||p[m]||d[m]||a;return n?i.a.createElement(s,o(o({ref:t},c),{},{components:n})):i.a.createElement(s,o({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<a;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);