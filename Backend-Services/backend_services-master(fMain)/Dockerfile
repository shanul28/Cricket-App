#here is the openjdk for the docker image
FROM openjdk:11.0.14-jre
#working directory inside the image
WORKDIR usr/src
ENV MONGO_DATABASE cplayerdb
ENV MONGO_URL mongodb://localhost:27017/cplayerdb

#jarfile in usr/src working directory
ADD ./target/myfavouriteservice-0.0.1-SNAPSHOT.jar /src/lib/myfavouriteservice-0.0.1-SNAPSHOT.jar
#running the jar file
ENTRYPOINT ["java","-jar","myfavouriteservice-0.0.1-SNAPSHOT.jar"]


# docker build -t shanul/favorites:v1 .
#docker images
#docker login
#docker push shanul/favorites:v1
#docker run -p 9000:8082 --name favorites_container shanul/favorites:v1