package com.cuchucambiazo.domain.service;

import api.cuchucambiazo.controller.match.model.Match;
import api.cuchucambiazo.controller.match.model.MatchGetResponse;
import api.cuchucambiazo.controller.match.model.MatchRequest;
import com.cuchucambiazo.domain.repository.MatchRepository;
import com.cuchucambiazo.domain.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;


@Service
public class MatchService {

    @Autowired
    private MatchRepository matchRepository;

    @Autowired
    private MediaRepository mediaRepository;

    public MatchGetResponse getMatchs(Integer userId){

        MatchGetResponse response = new MatchGetResponse();
        List<Match> matches = new ArrayList<>();

        mediaRepository.getAllWithUserId(userId).forEach(a -> {
            matches.addAll(matchRepository.getMatchs(a.getMediaId()));
        });
        response.setMatchs(matches);
        return response;
    }

    public void closeMatch(MatchRequest request){

    }

}
