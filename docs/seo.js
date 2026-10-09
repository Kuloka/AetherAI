// Shared by static page generation and the browser language switcher.
globalThis.SITE_ORIGIN='https://aetherai-chat.pages.dev';
globalThis.siteLanguagePath=lang=>lang==='en'?'/':'/'+lang+'/';
const searchCopy={
 en:['AetherAI — Local & Cloud AI Chat for Windows, macOS and Linux','Download AetherAI, a desktop AI chat app with local models, OpenRouter, Groq, Gemini, Cerebras and SambaNova. Agents, tools and personal response presets.','Cloud models','Local chat is free. Cloud providers have their own free limits and paid plans. An API key is required for cloud models.'],
 ru:['AetherAI — ИИ-чат для Windows, macOS и Linux','Скачайте AetherAI: приложение для общения с ИИ, локальные модели и облачные OpenRouter, Groq, Gemini, Cerebras и SambaNova. Агенты, инструменты и настройка ответов.','Облачные модели','Локальный чат бесплатный. У облачных провайдеров свои бесплатные лимиты и платные тарифы. Для облачных моделей нужен API-ключ.'],
 es:['AetherAI — Chat de IA para Windows, macOS y Linux','Descarga AetherAI: chat de IA con modelos locales, OpenRouter, Groq, Gemini, Cerebras y SambaNova. Agentes, herramientas y preferencias de respuesta.','Modelos en la nube','El chat local es gratuito. Los proveedores tienen sus propios límites gratuitos y planes de pago. Los modelos en la nube requieren una clave API.'],
 pt:['AetherAI — Chat de IA para Windows, macOS e Linux','Baixe o AetherAI: chat de IA com modelos locais, OpenRouter, Groq, Gemini, Cerebras e SambaNova. Agentes, ferramentas e preferências de resposta.','Modelos na nuvem','O chat local é gratuito. Os provedores têm seus próprios limites gratuitos e planos pagos. Modelos na nuvem exigem uma chave API.'],
 fr:['AetherAI — Chat IA pour Windows, macOS et Linux','Téléchargez AetherAI : chat IA avec modèles locaux, OpenRouter, Groq, Gemini, Cerebras et SambaNova. Agents, outils et préférences de réponse.','Modèles cloud','Le chat local est gratuit. Les fournisseurs ont leurs propres limites gratuites et offres payantes. Les modèles cloud nécessitent une clé API.'],
 de:['AetherAI — KI-Chat für Windows, macOS und Linux','AetherAI herunterladen: KI-Chat mit lokalen Modellen, OpenRouter, Groq, Gemini, Cerebras und SambaNova. Agenten, Werkzeuge und Antwortpräferenzen.','Cloud-Modelle','Lokaler Chat ist kostenlos. Anbieter haben eigene kostenlose Limits und kostenpflichtige Tarife. Cloud-Modelle benötigen einen API-Schlüssel.'],
 it:['AetherAI — Chat IA per Windows, macOS e Linux','Scarica AetherAI: chat IA con modelli locali, OpenRouter, Groq, Gemini, Cerebras e SambaNova. Agenti, strumenti e preferenze di risposta.','Modelli cloud','La chat locale è gratuita. I provider hanno limiti gratuiti e piani a pagamento propri. I modelli cloud richiedono una chiave API.'],
 tr:['AetherAI — Windows, macOS ve Linux için yapay zekâ sohbeti','AetherAI indirin: yerel modeller, OpenRouter, Groq, Gemini, Cerebras ve SambaNova ile yapay zekâ sohbeti. Ajanlar, araçlar ve yanıt tercihleri.','Bulut modelleri','Yerel sohbet ücretsizdir. Sağlayıcıların kendi ücretsiz limitleri ve ücretli planları vardır. Bulut modelleri için API anahtarı gerekir.'],
 pl:['AetherAI — Czat AI dla Windows, macOS i Linux','Pobierz AetherAI: czat AI z modelami lokalnymi, OpenRouter, Groq, Gemini, Cerebras i SambaNova. Agenci, narzędzia i preferencje odpowiedzi.','Modele w chmurze','Czat lokalny jest bezpłatny. Dostawcy mają własne bezpłatne limity i płatne plany. Modele w chmurze wymagają klucza API.'],
 uk:['AetherAI — ШІ-чат для Windows, macOS і Linux','Завантажте AetherAI: застосунок для спілкування з ШІ, локальні моделі та OpenRouter, Groq, Gemini, Cerebras і SambaNova. Агенти, інструменти й налаштування відповідей.','Хмарні моделі','Локальний чат безкоштовний. У хмарних провайдерів власні безкоштовні ліміти й платні тарифи. Для хмарних моделей потрібен API-ключ.']
};
for(const [lang,[title,description,cloud,limits]] of Object.entries(searchCopy)){
 const copy=SITE_COPY[lang];copy.meta=[title,description];copy.hero[4]=description;copy.inside[6]=cloud;
 copy.demos[3]=[cloud,cloud,description,[['OpenRouter','Groq'],['Gemini','Cerebras'],['SambaNova','Ollama Cloud']],limits];
 copy.details[3][0][1]=limits;copy.faq[2][0][1]=limits;
}
globalThis.siteStructuredData=lang=>{
 const url=SITE_ORIGIN+siteLanguagePath(lang),copy=SITE_COPY[lang];
 return {'@context':'https://schema.org','@graph':[
  {'@type':'WebSite','@id':SITE_ORIGIN+'/#website',url:SITE_ORIGIN+'/',name:'AetherAI',alternateName:['Aether AI','AetherAI Chat'],inLanguage:Object.keys(SITE_LANGUAGES)},
  {'@type':'WebPage','@id':url+'#webpage',url,name:copy.meta[0],description:copy.meta[1],inLanguage:lang,isPartOf:{'@id':SITE_ORIGIN+'/#website'},about:{'@id':SITE_ORIGIN+'/#app'}},
  {'@type':'SoftwareApplication','@id':SITE_ORIGIN+'/#app',name:'AetherAI',url,description:copy.meta[1],applicationCategory:'ProductivityApplication',operatingSystem:'Windows, macOS, Linux',image:SITE_ORIGIN+'/assets/social.png',screenshot:SITE_ORIGIN+'/assets/app.png',offers:{'@type':'Offer',price:'0',priceCurrency:'USD',url:url+'#download'}}
 ]};
};
