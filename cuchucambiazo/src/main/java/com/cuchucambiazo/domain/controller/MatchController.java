package com.cuchucambiazo.domain.controller;

import api.cuchucambiazo.controller.match.api.MatchApi;
import api.cuchucambiazo.controller.match.model.GeneralBusinessResponse;
import api.cuchucambiazo.controller.match.model.MatchGetResponse;
import api.cuchucambiazo.controller.match.model.MatchRequest;
import api.cuchucambiazo.controller.match.model.Message;
import com.cuchucambiazo.domain.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.NativeWebRequest;

import java.util.Optional;

@RestController
public class MatchController implements MatchApi {

    @Autowired
    private MatchService service;

    @Override
    @CrossOrigin
    public ResponseEntity<MatchGetResponse> getMatchs(String email) {
        return new ResponseEntity<>(service.getMatchs(email), HttpStatus.ACCEPTED);
    }

    @Override
    @CrossOrigin
    public ResponseEntity<GeneralBusinessResponse> closeMatch(MatchRequest matchRequest) {
        return MatchApi.super.closeMatch(matchRequest);
    }

    @Override
    @CrossOrigin
    public ResponseEntity<GeneralBusinessResponse> addMessage(Message message) {
        return MatchApi.super.addMessage(message);
    }
}
