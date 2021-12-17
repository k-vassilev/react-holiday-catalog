<div id="top"></div>

<a href="https://www.linkedin.com/in/kristian-vassilev-86076227/">![linkedin-shield]</a>



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/k-vassilev/react-holiday-catalog">
    <img src="public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Bulgaria tourism destinations catalog</h3>

  <p align="center">
    The app is a place, where its community members can add and vote on holiday destinations across Bulgaria.
	Users can browse all destinations without registration by utilizing the interactive map and view details when on a destination card.
	The app supports user registration, upon which more options are provided to the user - namely - to add even more destinations, edit and delete them as well as to list all of the user added content.
    <br />
    <a href="https://react-holiday-catalog.web.app/">View live</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
	 <li>
      <a href="#architecture">Architecture</a>
      <ul>
        <li><a href="#public">Public</a></li>
        <li><a href="#private">Private</a></li>
      </ul>
    </li>
  </ol>
</details>


<br />
<!-- ABOUT THE PROJECT -->
## About The Project

The project is created by using the React framework and a headless WordPress REST API for the back-end.
<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [React.js](https://reactjs.org/)
* [Headless WordPress](https://wordpress.org/)
* [react-bootstrap](https://react-bootstrap.github.io/)
* [react-confirm-box](https://www.npmjs.com/package/react-confirm-box)
* [react-hot-toast](https://react-hot-toast.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

To clone the repo, open your favourite code editor in the folder where you wish to clone the repo.
Open new terminal and type:
* using ssh
  ```
  git clone git@github.com:k-vassilev/react-holiday-catalog.git
  ```

### Installation

1. Open new terminal and type in:
   ```sh
   npm install
   ```
2. To run the app type:
   ```sh
   npm start
   ```
3. If everything went smoothly, the app should open on http://localhost:3000/

4. You can check the live version of the app on: https://react-holiday-catalog.web.app/

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Architecture

The app is split in public and private parts:

<p align="right">(<a href="#top">back to top</a>)</p>

## Public

The public part of the app gives access to the home page, the catalog page, a login pageas well as the ability to register as a new user.

* The home page consists of a header banner, a section with the four most recently added destinations and a section of all registered users.
* The catalog page consists of an interactive map, which filters all the destinations by the selected area. There is a button to reset the filter and show a list of 100 destinations.
* All destination cards show an image and likes counter. When the view details button on a destination is clicked it leads the user to additional information about the chosen destination as well as who is it`s creator.
* Every visitor can register to unlock some addition options or login if he already has a registration.

<p align="right">(<a href="#top">back to top</a>)</p>

## Private

The private part gives its registered users some more functionalities like:

* Being able to vote on destination via the like button. However they can only like each destination once.
* They can add new destinations
* They can edit and delete the destinations that they have created.
* They can check all destinations which they are owners of.

<p align="right">(<a href="#top">back to top</a>)</p>

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555