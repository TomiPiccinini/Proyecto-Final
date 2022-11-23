package com.cuchucambiazo.domain.service;

import api.cuchucambiazo.controller.like.model.Like;
import api.cuchucambiazo.controller.like.model.LikeResponse;
import api.cuchucambiazo.controller.like.model.PostLikeRequest;
import api.cuchucambiazo.controller.match.model.Match;
import api.cuchucambiazo.controller.media.model.Photo;
import com.cuchucambiazo.domain.repository.LikeRepository;
import com.cuchucambiazo.domain.repository.MatchRepository;
import com.cuchucambiazo.domain.repository.MediaRepository;
import com.cuchucambiazo.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class LikeService {

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private MatchRepository matchRepository;

    @Autowired
    private MediaRepository mediaRepository;

    @Autowired
    private UserRepository userRepository;

    public LikeResponse saveLike(PostLikeRequest request){

        System.out.println("Inicia el guardado del like");
        LikeResponse response = new LikeResponse();
        response.setIsMatch(false);

        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

        Like like = new Like();

        System.out.println("Busqueda de ids de los usuarios a partir de los mails");
        like.setMediaId(request.getMediaId());
        like.setUserIssuing(userRepository.findByEmail(request.getEmailIssuing()).getUserId());
        like.setUserReceiver(userRepository.findByEmail(request.getEmailReceiver()).getUserId());

        List<Like> likesMatch = likeRepository.getLikesToMatch(like);
        if (likesMatch.isEmpty()){
            System.out.println("No Ocurrio ningun match");
            likeRepository.saveLike(like);
        }else {

            likesMatch.forEach(a -> {
                System.out.println("se encontro match, el like que lo origino es:" + a);
                Match match = new Match();
                match.setState("Activo");
                match.setMediaId1(a.getMediaId());
                match.setMediaId2(request.getMediaId());
                match.setDateTimeMatch(formatter.format(date));

                matchRepository.saveMatch(match);
                System.out.println("match guardado");
                likeRepository.deleteLike(a);

                response.setIsMatch(true);
                List<Photo> photoList = mediaRepository.getMediaByMediaId(a.getMediaId()).getPhotoList();
                if (!photoList.isEmpty()){
                    System.out.println("Imagen encontrada");
                    response.setMatchPhoto(mediaRepository.getMediaByMediaId(a.getMediaId()).getPhotoList().get(0).getUrl());
                }else{
                    System.out.println("No se encontro imagen");
                    response.setMatchPhoto("No se Encontro Imagen");
                }

            });
        }

        return response;
    }
}
