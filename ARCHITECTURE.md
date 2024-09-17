## Architecture du projet
Ce document décrit l'architecture de l'API backend du service de livraison, développée en utilisant NestJS.

## Modèle de conception
Le projet utilise une architecture modulaire basée sur NestJS, un framework qui suit les principes de l'architecture MVC (Modèle-Vue-Contrôleur).

Modules : Chaque fonctionnalité principale (livreurs, colis, factures) est gérée dans son propre module, ce qui permet une séparation claire des responsabilités et facilite la maintenance.

Services : Chaque module dispose de son service dédié qui contient la logique métier. Les services sont injectés dans les contrôleurs.

Contrôleurs : Les contrôleurs reçoivent les requêtes HTTP, appellent les services pour exécuter la logique, et renvoient les réponses au client.

Middleware : Des middlewares sont utilisés pour gérer l'authentification (JWT) et d'autres traitements spécifiques avant de passer les requêtes aux contrôleurs.

Bases de données : Utilisation de MongoDB via Mongoose pour stocker les informations sur les livreurs, les colis et les factures.

Sécurité : L'authentification est gérée avec JWT (JSON Web Token), et certaines routes sont protégées par des gardes (AuthGuard).

Services externes : Twilio est utilisé pour l'envoi de SMS, permettant d'informer les clients lorsque leur colis est en route.

## Schéma de l'architecture
```bash
  +---------------------+          +---------------------+
  |   Frontend (Flutter) | <------> |   Backend (NestJS)   |
  +---------------------+          +---------------------+
            ^                              ^
            |                              |
+-------------------+              +---------------------+
|  Base de données  |              |  API Twilio (SMS)    |
|    MongoDB        |              +---------------------+
+-------------------+
```
## Flux des données
Requêtes des clients : Le frontend envoie des requêtes HTTP (GET, POST, PUT, DELETE) au backend.

Contrôleurs : Les contrôleurs interceptent les requêtes et appellent les services appropriés.

Services : Les services exécutent la logique métier (comme la gestion des colis ou des factures) et interagissent avec MongoDB pour récupérer ou stocker des données.

Réponses : Le backend renvoie les réponses au frontend sous forme de JSON.

Envoi de SMS : Lorsqu'un colis est en route, le backend utilise Twilio pour envoyer une notification par SMS au client.




## Structure du projet
Le projet suit une organisation modulaire, avec chaque fonctionnalité placée dans son propre module. Cela permet une séparation claire des responsabilités et facilite la maintenance et l'évolutivité.

## Arborescence des fichiers

```bash
├── src
│   ├── auth                          # Module pour la gestion de l'authentification
│   │   ├── dto
│   │   │   ├── login.dto.ts          # DTO pour la connexion
│   │   │   └── signup.dto.ts         # DTO pour l'inscription
│   │   ├── schemas
│   │   │   └── livreur.schema.ts     # Schéma Mongoose pour le livreur
│   │   ├── auth.controller.ts        # Contrôleur d'authentification
│   │   ├── auth.module.ts            # Module d'authentification
│   │   ├── auth.service.ts           # Service d'authentification
│   │   └── jwt.strategy.ts           # Stratégie JWT pour sécuriser les routes
│
│   ├── colis                         # Module pour la gestion des colis
│   │   ├── dto
│   │   │   ├── create-colis.dto.ts   # DTO pour la création de colis
│   │   │   ├── update-colis.dto.ts   # DTO pour la mise à jour de colis
│   │   │   └── update-status.dto.ts  # DTO pour la mise à jour du statut des colis
│   │   ├── schemas
│   │   │   └── colis.schema.ts       # Schéma Mongoose pour les colis
│   │   ├── colis.controller.ts       # Contrôleur pour les colis
│   │   ├── colis.module.ts           # Module pour la gestion des colis
│   │   └── colis.service.ts          # Service pour la logique métier liée aux colis
│
│   ├── facture                       # Module pour la gestion des factures
│   │   ├── dto
│   │   │   ├── create-facture.dto.ts # DTO pour la création de facture
│   │   │   ├── update-facture.dto.ts # DTO pour la mise à jour de facture
│   │   │   └── update-status.dto.ts  # DTO pour la mise à jour du statut de la facture
│   │   ├── schemas
│   │   │   └── facture.schema.ts     # Schéma Mongoose pour les factures
│   │   ├── facture.controller.ts     # Contrôleur pour les factures
│   │   ├── facture.module.ts         # Module pour les factures
│   │   └── facture.service.ts        # Service pour la gestion des factures
│
│   ├── reclamation                   # Module pour la gestion des réclamations
│   │   ├── schemas
│   │   │   └── reclamation.schema.ts # Schéma Mongoose pour les réclamations
│   │   ├── reclamation.controller.ts # Contrôleur pour les réclamations
│   │   ├── reclamation.module.ts     # Module pour les réclamations
│   │   └── reclamation.service.ts    # Service pour la gestion des réclamations
│
│   ├── transporteur                  # Module pour la gestion des livreurs
│   │   ├── dto
│   │   │   ├── create-transporteur.dto.ts  # DTO pour la création de livreur
│   │   │   └── update-transporteur.dto.ts  # DTO pour la mise à jour des livreurs
│   │   ├── schemas
│   │   │   └── transporteur.schema.ts     # Schéma Mongoose pour les livreurs
│   │   ├── transporteur.controller.ts     # Contrôleur pour les livreurs
│   │   ├── transporteur.module.ts         # Module pour les livreurs
│   │   └── transporteur.service.ts        # Service pour la gestion des livreurs
│
│   ├── app.controller.spec.ts        # Tests unitaires du contrôleur principal
│   ├── app.controller.ts             # Contrôleur principal de l'application
│   ├── app.module.ts                 # Module principal de l'application
│   ├── app.service.ts                # Service principal de l'application
│   └── main.ts                       # Point d'entrée de l'application NestJS
│
├── test                              # Dossier contenant les tests unitaires
├── .eslintrc.js                      # Configuration ESLint
├── .gitignore                        # Fichier pour ignorer certains fichiers dans Git
├── .prettierrc                       # Configuration Prettier pour formater le code
├── README.md                         # Documentation du projet
├── nest-cli.json                     # Fichier de configuration pour le CLI NestJS
├── package-lock.json                 # Fichier de verrouillage des dépendances npm
├── package.json                      # Fichier contenant les dépendances et scripts npm
├── tsconfig.build.json               # Configuration TypeScript pour la build
└── tsconfig.json                     # Configuration TypeScript pour le projet
```
## Description des dossiers et fichiers principaux

auth : Ce module gère toute la logique d'authentification, incluant l'inscription et la connexion des utilisateurs, avec une protection par JWT.

colis : Ce module contient la logique de gestion des colis, leur création, mise à jour et changement de statut.

facture : Ce module permet de gérer les factures liées aux livraisons, en incluant les opérations CRUD et la mise à jour de statut.

reclamation : Ce module permet de gérer les réclamations des clients. Les réclamations sont stockées dans MongoDB et peuvent être consultées et modifiées.

transporteur : Ce module est destiné à la gestion des livreurs. Il permet d'ajouter, de modifier, de supprimer, et de consulter les livreurs.

app.controller.ts et app.service.ts : Contrôleur et service principaux de l'application qui centralisent certaines routes générales.

main.ts : Fichier principal qui démarre l'application NestJS.

