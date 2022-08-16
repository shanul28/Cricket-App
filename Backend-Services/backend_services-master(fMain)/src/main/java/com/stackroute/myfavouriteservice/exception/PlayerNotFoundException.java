package com.stackroute.myfavouriteservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code=HttpStatus.NOT_FOUND , reason="Player not found.")
public class PlayerNotFoundException extends Exception{

}
