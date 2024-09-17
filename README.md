<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Backend - Service de Livraison
Ce projet représente l'API backend pour le service de livraison, développée en utilisant NestJS. Le backend gère toutes les fonctionnalités principales telles que la gestion des livreurs, des colis, des factures, ainsi que l'envoi de SMS via Twilio.

## Fonctionnalités
Gestion des livreurs : CRUD (Créer, Lire, Mettre à jour, Supprimer) des livreurs.

Gestion des colis : Suivi des colis avec différentes options de statut (en cours, livré, retourné).

Gestion des factures : Génération et suivi des factures liées aux livraisons.

Notifications par SMS : Envoi automatique d'un SMS au client lorsque le colis est en route, via Twilio.

Sécurité : Authentification des utilisateurs avec JWT et utilisation de AuthGuard pour protéger les routes sensibles.

Déploiement : Le projet est déployé en ligne sur Render.

## Technologies utilisées
NestJS : Framework Node.js pour construire l'API.

MongoDB : Base de données NoSQL pour stocker les données des livreurs, colis, factures, etc.

JWT : JSON Web Token pour l'authentification et la sécurisation des API.

Twilio : Service pour l'envoi de SMS.

Render : Service de déploiement pour l'API backend.

## Prérequis
Node.js 

MongoDB

NestJS CLI

## Installation
Cloner le projet 

Installer les dépendances :

    npm install

Configurer les variables d'environnement :

JWT_SECRET=your_jwt_secret

TWILIO_ACCOUNT_SID=your_twilio_account_sid

TWILIO_AUTH_TOKEN=your_twilio_auth_token

TWILIO_PHONE_NUMBER=your_twilio_phone_number

Démarrer l'application :

    npm run start
L'API sera disponible à l'adresse suivante :

http://localhost:3000


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


