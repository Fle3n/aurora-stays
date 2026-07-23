type Lang = "en" | "ru";
const content = {
  en: {
    brand: "AURORA", back: "Back home", switchTo: "/ru", switchLabel: "RU",
    title: "The Arctic, at your own pace.", lead: "Private cabins, thoughtful rituals and the wildest sky in the north.",
    pages: {
      stays: { label: "Stays", eyebrow: "THREE WAYS TO DISAPPEAR", title: "Choose your shelter.", intro: "Every cabin is private, off-grid and positioned for an uninterrupted view of the northern sky.", cards: [["Glass House","Panorama roof · private sauna · 2 guests"],["Pine Shelter","Forest deck · fireplace · 4 guests"],["Sky Loft","Elevated view · outdoor bath · 2 guests"]], note: "From €390 per night · breakfast and transfers included." },
      journal: { label: "Journal", eyebrow: "FIELD NOTES / 68° NORTH", title: "Stories from the quiet.", intro: "A seasonal guide to the landscape, people and small rituals that shape a stay above the Arctic Circle.", cards: [["The blue hour","Why winter light in Lyngen feels unlike anywhere else."],["A guide to silence","Five places where the mountains do all the talking."],["Dinner by fire","Local cod, cloudberries and a very slow evening."]], note: "New field notes arrive once a month." }
    }
  },
  ru: {
    brand: "AURORA", back: "На главную", switchTo: "/", switchLabel: "EN",
    title: "Арктика в вашем ритме.", lead: "Уединённые домики, северные ритуалы и самое дикое небо на земле.",
    pages: {
      stays: { label: "Домики", eyebrow: "ТРИ СПОСОБА ИСЧЕЗНУТЬ", title: "Выберите своё укрытие.", intro: "Каждый домик полностью автономен и расположен так, чтобы ничто не мешало смотреть на северное сияние.", cards: [["Стеклянный дом","Панорамная крыша · сауна · 2 гостя"],["Сосновый приют","Терраса в лесу · камин · 4 гостя"],["Небесный лофт","Вид с высоты · купель · 2 гостя"]], note: "От €390 за ночь · завтрак и трансфер включены." },
      journal: { label: "Журнал", eyebrow: "ПОЛЕВЫЕ ЗАМЕТКИ / 68° С.Ш.", title: "Истории из тишины.", intro: "Сезонный путеводитель по ландшафту, людям и маленьким ритуалам за Полярным кругом.", cards: [["Синий час","Почему зимний свет в Люнгене не похож ни на что другое."],["Путеводитель по тишине","Пять мест, где говорят только горы."],["Ужин у огня","Треска, морошка и очень медленный вечер."]], note: "Новые заметки появляются раз в месяц." }
    }
  }
} as const;

export function LocalizedLanding({ lang }: { lang: Lang }) {
  const c = content[lang];
  return <main className="locale-home"><header><a href="/">{c.brand}</a><a href={c.switchTo}>{c.switchLabel}</a></header><section><p>{lang === "ru" ? "ЛЮНГЕНСКИЕ АЛЬПЫ · НОРВЕГИЯ" : "LYNGEN ALPS · NORWAY"}</p><h1>{c.title}</h1><span>{c.lead}</span><div>{Object.entries(c.pages).map(([slug,p])=><a key={slug} href={`/${lang}/${slug}`}>{p.label} ↗</a>)}</div></section></main>;
}
export function DetailPage({ lang, slug }: { lang: Lang; slug: string }) {
  const c = content[lang]; const p = c.pages[slug as keyof typeof c.pages] || c.pages.stays; const home = lang==="ru"?"/ru":"/";
  return <main className="inner-page" data-lang={lang}><div className="lang-float"><a className={lang==="en"?"active":""} href={`/en/${slug}`}>EN</a><a className={lang==="ru"?"active":""} href={`/ru/${slug}`}>RU</a></div><nav className="inner-site-nav"><a className="brand" href={home}><span>▲</span> AURORA</a><div className="navlinks">{Object.entries(c.pages).map(([s,v])=><a key={s} href={`/${lang}/${s}`}>{v.label}</a>)}</div><a className="book" href={`${home}#book`}>{lang==="ru"?"Забронировать ↗":"Book your stay ↗"}</a></nav><section className="inner-hero"><p>{p.eyebrow}</p><h1>{p.title}</h1><span>{p.intro}</span></section><section className="inner-cards">{p.cards.map(([t,d],i)=><article key={t}><small>0{i+1}</small><h2>{t}</h2><p>{d}</p><a href="mailto:stay@aurora.example">{lang==="ru"?"Узнать больше":"Discover"} ↗</a></article>)}</section><footer><p>{p.note}</p><a href={home}>{c.back} ↑</a></footer></main>;
}
