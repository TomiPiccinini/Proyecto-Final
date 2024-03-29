package com.cuchucambiazo.user;

import api.cuchucambiazo.controller.user.api.UsersApi;
import api.cuchucambiazo.controller.user.model.GeneralBusinessResponse;
import api.cuchucambiazo.controller.user.model.User;
import api.cuchucambiazo.controller.user.model.UserGetResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController implements UsersApi {

    @Autowired
    private UserService userService;

    @Override
    public ResponseEntity<UserGetResponse> getUsers() {
        return UsersApi.super.getUsers();
    }

    @Override
    public ResponseEntity<GeneralBusinessResponse> saveUser(User userRequest) {

        GeneralBusinessResponse response = userService.saveUser(userRequest);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
