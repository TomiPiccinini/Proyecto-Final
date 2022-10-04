package com.cuchucambiazo.user;

import api.orange.business.controller.user.api.UsersApi;
import api.orange.business.controller.user.model.UserGetResponse;
import api.orange.business.controller.user.model.UserResponse;
import api.orange.business.controller.user.model.UsersRequest;
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
    public ResponseEntity<UserResponse> saveUser(UsersRequest usersRequest) {

        UserResponse response = userService.saveUsers(usersRequest);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
