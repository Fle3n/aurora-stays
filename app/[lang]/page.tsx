import { SiteHome } from "../_components/Home";
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;return <SiteHome lang={lang==="ru"?"ru":"en"}/>}
