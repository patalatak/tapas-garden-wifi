// api/wifi-fr.js
// Vercel Serverless Function for Tapas Garden WiFi (French)
// Cette fonction traite les soumissions de formulaire et envoie des notifications par email

const nodemailer = require('nodemailer');

export default async (req, res) => {
  // Accepter uniquement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const { email, name, mac_address, client_ip, session_id } = req.body;

    // Valider l'email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Adresse email invalide' });
    }

    // Configurer le service d'email (utiliser Gmail ou votre fournisseur)
    // IMPORTANT: Définir les variables d'environnement dans Vercel:
    // - EMAIL_USER: votre email (contact@tapasgarden.com)
    // - EMAIL_PASSWORD: votre mot de passe d'application (obtenir depuis Gmail)
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email pour vous (admin)
    const adminEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nouvelle demande WiFi - ${email}`,
      text: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              NOUVELLE DEMANDE WiFi
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Email:        ${email}
Nom:          ${name || 'Non fourni'}
Adresse MAC:  ${mac_address || 'N/A'}
IP Client:    ${client_ip || 'N/A'}
ID Session:   ${session_id || 'N/A'}
Date/Heure:   ${new Date().toISOString()}
IP Source:    ${req.headers['x-forwarded-for'] || req.ip}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACTIONS À FAIRE:

1. Allez dans Omada Cloud
2. Générez un voucher \"Tapas_1h\" (1 heure)
3. Répondez à cet email avec le code

Modèle d'email à renvoyer:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bonjour ${name || 'Invité'},

Merci de vous être enregistré pour le WiFi gratuit ! 🍽️

Voici votre code pour 1 heure de WiFi gratuit :

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    [CODE À GÉNÉRER]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Comment utiliser :
1. Connectez-vous à \"Tapas_Garden_Free\"
2. Ouvrez un navigateur
3. Le portail s'affiche
4. Entrez le code ci-dessus
5. Profitez ! 🎉

À bientôt ! 🌶️

— L'équipe Tapas Garden
contact@tapasgarden.com
+66 83 847 8500

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`,
    };

    // Email pour le client
    const customerEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Votre code WiFi Tapas Garden',
      text: `Bonjour ${name || 'Invité'},

Merci de vous être enregistré pour le WiFi gratuit chez Tapas Garden ! 🍽️

Votre code WiFi vous sera envoyé dans quelques minutes.

En attendant :
1. Connectez-vous au réseau WiFi \"Tapas_Garden_Free\"
2. Ouvrez un navigateur
3. Un portail s'affichera
4. Entrez votre code quand demandé
5. Profitez de 1 heure d'accès gratuit !

Si vous ne recevez pas votre code dans les 5 minutes, veuillez nous contacter :
contact@tapasgarden.com ou +66 83 847 8500

À bientôt ! 🌶️

— L'équipe Tapas Garden
Koh Samui, Thaïlande
`,
    };

    // Envoyer les deux emails
    await transporter.sendMail(adminEmail);
    await transporter.sendMail(customerEmail);

    // Retourner succès
    return res.status(200).json({
      success: true,
      message: 'Demande WiFi soumise avec succès',
      email: email,
    });

  } catch (error) {
    console.error('Erreur:', error);
    return res.status(500).json({
      error: 'Erreur lors du traitement de la demande',
      details: error.message,
    });
  }
};
