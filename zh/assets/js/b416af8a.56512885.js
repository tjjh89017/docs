"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[2826],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(a),c=n,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||p;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<p;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66053:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const p={sidebar_position:1,sidebar_label:"Upgrading Harvester",title:"",keywords:["Harvester","harvester","Rancher","rancher","Harvester Upgrade"],Description:"Harvester provides two ways to upgrade. Users can either upgrade using the ISO image or upgrade through the UI."},i="Upgrading Harvester",o={unversionedId:"upgrade/automatic",id:"upgrade/automatic",title:"",description:"Upgrade support matrix",source:"@site/docs/upgrade/automatic.md",sourceDirName:"upgrade",slug:"/upgrade/automatic",permalink:"/zh/next/upgrade/automatic",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/upgrade/automatic.md",tags:[],version:"current",lastUpdatedAt:1664266430,formattedLastUpdatedAt:"2022\u5e749\u670827\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Upgrading Harvester",title:"",keywords:["Harvester","harvester","Rancher","rancher","Harvester Upgrade"],Description:"Harvester provides two ways to upgrade. Users can either upgrade using the ISO image or upgrade through the UI."},sidebar:"tutorialSidebar",previous:{title:"Air Gapped Environment",permalink:"/zh/next/airgap"},next:{title:"Upgrade from v1.0.2 to v1.0.3",permalink:"/zh/next/upgrade/v1-0-2-to-v1-0-3"}},s={},l=[{value:"Upgrade support matrix",id:"upgrade-support-matrix",level:2},{value:"Start an upgrade",id:"start-an-upgrade",level:2},{value:"Prepare an air-gapped upgrade",id:"prepare-an-air-gapped-upgrade",level:2}],u={toc:l};function d(e){let{components:t,...p}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"upgrading-harvester"},"Upgrading Harvester"),(0,n.kt)("h2",{id:"upgrade-support-matrix"},"Upgrade support matrix"),(0,n.kt)("p",null,"The following table shows the upgrade path of all supported versions."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Upgrade from version"),(0,n.kt)("th",{parentName:"tr",align:null},"Supported new version(s)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/next/upgrade/v1-0-2-to-v1-0-3"},"v1.0.2")),(0,n.kt)("td",{parentName:"tr",align:null},"v1.0.3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/next/upgrade/previous-releases/v1-0-1-to-v1-0-2"},"v1.0.1")),(0,n.kt)("td",{parentName:"tr",align:null},"v1.0.2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/zh/next/upgrade/previous-releases/v1-0-0-to-v1-0-1"},"v1.0.0")),(0,n.kt)("td",{parentName:"tr",align:null},"v1.0.1")))),(0,n.kt)("h2",{id:"start-an-upgrade"},"Start an upgrade"),(0,n.kt)("p",null,"Note we are still working towards zero-downtime upgrade, due to some known issues please follow the steps below before you upgrade your Harvester cluster:"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Before you upgrade your Harvester cluster, we highly recommend:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Shutting down all your VMs (Harvester GUI -> Virtual Machines -> Select VMs -> Actions -> Stop)."),(0,n.kt)("li",{parentName:"ul"},"Back up your VMs."))),(0,n.kt)("li",{parentName:"ul"},"Do not operate the cluster during an upgrade. For example, creating new VMs, uploading new images, etc."),(0,n.kt)("li",{parentName:"ul"},"Make sure your hardware meets the ",(0,n.kt)("strong",{parentName:"li"},"preferred")," ",(0,n.kt)("a",{parentName:"li",href:"/zh/next/#hardware-requirements"},"hardware requirements"),". This is due to there will be intermediate resources consumed by an upgrade."),(0,n.kt)("li",{parentName:"ul"},"Make sure each node has at least 25 GB of free space (",(0,n.kt)("inlineCode",{parentName:"li"},"df -h /usr/local/"),")."))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure all nodes' times are in sync. Using an NTP server to synchronize time is recommended. If an NTP server is not configured during the installation, you can manually add an NTP server ",(0,n.kt)("strong",{parentName:"p"},"on each node"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ sudo -i\n\n# Add time servers\n$ vim /etc/systemd/timesyncd.conf\n[ntp]\nNTP=0.pool.ntp.org\n\n# Enable and start the systemd-timesyncd\n$ timedatectl set-ntp true\n\n# Check status\n$ sudo timedatectl status\n"))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"NICs that connect to a PCI bridge might be renamed after an upgrade. Please check the ",(0,n.kt)("a",{parentName:"li",href:"https://harvesterhci.io/kb/nic-naming-scheme"},"knowledge base article")," for further information."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure to read the Warning paragraph at the top of this document first.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Harvester checks if there are new upgradable versions periodically. If there are new versions, an upgrade button shows up on the Dashboard page."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If the cluster is in an air-gapped environment, please see ",(0,n.kt)("a",{parentName:"li",href:"#prepare-an-air-gapped-upgrade"},"Prepare an air-gapped upgrade")," section first. You can also speed up the ISO download by using the approach in that section."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Navigate to Harvester GUI and click the upgrade button on the Dashboard page."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:a(60369).Z,width:"1910",height:"812"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select a version to start upgrading."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:a(88045).Z,width:"1030",height:"598"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click the circle on the top to display the upgrade progress.\n",(0,n.kt)("img",{src:a(40826).Z,width:"1910",height:"1124"})))),(0,n.kt)("h2",{id:"prepare-an-air-gapped-upgrade"},"Prepare an air-gapped upgrade"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to check ",(0,n.kt)("a",{parentName:"p",href:"#upgrade-support-matrix"},"Upgrade support matrix")," section first about upgradable versions.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download a Harvester ISO file from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"release pages"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Save the ISO to a local HTTP server. Assume the file is hosted at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://10.10.0.1/harvester.iso"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download the version file from release pages, for example, ",(0,n.kt)("inlineCode",{parentName:"p"},"https://releases.rancher.com/harvester/{version}/version.yaml")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"isoURL")," value in the ",(0,n.kt)("inlineCode",{parentName:"p"},"version.yaml")," file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"apiVersion: harvesterhci.io/v1beta1\nkind: Version\nmetadata:\n  name: v1.0.2\n  namespace: harvester-system\nspec:\n  isoChecksum: <SHA-512 checksum of the ISO> \n  isoURL: http://10.10.0.1/harvester.iso  # change to local ISO URL\n  releaseDate: '20220512'\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Assume the file is hosted at ",(0,n.kt)("inlineCode",{parentName:"p"},"http://10.10.0.1/version.yaml"),".")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Log in to one of your control plane nodes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Become root and create a version:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"rancher@node1:~> sudo -i\nrancher@node1:~> kubectl create -f http://10.10.0.1/version.yaml\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An upgrade button should show up on the Harvester GUI Dashboard page."))))}d.isMDXComponent=!0},60369:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_button-cba6e7e3b12154a0c675fe149c719d4c.png"},40826:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_progress-9f571e740ff5c16d9fc0fc6518ee7b73.png"},88045:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upgrade_select_version-cee0dbf88994b0b636f3df5ed2e47ae4.png"}}]);