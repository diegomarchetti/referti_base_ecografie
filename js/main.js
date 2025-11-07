// ===== TEMPLATES =====
const templates = {
  normale: {
    title: "Ecografia – Normale",
    content: `
Paziente: [NOME] [COGNOME]
Data di nascita: [DATA_NASCITA]
Codice Fiscale: [CODICE_FISCALE]
Data esame: [DATA_ESAME]
Indicazione all’esame: [TIPO_ESAME]

ECOGRAFIA ADDOME COMPLETO

Fegato di dimensioni nella norma, a margini regolari e con normale ecostruttura.
Non lesioni focali.
Vene sovraepatiche di normale decorso e calibro.
Nei limiti il calibro della vena porta all’ilo ([CALIBRO_VENA_PORTA_MM] mm).
Non dilatazione delle vie biliari intraepatiche né della VBP ([DIAMETRO_VBP_MM] mm).
Non linfonodi visibili all’ilo epatico.
Colecisti con pareti distese, di normale spessore, alitiasica.
Pancreas di normali dimensioni con ecostruttura omogenea. 
Dotto di Wirsung non dilatato.
Milza di normali dimensioni con ecostruttura omogenea.
Reni in sede di normali dimensioni ed ecostruttura, con spessore dell’anello parenchimale conservato e regolare differenziazione cortico-midollare.
Vie escretrici non dilatate. 
Non calcoli.
Non tumefazioni patologiche in corrispondenza delle logge surrenaliche.
Aorta normodecorrente, di calibro nei limiti con pareti regolari per l’età.
Vescica ben distesa, a pareti regolari, esente da lesioni endoluminali.
Non raccolte né versamento libero in addome.

Conclusioni: quadro ecografico nella norma.
Portare il presente referto ai controlli successivi.

Dott.ssa Alessia Iorio
Specialista in Medicina Interna
`.trim()
  },

  "epatopatia-cronica": {
    title: "Ecografia – Epatopatia Cronica",
    content: `
Paziente: [NOME] [COGNOME]
Data di nascita: [DATA_NASCITA]
Codice Fiscale: [CODICE_FISCALE]
Data esame: [DATA_ESAME]
Indicazione all’esame: [TIPO_ESAME]

ECOGRAFIA ADDOME COMPLETO

Fegato di dimensioni nella norma, a margini irregolari con ecostruttura disomogenea come in epatopatia cronica.
Non lesioni focali.
Vene sovraepatiche di normale decorso e calibro.
Nei limiti il calibro della vena porta all’ilo ([CALIBRO_VENA_PORTA_MM] mm).
Non dilatazione delle vie biliari intraepatiche né della VBP ([DIAMETRO_VBP_MM] mm).
Non linfonodi visibili all’ilo epatico.
Colecisti con pareti distese, di normale spessore, alitiasica.
Pancreas di normali dimensioni con ecostruttura omogenea. 
Dotto di Wirsung non dilatato.
Milza di normali dimensioni con ecostruttura omogenea.
Reni in sede di normali dimensioni ed ecostruttura, con spessore dell’anello parenchimale conservato e regolare differenziazione cortico-midollare.
Vie escretrici non dilatate.
Non calcoli.
Non tumefazioni patologiche in corrispondenza delle logge surrenaliche.
Aorta normodecorrente, di calibro nei limiti con pareti regolari per l’età.
Vescica ben distesa, a pareti regolari, esente da lesioni endoluminali.
Non raccolte né versamento libero in addome.

Conclusioni: [CONCLUSIONI]
Portare il presente referto ai controlli successivi.

Dott.ssa Alessia Iorio
Specialista in Medicina Interna
`.trim()
  },

  "steatosi": {
    title: "Ecografia – Steatosi",
    content: `
Paziente: [NOME] [COGNOME]
Data di nascita: [DATA_NASCITA]
Codice Fiscale: [CODICE_FISCALE]
Data esame: [DATA_ESAME]
Indicazione all’esame: [TIPO_ESAME]

ECOGRAFIA ADDOME COMPLETO

Fegato di dimensioni discretamente aumentate, a margini regolari, angoli arrotondati, ecostruttura omogenea, più stipata e brillante che di norma per la presenza di steatosi. 
Non lesioni focali. 
Vene sovraepatiche di normale decorso e calibro. 
Nei limiti il calibro della vena porta all’ilo ([CALIBRO_VENA_PORTA_MM] mm). 
Non dilatazione delle vie biliari intraepatiche né della VBP ([DIAMETRO_VBP_MM] mm). 
Non linfonodi visibili all’ilo epatico.
Colecisti con pareti distese, di normale spessore, alitiasica.
Pancreas di normali dimensioni con eco struttura omogenea. 
Dotto di Wirsung non dilatato.
Milza di normali dimensioni con eco struttura omogenea.
Reni in sede di normali dimensioni ed eco struttura, con spessore dell’anello parenchimale conservato e regolare differenziazione cortico-midollare. 
Vie escretrici non dilatate. 
Non calcoli.
Non tumefazioni patologiche in corrispondenza delle logge surrenaliche.
Aorta normodecorrente, di calibro nei limiti con pareti regolari per l’età.
Vescica ben distesa (pareti scarsamente distese), a pareti regolari, esente da lesioni endoluminali. 
Vescica non repleta.
Non raccolte né versamento libero in addome.


Conclusioni: [CONSLUSIONI]
Portare il presente referto ai controlli successivi.

Dott.ssa Alessia Iorio
Specialista in Medicina Interna
`.trim()
  },

  "nefrite": {
    title: "Ecografia – Nefrite",
    content: `
Paziente: [NOME] [COGNOME]
Data di nascita: [DATA_NASCITA]
Codice Fiscale: [CODICE_FISCALE]
Data esame: [DATA_ESAME]
Indicazione all’esame: [TIPO_ESAME]

ECOGRAFIA ADDOME INFERIORE

Reni in sede.
Rene destro di normali dimensioni ed ecostruttura, diametro bipolare [DIAMETRO_BIPOLARE_CM_DESTRO] cm, con spessore dell’anello parenchimale conservato e regolare differenziazione cortico-midollare.
Rene sinistro presenta diametro bipolare di [DIAMETRO_BIPOLARE_CM_SINISTRO] cm, con spessore maggiore rispetto al controlaterale (rispettivamente di [SPESSORE_MM_DESTRO] e [SPESSORE_MM_SINISTRO] mm) e piramidi evidenti come da iniziale processo flogistico acuto.
In considerazione della sintomatologia (dolore, ematuria, disuria) si consiglia urinocoltura e controllo ecografico dopo eventuale terapia antibiotica.
Vie escretrici non dilatate bilateralmente.
Non tumefazioni patologiche in corrispondenza delle logge surrenaliche.
Vescica ben distesa (pareti scarsamente distese), a pareti regolari, esente da lesioni endoluminali oppure vescica non repleta.
Non calcoli nel tratto terminale degli ureteri.

Conclusioni: [CONCLUSIONI]
Portare il presente referto ai controlli successivi.

Dott.ssa Alessia Iorio
Specialista in Medicina Interna
`.trim()
  },
  "idronefrosi": {
    title: "Ecografia – Idronefrosi",
    content: `
Paziente: [NOME] [COGNOME]
Data di nascita: [DATA_NASCITA]
Codice Fiscale: [CODICE_FISCALE]
Data esame: [DATA_ESAME]
Indicazione all’esame: [TIPO_ESAME]

ECOGRAFIA ADDOME INFERIORE

Reni in sede, di normali dimensioni ed ecogenicità, con spessore dell’anello parenchimale conservato e regolare differenziazione cortico-midollare.

Via escretrice dilatata (lieve dilatazione del bacinetto renale sinistro controllato a vescica vuota e del primo tratto dell’uretere fin dove visibile) a sinistra con idronefrosi di I grado; in corrispondenza del tratto medio o prevescicale dell’uretere sinistro si apprezza formazione iperecogena con cono d’ombra posteriore di [CONO_OMBRA_MM] mm come da calcolo.
Dimensioni dell’uretere a monte del calcolo di circa [DIMENSIONE_URETERE_MM] mm.
Oppure non calcoli ecovisibili.
A destra si segnala formazione iperecogena nel gruppo caliceale superiore di [FORMAZIONE_IPERECOGENA_MM] mm di diametro con tenue cono d’ombra posteriore come da calcolo.
Non dilatata la via escretrice destra.
Jet ureterale presente e valido a destra, non rilevabile a sinistra.
Non tumefazioni surrenaliche ecovisibili.
Vescica ben distesa (pareti scarsamente distese), a pareti regolari, esente da lesioni endoluminali oppure vescica non repleta.
Non calcoli nel tratto terminale degli ureteri.

Conclusioni: [CONCLUSIONI]
Portare il presente referto ai controlli successivi.

Dott.ssa Alessia Iorio
Specialista in Medicina Interna
`.trim()
  },
  "colecistite-acuta-cronica": {
    title: "Ecografia – Colecistite Acuta e Cronica",
    content: `
Paziente: [NOME] [COGNOME]
Data di nascita: [DATA_NASCITA]
Codice Fiscale: [CODICE_FISCALE]
Data esame: [DATA_ESAME]
Indicazione all’esame: [TIPO_ESAME]

ECOGRAFIA ADDOME COMPLETO

Fegato di dimensioni nella norma, a margini regolari e con normale ecostruttura.
Non lesioni focali.
Vene sovraepatiche di normale decorso e calibro.
Nei limiti il calibro della vena porta all’ilo ([CALIBRO_VENA_PORTA_MM] mm).
Non dilatazione delle vie biliari intraepatiche né della VBP ([DIAMETRO_VBP_MM] mm).
Non linfonodi visibili all’ilo epatico.

Colecisti di dimensioni aumentate ([DIMENSIONI_COLECISTI_CM] cm) con pareti distese ispessite ([PARETI_MM] mm), irregolari per la presenza di strati iper e ipoecogeni.
Presenza nel lume della colecisti di alcuni calcoli di dimensioni di circa [DIMENSIONI_CALCOLI_CM] cm e nell’infundibolo di due calcoli di [DIMENSIONI_CALCOLI_MM] mm ciascuno, fissi al variare del decubito.
→ **Colecistite acuta**

Colecisti contratta a pareti discretamente ispessite come per flogosi cronica, nel suo lume calcolo di [CALCOLO_LUME_MM] mm e discreta quantità di fango biliare.
→ **Colecistite cronica**

Murphy ecografico positivo, non dilatazione VBP e vie biliari intraepatiche.
Pancreas di normali dimensioni con ecostruttura omogenea.
Dotto di Wirsung non dilatato.
Milza di normali dimensioni con ecostruttura omogenea.
Reni in sede di normali dimensioni ed ecostruttura, con spessore dell’anello parenchimale conservato e regolare differenziazione cortico-midollare.
Vie escretrici non dilatate.
Non calcoli.
Non tumefazioni patologiche in corrispondenza delle logge surrenaliche.
Aorta normodecorrente, di calibro nei limiti con pareti regolari per l’età.
Vescica ben distesa (pareti scarsamente distese), a pareti regolari, esente da lesioni endoluminali oppure non repleta.
Non raccolte né versamento libero in addome.

Conclusioni: [CONCLUSIONI]
Portare il presente referto ai controlli successivi.

Dott.ssa Alessia Iorio
Specialista in Medicina Interna
`.trim()
  },
  "colecisti-scleroatrofica-litiasica": {
    title: "Ecografia – Colecisti Scleroatrofica Litiasica",
    content: `
Paziente: [NOME] [COGNOME]
Data di nascita: [DATA_NASCITA]
Codice Fiscale: [CODICE_FISCALE]
Data esame: [DATA_ESAME]
Indicazione all’esame: [TIPO_ESAME]

ECOGRAFIA ADDOME COMPLETO

Fegato di dimensioni nella norma, a margini regolari e con normale ecostruttura.
Non lesioni focali.
Vene sovraepatiche di normale decorso e calibro.
Nei limiti il calibro della vena porta all’ilo ([CALIBRO_VENA_PORTA_MM] mm).
Non dilatazione delle vie biliari intraepatiche né della VBP ([DIAMETRO_VBP_MM] mm).
Non linfonodi visibili all’ilo epatico.

Colecisti con pareti contratte, iperecogene, coartate su numerosi calcoli come da colecisti scleroatrofica litiasica.
VBP di dimensioni nei limiti, non dilatazione delle vie biliari intraepatiche.
Pancreas di normali dimensioni con ecostruttura omogenea.
Dotto di Wirsung non dilatato.
Milza di normali dimensioni con ecostruttura omogenea.
Reni in sede di normali dimensioni ed ecostruttura, con spessore dell’anello parenchimale conservato e regolare differenziazione cortico-midollare.
Vie escretrici non dilatate.
Non calcoli.
Non tumefazioni patologiche in corrispondenza delle logge surrenaliche.
Aorta normodecorrente, di calibro nei limiti con pareti regolari per l’età.
Vescica ben distesa (pareti scarsamente distese), a pareti regolari, esente da lesioni endoluminali oppure non repleta.
Non raccolte né versamento libero in addome.

Conclusioni: [CONCLUSIONI]
Portare il presente referto ai controlli successivi.

Dott.ssa Alessia Iorio
Specialista in Medicina Interna
`.trim()
  },
  "epatica-evoluzione": {
    title: "Ecografia – Cirrosi Epatica o Evoluzione",
    content: `
Paziente: [NOME] [COGNOME]
Data di nascita: [DATA_NASCITA]
Codice Fiscale: [CODICE_FISCALE]
Data esame: [DATA_ESAME]
Indicazione all’esame: [TIPO_ESAME]

ECOGRAFIA ADDOME COMPLETO

Fegato di dimensioni aumentate soprattutto a carico del lobo sinistro, con lobo caudato ipertrofico, ecostruttura più stipata e brillante del normale in relazione all’aumentata componente fibrotica; margini irregolari come per cirrosi epatica.
In corrispondenza del lobo destro, nei segmenti VIII e V, si apprezzano due formazioni ipoecogene di [FORMAZIONI_IPOECOGENE_MM] mm circa, da riferire verosimilmente a noduli di rigenerazione.
Si consiglia monitoraggio ecografico e dell’alfa-fetoproteina.

Albero biliare impoverito in periferia, vena porta di dimensioni ai limiti superiori della norma ([CALIBRO_VENA_PORTA_MM] mm all’ilo) con flusso epatopeto non fasico con gli atti respiratori (fasico al ciclo cardiaco come da apertura di shunt porto-sistemici intraepatici).
Vena splenica e mesenterica superiore di calibro ai limiti superiori ([CALIBRO_VENA_MM]).
Vene sovraepatiche di calibro conservato o di decorso distorto e di calibro assottigliato.
[ASCITE]
Linfonodo fusiforme di [DIMENSIONI_LINFONODO_MM] mm all’ilo epatico di verosimile significato flogistico.

Iniziale evoluzione cirrogena: fegato di dimensioni aumentate con ecostruttura omogenea più stipata e lievemente più grossolana del normale, margini regolari.
Linfonodo all’ilo epatico reattivo di [DIMENSIONI_LINFONODO_CM] cm.

Trombosi portale: all’interno del lume portale, in corrispondenza dell’oliva portale, presenza di immagine tenuamente iperecogena del diametro di [DIMENSIONI_IMMAGINE_MM] mm, determinante difetto di riempimento come da trombosi portale incompleta.
Nella norma il calibro della vena porta all’ilo.

Colecisti con pareti distese, di normale spessore, alitiasica (in cirrosi la colecisti può essere contratta, con pareti ispessite o dilatata senza ispessimento parietale).
Pancreas di normali dimensioni con ecostruttura omogenea.
Dotto di Wirsung non dilatato.
Milza di normali dimensioni con ecostruttura omogenea.
Reni in sede di normali dimensioni ed ecostruttura, con spessore dell’anello parenchimale conservato e regolare differenziazione cortico-midollare.
Vie escretrici non dilatate.
Non calcoli.
Non tumefazioni patologiche in corrispondenza delle logge surrenaliche.
Aorta normodecorrente, di calibro nei limiti con pareti regolari per l’età.
Vescica ben distesa (pareti scarsamente distese), a pareti regolari, esente da lesioni endoluminali oppure non repleta.
Non raccolte né versamento libero in addome.

Conclusioni: [CONCLUSIONI]
Portare il presente referto ai controlli successivi.

Dott.ssa Alessia Iorio
Specialista in Medicina Interna
`.trim()
  },
  "nefropatia-cronica": {
    title: "Ecografia – Nefropatia Cronica",
    content: `
Paziente: [NOME] [COGNOME]
Data di nascita: [DATA_NASCITA]
Codice Fiscale: [CODICE_FISCALE]
Data esame: [DATA_ESAME]
Indicazione all’esame: [TIPO_ESAME]

ECOGRAFIA ADDOME COMPLETO

Fegato con struttura omogenea, di dimensioni nella norma, margini regolari.
Vena porta di normali dimensioni.
Vene sovraepatiche di decorso normale e di calibro nella norma.
Colecisti con pareti contratte di normale spessore, alitiasica per quanto valutabile.
VBP di dimensioni normali, non dilatazioni delle vie biliari intraepatiche.
Pancreas di normali dimensioni con ecostruttura omogenea.
Milza con diametro bipolare ed area nella norma, ed ecostruttura omogenea.

Reni in sede, di dimensioni ai limiti inferiori della norma il destro ([DIM_RENE_DX_CM] cm) con parenchima di ecogenicità normale e spessore conservato; il sinistro di dimensioni ridotte ([DIAMETRO_BIPOLARE_SX_CM] cm) con parenchima assottigliato ed iperecogeno come da nefropatia cronica.
Vie escretrici non dilatate; bilateralmente si apprezza la presenza di spot iperecogeni di circa [DIMENSIONE_SPOT_MM] mm [RENELLA] in corrispondenza del gruppo caliceale inferiore e medio.

Aorta di calibro e decorso nella norma, con pareti regolari o placche calcifiche diffuse.
Non tumefazioni patologiche in corrispondenza delle logge surrenaliche.
Vescica ben distesa (pareti scarsamente distese), a pareti regolari, esente da lesioni endoluminali oppure non repleta.
Non calcoli nel tratto terminale degli ureteri.

Conclusioni: [CONCLUSIONI]
Portare il presente referto ai controlli successivi.

Dott.ssa Alessia Iorio
Specialista in Medicina Interna
`.trim()
  }
};

// ===== ELEMENTI DOM =====
const examTitleEl = document.getElementById("examTitle");
const refertoBoxEl = document.getElementById("refertoBox");
const copyBtnEl = document.getElementById("copyBtn");
const copyFeedbackEl = document.getElementById("copyFeedback");
const templateItems = document.querySelectorAll(".template-item");
const sidebarEl = document.getElementById("sidebar");
const menuToggleEl = document.getElementById("menuToggle");
const sidebarOverlayEl = document.getElementById("sidebarOverlay");

// ===== FUNZIONI =====

function renderContentWithPlaceholders(rawText) {
  const escaped = rawText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return escaped.replace(/\[([A-Z0-9_]+)\]/g, (_, name) =>
    `<span class="placeholder">[${name}]</span>`
  );
}

function loadTemplate(id) {
  const tpl = templates[id];
  if (!tpl) return;
  examTitleEl.textContent = tpl.title;
  refertoBoxEl.innerHTML = renderContentWithPlaceholders(tpl.content);
}

function closeSidebarMobile() {
  if (!sidebarEl) return;
  sidebarEl.classList.remove("open");
  if (sidebarOverlayEl) {
    sidebarOverlayEl.classList.remove("active");
  }
}

function toggleSidebarMobile() {
  if (!sidebarEl) return;
  const isOpen = sidebarEl.classList.toggle("open");
  menuToggleEl.classList.toggle("active", isOpen);
  if (sidebarOverlayEl) {
    if (isOpen) sidebarOverlayEl.classList.add("active");
    else sidebarOverlayEl.classList.remove("active");
  }
}

// ===== EVENTI =====

// Click voci sidebar
templateItems.forEach(item => {
  item.addEventListener("click", () => {
    templateItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    const id = item.getAttribute("data-template-id");
    loadTemplate(id);
    // su mobile chiudo il menu dopo la selezione
    closeSidebarMobile();
  });
});

// Copia referto
if (copyBtnEl) {
  copyBtnEl.addEventListener("click", async () => {
    const textToCopy = refertoBoxEl.innerText;
    try {
      await navigator.clipboard.writeText(textToCopy);
      copyFeedbackEl.classList.add("visible");
      setTimeout(() => copyFeedbackEl.classList.remove("visible"), 1500);
    } catch {
      alert("Impossibile copiare automaticamente. Seleziona e copia manualmente il testo.");
    }
  });
}

// Burger menu
if (menuToggleEl) {
  menuToggleEl.addEventListener("click", toggleSidebarMobile);
}

// Overlay per chiudere sidebar
if (sidebarOverlayEl) {
  sidebarOverlayEl.addEventListener("click", closeSidebarMobile);
}

// ===== INIT =====
loadTemplate("normale");
