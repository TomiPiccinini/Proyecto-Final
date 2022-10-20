package com.cuchucambiazo.domain.controller;

import api.cuchucambiazo.controller.media.api.MediaApi;
import api.cuchucambiazo.controller.media.model.*;
import com.cuchucambiazo.domain.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MediaController implements MediaApi {

    @Autowired
    private MediaService service;

    @Override
    public ResponseEntity<GetMediaResponse> getMedias(GetMediaRequest getMediaRequest) {
        GetMediaResponse response = service.getMedias(getMediaRequest);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<GeneralBusinessResponse> saveMedia(Media media) {
        service.saveMedia(media);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
