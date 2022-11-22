package com.cuchucambiazo.domain.controller;

import api.cuchucambiazo.controller.like.api.LikeApi;
import api.cuchucambiazo.controller.like.model.GetLikeResponse;
import api.cuchucambiazo.controller.like.model.Like;
import api.cuchucambiazo.controller.like.model.LikeResponse;
import com.cuchucambiazo.domain.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LikeController implements LikeApi {

    @Autowired
    private LikeService service;



    @Override
    @CrossOrigin
    public ResponseEntity<LikeResponse> saveLike(Like like) {

        LikeResponse response = service.saveLike(like);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
