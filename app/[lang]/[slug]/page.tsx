import { DetailPage } from "../../_components/Localized";
export default async function Page({params}:{params:Promise<{lang:string;slug:string}>}){const {lang,slug}=await params;return <DetailPage lang={lang==="ru"?"ru":"en"} slug={slug}/>}
