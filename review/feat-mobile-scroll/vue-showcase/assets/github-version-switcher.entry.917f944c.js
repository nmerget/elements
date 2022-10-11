import{r as c,h as a,H as o}from"./index.47cf15b1.js";const u=".gh-version-switcher select{max-width:196px}",l=class{constructor(r){c(this,r),this._defaultBranch="latest",this.groups=[{name:"Versions",branches:[]},{name:"Features",branches:[]},{name:"Bugfixes",branches:[]},{name:"Other",branches:[]}],this.currentBranch=this._defaultBranch,this.stripString=t=>t.replace(/[^a-zA-Z0-9-]/g,""),this.fetchFromGitHubApi=async t=>await(await fetch(t)).json(),this.setCurrentBranch=t=>{const e=window.location.href,s=t.find(i=>e.includes(i));s&&(this.currentBranch=s)},this.setBranches=t=>{const e=t.map(s=>s.name).filter(s=>s!=="gh-pages"&&!s.includes("dependabot"));e.forEach(s=>{s.startsWith("feat")||s.startsWith("feature")?this.groups[1].branches.push(s):s.startsWith("fix")||s.startsWith("bugfix")?this.groups[2].branches.push(s):this.groups[3].branches.push(s)}),this.setCurrentBranch(e)},this.setTags=t=>{const e=t.map(s=>s.name);e.forEach(s=>{this.groups[0].branches.push(s)}),this.setCurrentBranch(e)}}get defaultBranch(){return this._defaultBranch}set defaultBranch(r){this._defaultBranch=r}async componentWillLoad(){const r=this.stripString(this.owner);this.cleanOwner=r;const t=this.stripString(this.repo);this.cleanRepo=t;const e=await this.fetchFromGitHubApi(`https://api.github.com/repos/${r}/${t}/branches`);this.setBranches(e);const s=await this.fetchFromGitHubApi(`https://api.github.com/repos/${r}/${t}/tags`);this.setTags(s)}handleChange(r,t,e){if(t&&e){const i=top.location.href.split("?"),n=i[i.length-1],h=r.split(".").length===3&&r.startsWith("v");top.location=`https://${t}.github.io/${e}${this._defaultBranch===r?"":`${h?"/version":"/review"}/${r}`}/?${n}`}}render(){var r;return a(o,null,((r=this.groups)===null||r===void 0?void 0:r.length)>0&&a("db-select",{class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:t=>this.handleChange(t.target.value,this.cleanOwner,this.cleanRepo)},a("option",{value:this._defaultBranch,selected:this.currentBranch===this._defaultBranch},this._defaultBranch),this.groups.filter(t=>{var e;return((e=t.branches)===null||e===void 0?void 0:e.length)>0}).map(t=>a("optgroup",{key:t.name,label:t.name},t.branches.map((e,s)=>a("option",{key:`${t.name}-${e}-${s}`,value:e,selected:this.currentBranch===e},e))))))}};l.style=u;export{l as github_version_switcher};
