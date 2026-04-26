# Guide de résolution des problèmes Firebase

## Problèmes identifiés :
1. ❌ **Authentification expirée** : "Your credentials are no longer valid"
2. ❌ **Site non configuré** : "no site name or target name"

## Solutions :

### 1. Configuration du projet Firebase

**Étape 1 :** Remplacez "votre-projet-firebase" dans `.firebaserc` par votre vrai ID de projet Firebase :
```json
{
  "projects": {
    "default": "monceau-david-conseil-2024"
  }
}
```

**Étape 2 :** Dans `firebase.json`, ajoutez la configuration du site :
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "site": "votre-site-firebase"
  }
}
```

### 2. Réauthentification Firebase

**Commande à exécuter :**
```bash
firebase login --reauth
```

Cela ouvrira une fenêtre de navigateur pour vous reconnecter.

### 3. Déploiement

Une fois configuré et authentifié :
```bash
firebase deploy
```

## Vérification

Pour vérifier que tout fonctionne :
```bash
firebase projects:list
firebase use --add
```

## Alternative : Variables d'environnement

Si vous préférez utiliser des variables d'environnement pour CI/CD :
```bash
firebase login:ci
```
Cela génère un token que vous pouvez utiliser dans vos pipelines CI/CD.


