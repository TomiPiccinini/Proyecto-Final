package com.cuchucambiazo.domain.service;

import api.cuchucambiazo.controller.like.model.*;
import api.cuchucambiazo.controller.match.model.Match;
import api.cuchucambiazo.controller.match.model.MediaMatch;
import api.cuchucambiazo.controller.match.model.PhotoMatch;
import api.cuchucambiazo.controller.media.model.Media;
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
                response.setYourMedia(mediaToMediaLike(mediaRepository.getMediaByMediaId(a.getMediaId()),
                        request.getEmailIssuing()));
                response.setOtherMedia(mediaToMediaLike(mediaRepository.getMediaByMediaId(request.getMediaId()),
                        request.getEmailReceiver()));

            });
        }

        return response;
    }

    private MediaLike mediaToMediaLike(Media media, String email){

        MediaLike mediaLike = new MediaLike();

        mediaLike.setMediaId(media.getMediaId());
        mediaLike.setColor(media.getColor());
        mediaLike.setBrand(media.getBrand());
        mediaLike.setDescription(media.getDescription());
        mediaLike.setTag(media.getTag());
        mediaLike.setMeasure(media.getMeasure());
        mediaLike.setState(media.getState());
        mediaLike.setTitle(media.getTitle());
        mediaLike.setUpdateDate(media.getUpdateDate());
        mediaLike.setUserEmail(email);

        List<PhotoLike> photoLikes = new ArrayList<>();
        media.getPhotoList().forEach(photo -> {
            PhotoLike photoLike = new PhotoLike();
            photoLike.setMediaId(photo.getMediaId());
            photoLike.setPhotoId(photo.getPhotoId());
            photoLike.setUrl(photo.getUrl());
            photoLikes.add(photoLike);
        });

        mediaLike.setPhotoList(photoLikes);
        return mediaLike;
    }

}
