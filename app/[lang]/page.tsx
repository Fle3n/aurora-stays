import { LocalizedLanding } from "../_components/Localized";
export default async function Page({params}:{params:Promise<{lang:string}>}){const {lang}=await params;return <LocalizedLanding lang={lang==="ru"?"ru":"en"}/>}
