![WhatsApp Image 2022-07-31 at 10 28 53 AM](https://user-images.githubusercontent.com/44204130/184974087-971a1005-96d3-4b05-a025-afea1f083ea5.jpeg)
![WhatsApp Image 2022-07-31 at 10 27 59 AM](https://user-images.githubusercontent.com/44204130/184974095-3b5972cf-18f8-42f6-93cb-decf85bce4e0.jpeg)
![WhatsApp Image 2022-07-30 at 11 32 34 PM](https://user-images.githubusercontent.com/44204130/184974096-3b005b4d-b2bb-4f04-ab9a-16d575193a6d.jpeg)
![WhatsApp Image 2022-07-30 at 11 31 32 PM](https://user-images.githubusercontent.com/44204130/184974102-7c646e22-e4cb-4200-a39e-9b5926e0d0c3.jpeg)
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
  
 * for testing Junit and Mockito has been used in backend.
 * Docker is also used for Containarization.
   
   
