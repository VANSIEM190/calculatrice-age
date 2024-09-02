const buttonDeConnection1 = document.querySelector(".btnConnexion1");
const buttonDeConnection2 = document.querySelector(".btnConnexion2");
const buttonDeConnection3 = document.querySelector(".btnConnexion3");
const buttonDeRetour = document.querySelector(".retour");
const ChampDUNom = document.querySelector("#nom");
const msgError = document.querySelector(".msgError");
const divPartie1DuValidation = document.querySelector(".divPartie1");
const divPartie2DuValidation = document.querySelector(".divPartie2");
const divPartie3DuValidation = document.querySelector(".divpartie3");
const champId = document.querySelector(".inputInserId");
const containerbtnForvalidateIdUser = document.querySelector(".containerbtnForvalidateIdUser");
const form = document.querySelector(".form");
const wrapper = document.querySelector(".wrapper");
const btnParametre = document.querySelector("#parametre1");
const divParametre = document.querySelector(".parametre");
const btnNePasSauvegarder = document.querySelector(".btnNePasSauvegarder");
const btnSauvegarder = document.querySelector(".btnSauvegarder");
const divInfoBienvenu = document.querySelector(".divInfoBienvenu");
const btnContunuer = document.querySelector(".btnContunuer");
const inputCheckBienvenue =  document.querySelector("#checkBienvenue");
const listOption = document.querySelectorAll("ul input");
const NomUtilisateur = document.querySelector("#userName");
const fichierImg = document.querySelector("#file");
const divImage = document.querySelector("#imgUser1");
const btnOptionCalculAge = document.querySelector("#calculAge");
const DetailsAge = document.querySelector(".divDetailsAge");
const btnContunuer2 = document.querySelector(".btnContunuer2");
const inputCheckContunuer1 = document.querySelector("#check1");
const containerAge = document.querySelector(".containerAge");
const dateNaissance = document.querySelector("#date");
const resultAnnees = document.querySelector(".resultAnnees");
const resultMois = document.querySelector(".resultMois");
const resultJours = document.querySelector(".resultJours");
const btnCalcul = document.querySelector(".btnCalcul");
const btnFlecheRetour = document.querySelector(".flecheRetour");
const btnParler = document.querySelector(".fa-volume-up");
const btnSeConnecter = document.querySelector("#btnSeConnecter");
const btnMenu = document.querySelector(".fa-bars");
const menu = document.querySelector(".divMenu");
const btnValidateId = document.querySelector(".btnValidateId");
const btnRetour = document.querySelector(".btnRetour");
const btnParametre2 = document.querySelector("#parametre2");
const NomUtilisateur2 = document.querySelector("#userName1");
const imgUser2 = document.querySelector("#imgUser2");
const bodyPage = document.body;
const btnPlay = document.querySelector(".fa-volume-up");
let imageUser = document.createElement("img");
let imageUser2 = document.createElement("img");
const seconde = 2000;
const seconde2 = 3000;
const NbrGenerate = 1000000;
const premierElement = 0;
const valeurEcran = 630;
const tailleEcran = window.screen.availWidth;


const ajoutClasse = (elementHtml , NomClass) => elementHtml.classList.add(NomClass);
const retirerClasse = (elementHtml, NomClass) => elementHtml.classList.remove(NomClass);
const classToggle = (elementHtml, NomClass) => elementHtml.classList.toggle(NomClass); 
const chekerOptions = ({operation,strictureOption, element1, boolean}) =>{
        if(operation){
                strictureOption
                element1 = boolean
        }
}
const insereDteNaissance = (element, date) => element.innerHTML = date;
const faireApparaitreMenu = () =>{
        classToggle(wrapper, "active");
        classToggle(menu, "active");
}
const SeConnecter = () =>{
        champId.setAttribute("placeholder","entrez votre Id");
        ajoutClasse(divPartie3DuValidation, "active");
        ajoutClasse(divPartie1DuValidation, "desactive");
        ajoutClasse(containerbtnForvalidateIdUser, "active");
        retirerClasse(divPartie2DuValidation, "active");
}
const enregistreSourceImgUser = (fichierSource) =>{
        imageUser.src = fichierSource;
        imageUser2.src = fichierSource;
        divImage.appendChild(imageUser);
        imgUser2.appendChild(imageUser2);
        ajoutClasse(NomUtilisateur, "desactive");
        ajoutClasse(NomUtilisateur2, "desactive");
        localStorage.setItem("url imgUser", fichierSource);
}
const affichePremierLettreNomUser = (NomCompletUser, PremierLettreUser) =>{
        NomUtilisateur.innerHTML = PremierLettreUser;
        NomUtilisateur2.innerHTML = PremierLettreUser;
        NomUtilisateur.title = NomCompletUser;
}
const afficheInfoCompteUser = () =>{
        let NomUserStocke = localStorage.getItem("NomUtilisateur");
        let ImgUserStoke =  localStorage.getItem("url imgUser");
        let PremierlettreNomUser = NomUserStocke.charAt(premierElement).toUpperCase();
                if(ImgUserStoke){
                        enregistreSourceImgUser(ImgUserStoke);
                        affichePremierLettreNomUser(NomUserStocke, PremierlettreNomUser);
                        return;
                }
                affichePremierLettreNomUser(NomUserStocke, PremierlettreNomUser);
}
const validateIdUser = (e) =>{
        e.preventDefault();
        let valeurUser = champId.value;
        let idUserStocke = localStorage.getItem("idUser");
                if(!valeurUser){
                        afficheMessage("veuillez remplire votre champ!");
                        return;
                }
                if(valeurUser !== idUserStocke){
                        afficheMessage("Id que vous essayer de validé est introuvable");
                        return;
                }
                ajoutClasse(form, "desactive");
                ajoutClasse(wrapper, "active");
                ajoutClasse(btnParametre, "active");
                ajoutClasse(divImage, "active");
                ajoutClasse(btnMenu, "active");
                retirerClasse(form, "active");
                afficheInfoCompteUser();
}
const faireParler = () =>{
        let voie = 2;
        let msg = `${localStorage.getItem("NomUtilisateur")} vous avez ${resultAnnees.innerHTML} et ${resultMois.innerHTML}`; 
        let msgSpeak = new SpeechSynthesisUtterance(msg); 
        msgSpeak.voice =  window.speechSynthesis.getVoices()[voie];
        speechSynthesis.speak(msgSpeak);
}
const retourPrecedent = () =>{
        if(tailleEcran < valeurEcran){
                retirerClasse(containerAge, "active");
                retirerClasse(btnFlecheRetour, "active");
                retirerClasse(btnParametre, "active");
                ajoutClasse(btnMenu, "active");
                ajoutClasse(wrapper, "active");
                return;
        }
        retirerClasse(containerAge, "active");
        retirerClasse(btnFlecheRetour, "active");
        ajoutClasse(wrapper, "active");
        ajoutClasse(btnParametre, "active");
}
const calculerAge = () =>{
        const date = new Date;
        let aujourdHui = date.getDate();
        let moisActuel = date.getMonth() +1;
        let anneeActuelle = date.getFullYear();
        let dateUser = dateNaissance.value;
        let tblDate = dateUser.split("-");
        let [anneesUser, moisUser, jourUser] = tblDate;
        let resultAge =  `${anneeActuelle - anneesUser} ans`
        let moisRestant = `+ ${moisUser - moisActuel}  mois`;
        let moisRestant2 = `${moisActuel - moisUser} mois`;
        let jourRestant = `${aujourdHui - jourUser} jours`;
        let jourRestant2 = `+ ${jourUser - aujourdHui} jours`;

               if(anneesUser > anneeActuelle){
                        afficheMessage("l'année de l'utilisateur n'est peut pas être superieur à celle ci");
                        return;
               }
               if(moisUser <= moisActuel && jourUser <= aujourdHui){
                        insereDteNaissance(resultAnnees, resultAge);
                        insereDteNaissance(resultMois, moisRestant2);
                        insereDteNaissance(resultJours, jourRestant);
                        return;
                }
               insereDteNaissance(resultAnnees, resultAge);
               insereDteNaissance(resultJours, jourRestant2);
               insereDteNaissance(resultMois, moisRestant);
}
const afficheOptionCalculAge = () =>{
        ajoutClasse(DetailsAge, "active");
        retirerClasse(wrapper, "active");
        retirerClasse(btnParametre, "active");
        retirerClasse(btnMenu, "active");
}

const parametrer_cochement_option = ([option1, option2, option3]) =>{
        const getOption1 = localStorage.getItem("option1");
        const getOption2 = localStorage.getItem("option2");
        const getOption3 = localStorage.getItem("option3");
        if(!getOption1){
                chekerOptions(getretirerClasse(bodyPage , "desactive"), option1.checked, true);
                return;
        }
        if(getOption2){
                chekerOptions( retirerClasse(btnPlay, "desactive"), option2.checked, true);
                return;
        }
        if(getOption3){
                chekerOptions("",option3.checked, true);
        }
}
const parametrer_decochement_option = ([option1, option2, option3]) =>{
        const getOption1 = localStorage.getItem("option1");
        const getOption2 = localStorage.getItem("option2");
        const getOption3 = localStorage.getItem("option3");

                if(getOption1){
                        chekerOptions(ajoutClasse(bodyPage , "desactive"), option1.checked, false)   
                        return;
                }
                if(getOption2){
                        chekerOptions(ajoutClasse(btnPlay, "desactive"), option2.checked, false);
                        return;
                }
                if(getOption3){
                        chekerOptions(localStorage.clear(), option3.checked, false);
                        return;
                }
}

//modifier et saugarder le paramétrage
const SauvegarderLesModificationDuParametre = () =>{
        listOption.forEach((OptionElement, index) =>{
                const option_Nom_Check = OptionElement.checked;
                        if(!option_Nom_Check){
                                localStorage.setItem(`option${index + 1}`, "desactivee");
                                parametrer_decochement_option(listOption);
                                annulerParametre();
                                return;
                        }
                        localStorage.removeItem(`option${index + 1}`);
                        parametrer_cochement_option(listOption);
                        annulerParametre();
        })
}

const afficheOption = (inputCheck,callbackFunction) =>{
               if(inputCheck){
                        return callbackFunction();
               }
}
const annulerParametre = () =>{
       ajoutClasse(wrapper,"active");
       retirerClasse(divParametre,"active");
}
const afficheParametre = () =>{
                retirerClasse(wrapper, "active");
                retirerClasse(menu,"active")
                ajoutClasse(divParametre, "active");
}
//afficher la photo et les info de l'utilisateur 
const afficheImgUser = () =>{
       try {
                let fichier = fichierImg.files[premierElement];
                let reader = new FileReader();
                reader.readAsDataURL(fichier);
                reader.onload = (e) =>{
                        let fichierSourceImg = e.target.result;
                        enregistreSourceImgUser(fichierSourceImg);
                }
       }
       catch (error) {
                console.log("error : " , error);
       }
}
const stokeDataUser = (valuerChampDuNomUser) =>{
        localStorage.setItem("NomUtilisateur",valuerChampDuNomUser);
        localStorage.setItem("idUser",champId.value);
}
const retourArrierePartie1Form = (e) =>{
        e.preventDefault();
        retirerClasse(divPartie3DuValidation, "active");
        retirerClasse(divPartie1DuValidation, "desactive");
}
// validation du 2eme partie
const  afficheBureauUser = (valuerChampDuNomUser) =>{
        setTimeout( () => {
                let premierLettreNomUser = valuerChampDuNomUser.charAt(premierElement).toUpperCase();
                alert("c'est votre Id il faut le gardé");
                retirerClasse(form, "active");
                ajoutClasse(form, "desactive");
                ajoutClasse(wrapper, "active");
                ajoutClasse(divImage, "active");
                ajoutClasse(btnParametre, "active");
                ajoutClasse(btnMenu, "active");
                affichePremierLettreNomUser(valuerChampDuNomUser,premierLettreNomUser);
                stokeDataUser(valuerChampDuNomUser);
        },seconde2);
}
const envoieId = (e) =>{
        e.preventDefault();
        let generateNbr = Math.floor(Math.random() * NbrGenerate);
        champId.value = generateNbr;
        ajoutClasse(divPartie1DuValidation, "desactive")
        ajoutClasse(divPartie2DuValidation, "desactive");
        ajoutClasse(divPartie3DuValidation, "active");
        retirerClasse(containerbtnForvalidateIdUser, "desactive");
        retirerClasse(form, "animateForm");
        afficheBureauUser(ChampDUNom.value);
}
// retour à la partie 1 de notre formulaire
const retour = (e) =>{
        e.preventDefault();
        retirerClasse(form, "animateForm");
}

// valider la 1er partie de notre formulaire
const afficheMessage = (message) =>{
        msgError.innerHTML = message;
        msgError.classList.add("active");
        setTimeout(() => retirerClasse(msgError, "active"),seconde);  
} 
const validationNomUser = (e) =>{
        e.preventDefault();
        const valeurDuChamp = ChampDUNom.value;
        const tailleDuNom = 4;
        const expressionREg = /^[a-zA-Z'-_]+$/;
        if(!valeurDuChamp){
                afficheMessage("le champ est vide il faut le remplir");
                return;
        }
        else if(valeurDuChamp.length < tailleDuNom){
                afficheMessage("le champ doit contenir au moins 4 caractères");
                return;
        }
        else{
                if(!valeurDuChamp.match(expressionREg)){
                       afficheMessage("le nom ne doit avoir par un chifrre ou caractère speéciaux");
                        return;
                }
                ajoutClasse(form, "animateForm");
        }
}
window.addEventListener("load", () =>{
        parametrer_decochement_option(listOption);
        parametrer_cochement_option(listOption);
})
buttonDeConnection1.addEventListener("click",validationNomUser);
buttonDeConnection2.addEventListener("click",envoieId);
buttonDeRetour.addEventListener("click",retour)
btnParametre.addEventListener("click",afficheParametre);
btnNePasSauvegarder.addEventListener("click",annulerParametre);
btnSauvegarder.addEventListener("click",SauvegarderLesModificationDuParametre);
fichierImg.addEventListener("change",afficheImgUser);
btnOptionCalculAge.addEventListener("click",afficheOptionCalculAge);
btnCalcul.addEventListener("click",calculerAge);
btnFlecheRetour.addEventListener("click",retourPrecedent);
btnParler.addEventListener("click",faireParler);
btnSeConnecter.addEventListener("click",SeConnecter);
btnMenu.addEventListener("click", faireApparaitreMenu);
btnValidateId.addEventListener("click",validateIdUser);
btnRetour.addEventListener("click",retourArrierePartie1Form);
btnParametre2.addEventListener("click",afficheParametre);
btnContunuer.addEventListener("click",()=>{
        afficheOption(inputCheckBienvenue.checked,()=>{
                ajoutClasse(form, "active");
                ajoutClasse(divInfoBienvenu, "desactive");
        })
});
btnContunuer2.addEventListener("click",()=>{
        afficheOption(inputCheckContunuer1.checked, () =>{
                ajoutClasse(containerAge, "active");
                ajoutClasse(btnFlecheRetour,"active");
                retirerClasse(DetailsAge, "active");
                retirerClasse(btnParametre, "active");
                retirerClasse(btnMenu, "active");
        });
});