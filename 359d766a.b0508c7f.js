(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),c=(n(0),n(87)),p={id:"prepare-env",title:"\u51c6\u5907\u73af\u5883"},o={unversionedId:"pnohs/prepare-env",id:"pnohs/prepare-env",isDocsHomePage:!1,title:"\u51c6\u5907\u73af\u5883",description:"\u5728 Linux \u4e0a\u6784\u5efa pnohs-alpha \u4e4b\u524d\uff0c\u8bf7\u5728\u4f60\u7684\u7cfb\u7edf\u4e2d\u5b89\u88c5\u4ee5\u4e0b\u6784\u5efa\u5de5\u5177\uff1a",source:"@site/docs/pnohs/prepare-env.md",permalink:"/docs/docs/pnohs/prepare-env",editUrl:"https://git.hpcer.dev/HPCer/hydrology/pnohs-document/blob/master/docs/docs/pnohs/prepare-env.md",lastUpdatedBy:"genshen",lastUpdatedAt:1596264054,sidebar:"pnohs",previous:{title:"\u76f8\u5173\u8bba\u6587\u4e13\u5229",permalink:"/docs/docs/pnohs/publications"},next:{title:"\u83b7\u53d6\u6e90\u4ee3\u7801",permalink:"/docs/docs/pnohs/get-source-code"}},l=[{value:"CMake",id:"cmake",children:[]},{value:"c++\u7f16\u8bd1\u5668",id:"c\u7f16\u8bd1\u5668",children:[]},{value:"MPI\u73af\u5883",id:"mpi\u73af\u5883",children:[]},{value:"pkg",id:"pkg",children:[]}],i={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5728 Linux \u4e0a\u6784\u5efa pnohs-alpha \u4e4b\u524d\uff0c\u8bf7\u5728\u4f60\u7684\u7cfb\u7edf\u4e2d\u5b89\u88c5\u4ee5\u4e0b\u6784\u5efa\u5de5\u5177\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"http://cmake.org/"}),"CMake"),", 3.13 (\u652f\u6301 -S \u9009\u9879) \u53ca\u4ee5\u4e0a\u7248\u672c\uff1b"),Object(c.b)("li",{parentName:"ul"},"\u652f\u6301C++11\u7279\u6027\u7684C++\u7f16\u8bd1\u5668\uff1b"),Object(c.b)("li",{parentName:"ul"},"MPI\u73af\u5883;"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/genshen/pkg"}),"pkg")," c/c++\u4f9d\u8d56\u7ba1\u7406\u5de5\u5177\uff0cv0.4.0\u53ca\u4ee5\u4e0a\u7248\u672c\uff1b")),Object(c.b)("h2",{id:"cmake"},"CMake"),Object(c.b)("p",null,"\u5982\u679c\u4f60\u7684\u7cfb\u7edf\u4e2d\u672a\u5b89\u88c5CMake\u6784\u5efa\u5de5\u5177\uff0c\u8bf7\u6309\u7167",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://cmake.org/"}),"\u76f8\u5173\u6587\u6863"),"\u8fdb\u884c\u4e0b\u8f7d\u5b89\u88c5\u3002",Object(c.b)("br",{parentName:"p"}),"\n","MacOS \u7cfb\u7edf\u4e2d\u53ef\u4ee5\u4f7f\u7528 brew \u5b89\u88c5"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"brew install cmake # make sure its version is higher/equal than 3.13\n")),Object(c.b)("h2",{id:"c\u7f16\u8bd1\u5668"},"c++\u7f16\u8bd1\u5668"),Object(c.b)("p",null,"\u4e3a\u4e86\u7f16\u8bd1Crystal MD\u7a0b\u5e8f\uff0c\u8981\u6c42\u4f60\u7684\u7cfb\u7edf\u4e0a\u8981\u5df2\u7ecf\u5b89\u88c5\u4e86\u76f8\u5173\u7684C++\u7f16\u8bd1\u5668\u3002\n\u5404\u7c7b\u7f16\u8bd1\u5668\u5bf9c++11\u7279\u6027\u7684\u652f\u6301\u60c5\u51b5\u53ef\u53c2\u8003",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://zh.cppreference.com/w/cpp/compiler_support#cpp11%7D"}),"\u76f8\u5173\u6587\u6863"),"\u3002"),Object(c.b)("p",null,"\u6211\u4eec\u6d4b\u8bd5\u8fc7\u4ee5\u4e0b\u7f16\u8bd1\u5668\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"GUN g++ 5.3.0 \u53ca\u4ee5\u540e\u7248\u672c"),Object(c.b)("li",{parentName:"ul"},"LLVM Clang++ 3.3 \u53ca\u4ee5\u4e0a\u7248\u672c"),Object(c.b)("li",{parentName:"ul"},"Intel icc 2017")),Object(c.b)("h2",{id:"mpi\u73af\u5883"},"MPI\u73af\u5883"),Object(c.b)("p",null,"\u8981\u6c42\u4f60\u7684\u7cfb\u7edf\u4e2d\u5b89\u88c5\u4e86\u652f\u6301MPI 2.0\u53ca\u4ee5\u540e\u6807\u51c6\u7684MPI\u73af\u5883\u3002"),Object(c.b)("h2",{id:"pkg"},"pkg"),Object(c.b)("p",null,"\u8fdb\u5165",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/genshen/pkg/releases"}),"https://github.com/genshen/pkg/releases"),"\uff0c\n\u4e0b\u8f7d\u5bf9\u5e94\u67b6\u6784\uff0c\u5bf9\u5e94\u7248\u672c(\u4e00\u822c\u4e3a\u6700\u65b0\u7248\u672c\u5373\u53ef)\u7684pkg\u6587\u4ef6\u5230\u7cfb\u7edf\u4e2d\uff0c\u5e76\u786e\u4fddpkg\u53ef\u6267\u884c\u7a0b\u5e8f\u5728\u73af\u5883\u53d8\u91cf\u4e2d\u3002"),Object(c.b)("p",null,"\u4f8b\u5982, \u5bf9\u4e8e64\u4f4damd64\u67b6\u6784\u7684Linux\u64cd\u4f5c\u7cfb\u7edf\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p ~/.local/bin\nwget https://github.com/genshen/pkg/releases/download/v0.4.1/pkg-linux-amd64 -O ~/.local/bin/pkg\nchmod +x ~/.local/bin/pkg\nexport PATH=~/.local/bin:$PATH\n")))}b.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),b=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(p,".").concat(m)]||u[m]||s[m]||c;return n?a.a.createElement(d,o(o({ref:t},i),{},{components:n})):a.a.createElement(d,o({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,p=new Array(c);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var i=2;i<c;i++)p[i]=n[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);