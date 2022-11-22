package com.cuchucambiazo.domain.controller;

import api.cuchucambiazo.controller.media.api.MediaApi;
import api.cuchucambiazo.controller.media.model.*;
import com.cuchucambiazo.domain.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MediaController implements MediaApi {

    @Autowired
    private MediaService service;


    @Override
    @CrossOrigin
    public ResponseEntity<GetMediaResponse> getMedias(GetMediaRequest getMediaRequest) {
        GetMediaResponse response = service.getMedias(getMediaRequest);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @Override
    @CrossOrigin
    public ResponseEntity<GeneralBusinessResponse> saveMedia(MediaRequest request) {
        service.saveMedia(request);
        return new ResponseEntity<>(buildGeneralBusinessResponse() ,HttpStatus.CREATED);
    }

    @Override
    @CrossOrigin
    public ResponseEntity<GeneralBusinessResponse> removeMedia(Integer body) {
        service.deleteMedia(body);
        return new ResponseEntity<>(buildGeneralBusinessResponse(), HttpStatus.ACCEPTED);
    }


    public GeneralBusinessResponse buildGeneralBusinessResponse(){
        GeneralBusinessResponse generalBusinessResponse = new GeneralBusinessResponse();
        generalBusinessResponse.setCode("00");
        generalBusinessResponse.setMessage("Correcto");

        return generalBusinessResponse;
    }


}

