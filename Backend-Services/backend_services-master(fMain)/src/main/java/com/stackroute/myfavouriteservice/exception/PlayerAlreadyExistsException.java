package com.stackroute.myfavouriteservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT , reason = "Player already exists")
public class PlayerAlreadyExistsException extends Exception {

}
