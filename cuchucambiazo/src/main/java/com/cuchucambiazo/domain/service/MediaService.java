package com.cuchucambiazo.domain.service;


import api.cuchucambiazo.controller.match.model.Match;
import api.cuchucambiazo.controller.media.model.*;
import api.cuchucambiazo.controller.user.model.User;
import com.cuchucambiazo.domain.repository.LikeRepository;
import com.cuchucambiazo.domain.repository.MatchRepository;
import com.cuchucambiazo.domain.repository.MediaRepository;
import com.cuchucambiazo.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MediaService {

    @Autowired
    private MediaRepository mediaRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private MatchRepository matchRepository;

    public GetMediaResponse getMedias(GetMediaRequest request){

        GetMediaResponse response = new GetMediaResponse();


        User user = userRepository.findByEmail(request.getEmail());
        System.out.println("usuario : " + user);
        if (request.getIsHome()){
            List<Media> mediaList = new ArrayList<>();
            //traigo todas las publicaciones de los usuarios que le dieron like al usuario para darles prioridad
            likeRepository.getLikesByUserReceiver(user.getUserId()).forEach(a -> mediaList.addAll(mediaRepository.getAllWithUserId(a.getUserIssuing())));
            //si le di like a la publicacion, no tiene q volver a aparecer
            System.out.println("lista de medias que te likearon:" + mediaList);
            mediaList.forEach(media -> {
                if (Boolean.TRUE.equals(likeRepository.getLikeOfMediaLiked(media.getMediaId(), user.getUserId()))){
                    mediaList.remove(media);
                }
            });
            //mezclo las publicaciones a las que les doy prioridad
            Collections.shuffle(mediaList);
            //relleno la lista con todas las publicaciones que no fueron likeadas por el usuario
            mediaRepository.getAllWithOutUserId(user.getUserId()).forEach(media -> {
                System.out.println("Media que no es tuya: " + media);
                if (Boolean.FALSE.equals(likeRepository.getLikeOfMediaLiked(media.getMediaId(), user.getUserId()))){
                    System.out.println("no la likeaste, osea que te la voy a mostrar");
                    mediaList.add(media);
                }
            });
            Set<Media> mediaSet = new LinkedHashSet<>(mediaList);
            mediaList.clear();
            mediaSet.forEach(media -> {
                User otherUser = userRepository.findByUserId(media.getUserId());
                System.out.println("OtherUser: " + otherUser);
                media.setUserEmail(otherUser.getEmail());
                List<Match> matches = matchRepository.getMatchs(media.getMediaId());

                if (matches.isEmpty()){
                    mediaList.add(media);
                }else {
                    List<Media> medias = mediaRepository.getAllWithUserId(user.getUserId());
                    matches.forEach(match -> {
                        medias.forEach(med -> {
                            if (!match.getMediaId1().equals(med.getMediaId()) && !match.getMediaId2().equals(med.getMediaId())){
                                mediaList.add(media);
                            }
                        });
                    });
                }

            });
            response.setMediaList(mediaList);

        }else {
            List<Media> mediaList = mediaRepository.getAllWithUserId(user.getUserId());
            mediaList.forEach(media -> {
                media.setUserEmail(user.getEmail());
            });
            response.setMediaList(mediaList);
        }

        return response;
    }

    public void saveMedia(MediaRequest request){

        User user = userRepository.findByEmail(request.getEmail());
        Media reqToSave = request.getMedia();
        reqToSave.setUserId(user.getUserId());
        if (reqToSave.getMediaId() != null){
            if (Boolean.TRUE.equals(mediaRepository.existsMedia(reqToSave.getMediaId()))) {
                mediaRepository.updateMedia(reqToSave);
            } else {
                mediaRepository.save(reqToSave);
            }
        } else {
            mediaRepository.save(reqToSave);
        }


    }

    public void deleteMedia(Integer mediaId){
        mediaRepository.deleteMedia(mediaId);
    }

}
