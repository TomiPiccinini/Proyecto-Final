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

        System.out.println("Entrando al service de Matchs, se busca el userId a partir del email");
        Integer userId = userRepository.findByEmail(email).getUserId();

        System.out.println("Se trae todas las publicaciones del usuario");
        mediaRepository.getAllWithUserId(userId).forEach(a -> {
            System.out.println("Se buscan los matchs por cada publicacion : " + a);
            matchRepository.getMatchs(a.getMediaId()).forEach(mat -> {

                System.out.println("Se encontro match : " + mat);
                MsgMatch msgMatch = new MsgMatch();

                msgMatch.setDateTimeMatch(mat.getDateTimeMatch());
                msgMatch.setMensajes(null);

                Integer otherMediaId = mat.getMediaId1().equals(a.getMediaId()) ? mat.getMediaId2() : a.getMediaId();
                System.out.println("Obtengo datos de la publicacion del otro usuario");
                Media otherMedia = mediaRepository.getMediaByMediaId(otherMediaId);
                msgMatch.setIdOtherUser(otherMedia.getUserId());

                User otherUser = userRepository.findByUserId(otherMedia.getUserId());
                msgMatch.setNameOtherUser(otherUser.getName());
                if (!otherMedia.getPhotoList().isEmpty()){
                    msgMatch.setFoto(otherMedia.getPhotoList().get(0).getUrl());
                }else {
                    System.out.println("Fotos no encontradas en la publicacion");
                }


                System.out.println("Se buscan los mensajes enviados entre los usuarios");
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

        System.out.println("Se buscan users Ids a partir de los mails");
        reqToSave.setUserIssuing(userRepository.findByEmail(message.getEmailIssuing()).getUserId());
        reqToSave.setUserReceiver(userRepository.findByEmail(message.getEmailReceiver()).getUserId());
        reqToSave.setText(message.getText());
        reqToSave.setDateTime(message.getDateTime());

        System.out.println("Se realiza el guardado de mensajes");
        messageRepository.saveMessage(reqToSave);
    }

}
