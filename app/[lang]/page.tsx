import { SiteHome } from "../_components/Home";
import { DocumentLanguage } from "../_components/DocumentLanguage";
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;const locale=lang==="ru"?"ru":"en";return <><DocumentLanguage lang={locale}/><SiteHome lang={locale}/></>}
