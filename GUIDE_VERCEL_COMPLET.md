# 🚀 Guide d'installation Vercel - Pas à pas

## ⏱️ Temps total : 15 minutes

---

## 📋 Ce que vous avez :

```
api/wifi.js              ← Fonction anglaise
api/wifi-fr.js           ← Fonction française
package.json             ← Dépendances
vercel.json              ← Configuration
CODE_1_ENGLISH_VERCEL.txt   ← Formulaire anglais
CODE_1_FRENCH_VERCEL.txt    ← Formulaire français
README.md                ← Documentation
```

---

## ✅ ÉTAPE 1 : Uploader les fichiers sur GitHub (5 min)

### 1.1 Allez sur votre repository GitHub

https://github.com/patalatak/tapas-garden-wifi

### 1.2 Créer le dossier `api/`

1. Cliquez **"Add file"** → **"Create new file"**
2. Écrivez : `api/wifi.js`
3. **Cela crée automatiquement le dossier `api/`**
4. Collez le contenu du fichier **`api_wifi.js`** que vous avez
5. Cliquez **"Commit changes"**

### 1.3 Ajouter `api/wifi-fr.js`

1. Cliquez **"Add file"** → **"Create new file"**
2. Écrivez : `api/wifi-fr.js`
3. Collez le contenu du fichier **`api_wifi_fr.js`**
4. Cliquez **"Commit changes"**

### 1.4 Ajouter `package.json`

1. Cliquez **"Add file"** → **"Create new file"**
2. Écrivez : `package.json`
3. Collez le contenu du fichier **`package.json`**
4. Cliquez **"Commit changes"**

### 1.5 Ajouter `vercel.json`

1. Cliquez **"Add file"** → **"Create new file"**
2. Écrivez : `vercel.json`
3. Collez le contenu du fichier **`vercel.json`**
4. Cliquez **"Commit changes"**

### 1.6 Ajouter `README.md`

1. Cliquez **"Add file"** → **"Create new file"**
2. Écrivez : `README.md`
3. Collez le contenu du fichier **`README.md`**
4. Cliquez **"Commit changes"**

**✅ Tous les fichiers sont maintenant sur GitHub !**

---

## ✅ ÉTAPE 2 : Connecter Vercel à GitHub (3 min)

### 2.1 Allez sur Vercel

https://vercel.com

### 2.2 Se connecter ou créer un compte

1. Cliquez **"Sign Up"**
2. Connectez-vous avec votre compte GitHub
3. Autorisez Vercel

### 2.3 Importer le projet

1. Cliquez **"Add New"** → **"Project"**
2. Cliquez **"Import Git Repository"**
3. Sélectionnez **`tapas-garden-wifi`**
4. Cliquez **"Import"**

### 2.4 Configurer les variables d'environnement

**IMPORTANT** : Avant de déployer, ajoutez vos identifiants email.

1. Vous voyez un écran "Configure Project"
2. Cliquez **"Environment Variables"**
3. Ajoutez 2 variables :

```
Variable 1:
NAME: EMAIL_USER
VALUE: contact@tapasgarden.com

Variable 2:
NAME: EMAIL_PASSWORD
VALUE: votre_mot_de_passe_gmail
```

**Comment obtenir le mot de passe Gmail :**

1. Allez sur : https://myaccount.google.com/apppasswords
2. Connectez-vous à votre compte Google
3. Sélectionnez :
   - App: **Mail**
   - Device: **Windows Computer**
4. Générez un mot de passe (16 caractères)
5. **Copiez-le** et mettez-le dans Vercel

### 2.5 Déployer

1. Cliquez **"Deploy"**
2. **Attendez 2-3 minutes** que Vercel déploie
3. Vous verrez : ✅ **"Deployment Successful"**
4. Notez votre URL Vercel (ex: `https://tapas-garden-wifi.vercel.app`)

---

## ✅ ÉTAPE 3 : Mettre à jour les formulaires (5 min)

### 3.1 Formulaire ANGLAIS

1. **Ouvrez** : `CODE_1_ENGLISH_VERCEL.txt`
2. **Cherchez** : `const VERCEL_URL = 'https://YOUR_VERCEL_URL/api/wifi';`
3. **Remplacez** `YOUR_VERCEL_URL` par votre vrai URL
   - **Avant** : `https://YOUR_VERCEL_URL/api/wifi`
   - **Après** : `https://tapas-garden-wifi.vercel.app/api/wifi`
4. **Sauvegardez** le fichier
5. **Allez à** : https://tapas-garden.com/uswifi
6. **Supprimez** l'ancien code
7. **Collez** le NOUVEAU code
8. **Sauvegardez**

### 3.2 Formulaire FRANÇAIS

1. **Ouvrez** : `CODE_1_FRENCH_VERCEL.txt`
2. **Cherchez** : `const VERCEL_URL = 'https://YOUR_VERCEL_URL/api/wifi-fr';`
3. **Remplacez** `YOUR_VERCEL_URL` par votre vrai URL
   - **Avant** : `https://YOUR_VERCEL_URL/api/wifi-fr`
   - **Après** : `https://tapas-garden-wifi.vercel.app/api/wifi-fr`
4. **Sauvegardez** le fichier
5. **Allez à** : https://tapas-garden.com/frwifi
6. **Supprimez** l'ancien code
7. **Collez** le NOUVEAU code
8. **Sauvegardez**

---

## ✅ ÉTAPE 4 : Tester (2 min)

### Test 1 : Formulaire anglais

1. Allez à : https://tapas-garden.com/uswifi
2. Remplissez :
   - Email : `test@example.com`
   - Nom : `Test`
3. Cliquez **"Get 1 Hour Free"**
4. **Vérifiez votre email** : contact@tapasgarden.com

**Vous devriez recevoir :**
- 1 email de notification (pour vous)
- 1 email de confirmation (pour le client)

### Test 2 : Formulaire français

1. Allez à : https://tapas-garden.com/frwifi
2. Remplissez :
   - Email : `test2@example.com`
   - Nom : `Test FR`
3. Cliquez **"Obtenir 1h Gratuite"**
4. **Vérifiez votre email** : contact@tapasgarden.com

**Vous devriez recevoir les mêmes emails, mais en français.**

---

## 🎉 C'EST FINI !

Vous avez maintenant :

✅ **Vercel déployé** (gratuit, illimité)
✅ **2 formulaires** (anglais + français)
✅ **Emails automatiques** (notifications + confirmations)
✅ **AUCUNE limite** de soumissions

---

## 🚨 Dépannage

### "Les emails ne s'envoient pas"

```
✅ Vérifiez :
   1. EMAIL_USER et EMAIL_PASSWORD dans Vercel
   2. Le mot de passe Gmail est correct
   3. Allez vérifier les SPAM
```

### "Erreur lors du déploiement"

```
✅ Vérifiez :
   1. Tous les fichiers sont sur GitHub
   2. Les noms des fichiers sont corrects
   3. Les dossiers existent (api/)
```

### "Le formulaire ne soumet pas"

```
✅ Vérifiez :
   1. L'URL Vercel est correcte dans le formulaire
   2. Ouvrez la console (F12) pour les erreurs
```

---

## 📞 Support Vercel

Si vous avez besoin d'aide :
- Docs : https://vercel.com/docs
- Support : https://vercel.com/support

---

## ✅ Checklist finale

- [ ] Tous les fichiers uploadés sur GitHub
- [ ] Vercel déployé avec succès
- [ ] Variables d'environnement configurées
- [ ] URL Vercel notée
- [ ] Formulaires anglais mis à jour
- [ ] Formulaires français mis à jour
- [ ] Test anglais passé
- [ ] Test français passé
- [ ] Emails reçus

**Si tout est coché → SUCCÈS ! 🚀**

---

## 🎊 Résumé

Vous avez maintenant un système **WiFi professionnel, automatisé et gratuit** pour Tapas Garden ! 🍽️

**Avantages Vercel :**
- ✅ Gratuit pour toujours
- ✅ Illimité (aucune limite de soumissions)
- ✅ Temps de réponse rapide
- ✅ Emails automatiques
- ✅ Infrastructure fiable

Bon courage ! 🚀
