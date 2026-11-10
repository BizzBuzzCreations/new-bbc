// Decides, before the first paint, whether the landing animation plays
// (components/home/intro.js). Inline in <head> so there is no flash: it sets
// data-intro on <html> — "play" | "skip" — and the stylesheet does the rest.
//  • only on a hard load of "/" (the homepage) — never on other pages, and never
//    on a client-side navigation back to "/" (this script does not run again)
//  • once per tab session (sessionStorage), so going back to the home page does
//    not replay it
//  • never with reduced motion or Data Saver
// While it plays the page cannot scroll; the lock is released by a timer in this
// same script, so it never depends on the app having loaded.
const SCRIPT = `(function(){var d=document.documentElement;try{
if(location.pathname!=="/")return;
var c=navigator.connection;
if(sessionStorage.getItem("bbc-intro")||matchMedia("(prefers-reduced-motion: reduce)").matches||(c&&c.saveData)){d.setAttribute("data-intro","skip");return}
sessionStorage.setItem("bbc-intro","1");
d.setAttribute("data-intro","play");d.style.overflow="hidden";
setTimeout(function(){d.style.overflow="";d.setAttribute("data-intro","done")},2900);
}catch(e){d.removeAttribute("data-intro");d.style.overflow=""}})();`;

export default function IntroGate() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
