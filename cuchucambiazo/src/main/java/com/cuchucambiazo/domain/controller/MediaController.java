package com.cuchucambiazo.domain.controller;

import api.cuchucambiazo.controller.media.api.MediaApi;
import api.cuchucambiazo.controller.media.model.Media;
import api.cuchucambiazo.controller.media.model.MediaResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MediaController implements MediaApi {

    @Override
    public ResponseEntity<MediaResponse> getMedias() {
        return MediaApi.super.getMedias();
    }

    @Override
    public ResponseEntity<MediaResponse> saveMedia(Media media) {
        return MediaApi.super.saveMedia(media);
    }
}
