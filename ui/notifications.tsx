import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./streaming";
import NotificationsBlock, { type Notification } from "@/components/ui/notifications-5";

type UpdateState = {status:string;currentVersion:string;supported:boolean;version:string|null;percent:number};
type Message = {id?:string;variant?:Notification["variant"];title:string;body?:string};
type Api = { updatesStatus:()=>Promise<UpdateState>;updatesCheck:()=>Promise<UpdateState>;updatesDownload:()=>Promise<unknown>;updatesInstall:()=>Promise<unknown>;updatesOpenRelease:()=>Promise<unknown>;onUpdateState:(cb:(state:UpdateState)=>void)=>()=>void };
declare global { interface Window { api?:Api; AetherAINotifications:{show:(message:Message)=>void;saved:(provider:string)=>void} } }
// Same language choices as the existing application.
const translations:Record<string,string[]> = {
 en:["Dismiss","Application updates","Check for updates","Checking for updates…","New version available","Download update","Downloading update…","Update ready","Restart and install","You're up to date","Could not check or download the update. Try again.","Open releases","Updates are available in installed builds.","Save your work before restarting."],
 ru:["Закрыть","Обновления приложения","Проверить обновления","Проверяем обновления…","Доступна новая версия","Скачать обновление","Скачиваем обновление…","Обновление готово","Перезапустить и установить","Установлена последняя версия","Не удалось проверить или скачать обновление. Попробуйте ещё раз.","Открыть загрузки","Обновления доступны в установленной сборке.","Сохраните работу перед перезапуском."],
 es:["Cerrar","Actualizaciones","Buscar actualizaciones","Buscando actualizaciones…","Nueva versión disponible","Descargar actualización","Descargando…","Actualización lista","Reiniciar e instalar","Estás al día","No se pudo comprobar o descargar. Inténtalo de nuevo.","Abrir descargas","Disponibles en la aplicación instalada.","Guarda tu trabajo antes de reiniciar."],
 pt:["Fechar","Atualizações","Verificar atualizações","Verificando…","Nova versão disponível","Baixar atualização","Baixando…","Atualização pronta","Reiniciar e instalar","Tudo atualizado","Não foi possível verificar ou baixar. Tente novamente.","Abrir downloads","Disponíveis na aplicação instalada.","Salve seu trabalho antes de reiniciar."],
 fr:["Fermer","Mises à jour","Vérifier les mises à jour","Vérification…","Nouvelle version disponible","Télécharger","Téléchargement…","Mise à jour prête","Redémarrer et installer","Vous êtes à jour","Impossible de vérifier ou télécharger. Réessayez.","Ouvrir les téléchargements","Disponibles dans l’application installée.","Enregistrez votre travail avant de redémarrer."],
 de:["Schließen","App-Updates","Nach Updates suchen","Suche nach Updates…","Neue Version verfügbar","Update herunterladen","Download läuft…","Update bereit","Neustarten und installieren","Aktuelle Version installiert","Prüfung oder Download fehlgeschlagen. Erneut versuchen.","Downloads öffnen","In installierten Versionen verfügbar.","Vor dem Neustart die Arbeit speichern."],
 it:["Chiudi","Aggiornamenti","Verifica aggiornamenti","Verifica in corso…","Nuova versione disponibile","Scarica aggiornamento","Download in corso…","Aggiornamento pronto","Riavvia e installa","Versione aggiornata","Verifica o download non riuscito. Riprova.","Apri download","Disponibili nell’app installata.","Salva il lavoro prima di riavviare."],
 tr:["Kapat","Uygulama güncellemeleri","Güncellemeleri denetle","Denetleniyor…","Yeni sürüm mevcut","Güncellemeyi indir","İndiriliyor…","Güncelleme hazır","Yeniden başlat ve yükle","Güncelsiniz","Denetleme veya indirme başarısız. Tekrar deneyin.","İndirmeleri aç","Yüklü uygulamada kullanılabilir.","Yeniden başlatmadan önce çalışmanızı kaydedin."],
 pl:["Zamknij","Aktualizacje","Sprawdź aktualizacje","Sprawdzanie…","Dostępna nowa wersja","Pobierz aktualizację","Pobieranie…","Aktualizacja gotowa","Uruchom ponownie i zainstaluj","Wersja aktualna","Nie udało się sprawdzić lub pobrać. Spróbuj ponownie.","Otwórz pobieranie","Dostępne w zainstalowanej aplikacji.","Zapisz pracę przed ponownym uruchomieniem."],
 uk:["Закрити","Оновлення застосунку","Перевірити оновлення","Перевіряємо оновлення…","Доступна нова версія","Завантажити оновлення","Завантажуємо…","Оновлення готове","Перезапустити й установити","Установлено останню версію","Не вдалося перевірити чи завантажити. Спробуйте ще раз.","Відкрити завантаження","Доступні у встановленій збірці.","Збережіть роботу перед перезапуском."],
};
let sequence=0;
const savedLabels:Record<string,string>={en:'API key saved',ru:'API-ключ сохранён',es:'Clave API guardada',pt:'Chave API salva',fr:'Clé API enregistrée',de:'API-Schlüssel gespeichert',it:'Chiave API salvata',tr:'API anahtarı kaydedildi',pl:'Klucz API zapisany',uk:'API-ключ збережено'};
window.AetherAINotifications={show:message=>window.dispatchEvent(new CustomEvent('aetherai:notification',{detail:message})),saved:provider=>window.AetherAINotifications.show({variant:'success',title:savedLabels[document.documentElement.lang]||savedLabels.en,body:provider})};
function App(){
 const [messages,setMessages]=useState<Notification[]>([]),[update,setUpdate]=useState<UpdateState|null>(null),[lang,setLang]=useState(document.documentElement.lang),[hiddenUpdate,setHiddenUpdate]=useState<string|null>(null);
 const copy=translations[lang]||translations.en;
 useEffect(()=>{
   const timers=new Set<ReturnType<typeof setTimeout>>();
   const listener=(event:Event)=>{const message=(event as CustomEvent<Message>).detail;if(!message?.title)return;const id=message.id||`event-${++sequence}`;setMessages(old=>[...old.filter(item=>item.id!==id),{...message,id,variant:message.variant||'info'}].slice(-3));const timer=setTimeout(()=>{setMessages(old=>old.filter(item=>item.id!==id));timers.delete(timer);},7000);timers.add(timer);};
   window.addEventListener('aetherai:notification',listener);
   const observer=new MutationObserver(()=>setLang(document.documentElement.lang));observer.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
   const api=window.api;
   let unsubscribe:(()=>void)|undefined;
   if(api?.updatesStatus){unsubscribe=api.onUpdateState(setUpdate);api.updatesStatus().then(state=>{setUpdate(state);if(state.status==='idle')void api.updatesCheck().then(setUpdate).catch(()=>{});}).catch(()=>{});}
   return()=>{window.removeEventListener('aetherai:notification',listener);observer.disconnect();unsubscribe?.();timers.forEach(clearTimeout);};
 },[]);
 const request=(kind:'check'|'download'|'install'|'release')=>{
   setHiddenUpdate(null);const api=window.api;if(!api)return;
   const promise=kind==='check'?api.updatesCheck():kind==='download'?api.updatesDownload():kind==='install'?api.updatesInstall():api.updatesOpenRelease();
   void promise.catch(()=>setUpdate(old=>old?{...old,status:'error'}:old));
 };
 const key=update?`${update.status}:${update.version}`:'';
 const updateNotice:Notification|null=update&&['available','downloading','ready','error'].includes(update.status)&&hiddenUpdate!==key?{
   id:'app-update',variant:update.status==='error'?'error':'info',
   title:copy[update.status==='available'?4:update.status==='downloading'?6:update.status==='ready'?7:1],
   body:update.status==='error'?copy[10]:update.status==='ready'?`v${update.version}. ${copy[13]}`:update.status==='downloading'?`${update.percent}%`:`${update.currentVersion} → ${update.version}`,
   action:update.status==='downloading'?undefined:{label:copy[update.status==='ready'?8:update.status==='error'?2:update.supported?5:11],run:()=>request(update.status==='ready'?'install':update.status==='error'?'check':update.supported?'download':'release')},
 }:null;
 return <NotificationsBlock toasts={updateNotice?[...messages,updateNotice]:messages} dismissLabel={copy[0]} dismiss={id=>id==='app-update'?setHiddenUpdate(key):setMessages(old=>old.filter(item=>item.id!==id))}/>;
}
const container=document.getElementById('notificationsRoot');if(container)createRoot(container).render(<App/>);
