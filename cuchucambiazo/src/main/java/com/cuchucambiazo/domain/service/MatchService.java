package com.cuchucambiazo.domain.service;

import api.cuchucambiazo.controller.match.model.*;
import api.cuchucambiazo.controller.media.model.Media;
import api.cuchucambiazo.controller.user.model.User;
import com.cuchucambiazo.domain.repository.MatchRepository;
import com.cuchucambiazo.domain.repository.MediaRepository;
import com.cuchucambiazo.domain.repository.MessageRepository;
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
    private MessageRepository messageRepository;

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

                List<MessageRequest> messageRequests = new ArrayList<>();
                messageRepository.getAllMessagesByMatchId(mat.getMatchId()).forEach(mess -> {
                    MessageRequest messageReq = new MessageRequest();
                    messageReq.setMatchId(mess.getMatchId());
                    messageReq.setText(mess.getText());
                    messageReq.setDateTime(mess.getDateTime());
                    messageReq.setEmailIssuing(userRepository.findByUserId(mess.getUserIssuing()).getEmail());
                    messageReq.setEmailReceiver(userRepository.findByUserId(mess.getUserReceiver()).getEmail());
                    messageRequests.add(messageReq);
                });

                msgMatch.setMensajes(messageRequests);

                matchesWithMsg.add(msgMatch);
            });

        });


        response.setMatchs(matchesWithMsg);
        return response;
    }

    public void closeMatch(MatchRequest request){
        matchRepository.closeMatch(request.getMatchId(), request.getReason().getValue());
    }

    public void addMessage(MessageRequest message){

        Message reqToSave = new Message();
        reqToSave.setMatchId(message.getMatchId());

        reqToSave.setUserIssuing(userRepository.findByEmail(message.getEmailIssuing()).getUserId());
        reqToSave.setUserReceiver(userRepository.findByEmail(message.getEmailReceiver()).getUserId());
        reqToSave.setText(message.getText());
        reqToSave.setDateTime(message.getDateTime());

        messageRepository.saveMessage(reqToSave);
    }

}
