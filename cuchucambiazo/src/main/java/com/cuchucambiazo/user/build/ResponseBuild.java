package com.cuchucambiazo.user.build;

import api.orange.business.controller.user.model.UserResponse;
import org.springframework.stereotype.Component;

@Component
public class ResponseBuild {

    public UserResponse userResponseBuild(String code, String message){
        UserResponse userResponse = new UserResponse();
        userResponse.setCode(code);
        userResponse.setMessage(message);
        return userResponse;
    }

}
