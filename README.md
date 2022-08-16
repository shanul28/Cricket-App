# Cricket-App
This Website shows current cricket matches which are going on in the world , it shows the list of cricket players
along with the upcoming series details.
The Website has a feature of user login also and add to favourite option is also give.
User can also change his/her user details like username or password.

  ## API: 
   * https://api.cricapi.com This base API is used to fetch the details of cricket players and matches.
  
  ## Frontend: 
   * The Frontend part of this app is built on Angular.
   
  ## Backend:
   * The Backend part is built using Spring Boot on microservices architecture.
   * There are 3 services: 
      * UserAuthenticationService (JWT is used for Authentication and transferring data in compact way)
      * FavouriteServices
      * API GATEWAY service which is used to converge all the request at a single port.
   * All the services are registered on EUREKA service discovery.
    
  ## Database:
   * MySQL database is used for storing user's credentials. 
   * MongoDB is used for storing Favourite players details.
  
 ** for testing Junit and Mockito has been used in backend.
 ** Docker is also used for Containarization.
   
   
