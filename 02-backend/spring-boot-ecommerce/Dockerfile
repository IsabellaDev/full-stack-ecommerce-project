FROM openjdk:17
COPY ./target/spring-boot-ecommerce-0.0.1-SNAPSHOT.jar /user/app/
WORKDIR /user/app
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "spring-boot-ecommerce-0.0.1-SNAPSHOT.jar"]