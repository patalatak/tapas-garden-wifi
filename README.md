# Tapas Garden WiFi Form Handler

Vercel Serverless Functions pour gérer les formulaires WiFi de Tapas Garden (anglais + français).

## 📁 Structure des fichiers

```
tapas-garden-wifi/
├── api/
│   ├── wifi.js          (Formulaire anglais)
│   └── wifi-fr.js       (Formulaire français)
├── package.json         (Dépendances)
├── vercel.json          (Configuration)
└── README.md            (Ce fichier)
```

## 🚀 Déploiement sur Vercel

### Étape 1 : Uploader les fichiers sur GitHub

1. Allez sur : https://github.com/patalatak/tapas-garden-wifi
2. Cliquez "Add file" → "Create new file"
3. Pour chaque fichier :
   - Créez le dossier `api/` si nécessaire
   - Créez les fichiers `wifi.js` et `wifi-fr.js`
   - Créez `package.json` et `vercel.json` à la racine

### Étape 2 : Connecter Vercel à GitHub

1. Allez sur : https://vercel.com
2. Connectez-vous (ou créez un compte gratuit)
3. Cliquez "Import Project"
4. Sélectionnez le repository `tapas-garden-wifi`
5. Cliquez "Import"

### Étape 3 : Configurer les variables d'environnement

Dans Vercel, ajoutez les variables :

```
EMAIL_USER = contact@tapasgarden.com
EMAIL_PASSWORD = votre mot de passe d'application Gmail
```

**Comment obtenir le mot de passe Gmail :**

1. Allez sur : https://myaccount.google.com/apppasswords
2. Sélectionnez "Mail" et "Windows Computer"
3. Générez un mot de passe
4. Copiez-le dans Vercel

### Étape 4 : Déployer

1. Vercel déploie automatiquement
2. Vous recevez une URL : `https://your-project.vercel.app`

## 📧 Endpoints créés

Après le déploiement, Vercel crée 2 endpoints :

```
https://your-project.vercel.app/api/wifi     (Anglais)
https://your-project.vercel.app/api/wifi-fr  (Français)
```

## 🎯 Utilisation

### Formulaire anglais

```html
<form method="POST" action="https://your-project.vercel.app/api/wifi">
  <input type="email" name="email" required>
  <input type="text" name="name">
  <button type="submit">Get WiFi</button>
</form>
```

### Formulaire français

```html
<form method="POST" action="https://your-project.vercel.app/api/wifi-fr">
  <input type="email" name="email" required>
  <input type="text" name="name">
  <button type="submit">Obtenir WiFi</button>
</form>
```

## ✅ Avantages

✅ **Gratuit** - Vercel est gratuit pour les fonctions serverless
✅ **Illimité** - Aucune limite de soumissions
✅ **Automatisé** - Les emails sont envoyés automatiquement
✅ **Rapide** - Déploiement en quelques secondes
✅ **Fiable** - Infrastructure Google Cloud

## 🔧 Support

Si vous avez des problèmes :

1. Vérifiez que les variables d'environnement sont configurées
2. Vérifiez que le mot de passe Gmail est correct
3. Allez dans les logs Vercel pour voir les erreurs

## 📝 Notes
# Deployed with Vercel

- Les emails sont envoyés via Gmail
- Vous recevez une notification pour chaque soumission
- Le client reçoit aussi un email de confirmation
- Maximum 30 secondes par requête (limite Vercel gratuit)
