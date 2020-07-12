# Vault

A web app for remembering where you put the important stuff.

The app was made with **React** and **Bootstrap** in the frontend, and **Django** for the backend with an **SQLite** database. The app also makes use of **Docker** to make deployment easier/to make it easier for you to run it on your machine!

![Image of Vault](https://github.com/nikolamarunic/images/blob/master/vault./vault_splash.png)

# Overview
Vault allows users to add, edit, and delete the items in their 'vault' - aka the items they want to track.

<p align="center">
  <img src = https://media.giphy.com/media/igmUouDNw6ooP6RZ3A/giphy.gif>
</p>

<p align="center">
  <img src = https://media.giphy.com/media/dUO3ak4fUsfoG3EYBN/giphy.gif>
</p>

Users can search for items based on both the names of the items as well as where they are stored - i.e, searching 'bed' will show you all the items situated around your bed.

<p align="center">
  <img src = https://media.giphy.com/media/QC7ZrfgIDJQUPjiGSd/giphy.gif>
</p>

Users must create an account and all info is saved to an SQLite database in the backend.

<p align="center">
  <img src = https://media.giphy.com/media/UVZBSeEpDb7ogycXf4/giphy.gif>
</p>

<p align="center">
  <img src = https://media.giphy.com/media/Lr3T1Jodi30SytitTm/giphy.gif>
</p>

# Running it locally
1. Clone the repository locally with git clone
2. Make sure docker is installed (see [here](https://docs.docker.com/get-docker/))
3. Navigate to the repository (cd /your_path/vault)
4. Run 'docker-compose up' and check out the app at http://localhost:3000/!

# LICENSE
MIT



