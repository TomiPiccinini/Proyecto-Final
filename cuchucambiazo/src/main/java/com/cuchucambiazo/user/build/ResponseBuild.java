package com.cuchucambiazo.user.build;

import api.cuchucambiazo.controller.user.model.GeneralBusinessResponse;
import org.springframework.stereotype.Component;

@Component
public class ResponseBuild {

    public GeneralBusinessResponse userResponseBuild(String code, String message){
        GeneralBusinessResponse userResponse = new GeneralBusinessResponse();
        userResponse.setCode(code);
        userResponse.setMessage(message);
        return userResponse;
    }

}
