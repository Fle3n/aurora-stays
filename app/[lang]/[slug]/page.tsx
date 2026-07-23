import { DetailPage } from "../../_components/Localized";
import { DocumentLanguage } from "../../_components/DocumentLanguage";
export default async function Page({params}:{params:Promise<{lang:string;slug:string}>}){const {lang,slug}=await params;const locale=lang==="ru"?"ru":"en";return <><DocumentLanguage lang={locale}/><DetailPage lang={locale} slug={slug}/></>}
