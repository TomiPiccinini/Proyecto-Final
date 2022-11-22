package com.cuchucambiazo.domain.service;

import api.cuchucambiazo.controller.match.model.Match;
import api.cuchucambiazo.controller.match.model.MatchGetResponse;
import api.cuchucambiazo.controller.match.model.MatchRequest;
import api.cuchucambiazo.controller.match.model.MsgMatch;
import api.cuchucambiazo.controller.media.model.Media;
import api.cuchucambiazo.controller.user.model.User;
import com.cuchucambiazo.domain.repository.MatchRepository;
import com.cuchucambiazo.domain.repository.MediaRepository;
import com.cuchucambiazo.domain.repository.UserRepository;
import com.cuchucambiazo.persistence.MensajeRepository;
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

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MensajeRepository mensajeRepository;

    public MatchGetResponse getMatchs(String email){

        MatchGetResponse response = new MatchGetResponse();
        List<MsgMatch> matchesWithMsg = new ArrayList<>();

        Integer userId = userRepository.findByEmail(email).getUserId();

        mediaRepository.getAllWithUserId(userId).forEach(a -> {
            matchRepository.getMatchs(a.getMediaId()).forEach(mat -> {

                MsgMatch msgMatch = new MsgMatch();

                msgMatch.setDateTimeMatch(mat.getDateTimeMatch());
                msgMatch.setMensajes(null);

                Integer otherMediaId = mat.getMediaId1().equals(a.getMediaId()) ? a.getMediaId() : mat.getMediaId2();
                Media otherMedia = mediaRepository.getMediaByMediaId(otherMediaId);
                msgMatch.setIdOtherUser(otherMedia.getUserId());

                User otherUser = userRepository.findByUserId(otherMedia.getUserId());
                msgMatch.setNameOtherUser(otherUser.getName());
                msgMatch.setFoto(otherMedia.getPhotoList().get(0).getUrl());

                msgMatch.setMensajes(mensajeRepository.getAllMessagesByMatchId(mat.getMatchId()));
            });

        });


        response.setMatchs(matchesWithMsg);
        return response;
    }

    public void closeMatch(MatchRequest request){

    }

}
