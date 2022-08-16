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
 
![WhatsApp Image 2022-07-30 at 11 31 32 PM](https://user-images.githubusercontent.com/44204130/184974102-7c646e22-e4cb-4200-a39e-9b5926e0d0c3.jpeg)

![Screenshot (9)](https://user-images.githubusercontent.com/44204130/184974437-ca2588d9-b2de-456d-9b6d-da1259fa97af.png)

![WhatsApp Image 2022-07-31 at 10 27 59 AM](https://user-images.githubusercontent.com/44204130/184974597-82c97444-4f1a-43b0-9e9c-ea46064fb5f5.jpeg)

![WhatsApp Image 2022-07-31 at 10 28 53 AM](https://user-images.githubusercontent.com/44204130/184974590-edf6acfb-2d10-4d18-a5d2-ce0db24acc03.jpeg)

![WhatsApp Image 2022-07-31 at 11 15 12 AM](https://user-images.githubusercontent.com/44204130/184975172-df2570c0-a64f-4921-b5b7-6b21a47662da.jpeg)


   
