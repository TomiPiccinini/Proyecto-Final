package com.cuchucambiazo.commons.utils;

import api.cuchucambiazo.controller.user.model.GeneralBusinessResponse;
import org.springframework.stereotype.Component;

@Component
public class Utils {

    public GeneralBusinessResponse buildGeneralBusinessResponse(){
        GeneralBusinessResponse generalBusinessResponse = new GeneralBusinessResponse();
        generalBusinessResponse.setCode("00");
        generalBusinessResponse.setMessage("Correcto");

        return generalBusinessResponse;
    }

}
