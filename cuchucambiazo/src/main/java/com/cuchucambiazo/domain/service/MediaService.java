package com.cuchucambiazo.domain.service;


import api.cuchucambiazo.controller.media.model.*;
import api.cuchucambiazo.controller.user.model.User;
import com.cuchucambiazo.domain.repository.LikeRepository;
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

    public GetMediaResponse getMedias(GetMediaRequest request){

        GetMediaResponse response = new GetMediaResponse();

        User user = userRepository.findByEmail(request.getEmail());
        if (request.getIsHome()){
            List<Media> mediaList = new ArrayList<>();
            //traigo todas las publicaciones de los usuarios que le dieron like al usuario para darles prioridad
            likeRepository.getLikesByUserReceiver(user.getUserId()).forEach(a -> mediaList.addAll(mediaRepository.getAllWithUserId(a.getUserIssuing())));
            //si le di like a la publicacion, no tiene q volver a aparecer
            mediaList.forEach(media -> {
                if (!likeRepository.getLikeOfMediaLiked(media.getMediaId(), user.getUserId())){
                    mediaList.remove(media);
                }
            });
            //mezclo las publicaciones a las que les doy prioridad
            Collections.shuffle(mediaList);
            //relleno la lista con todas las publicaciones que no fueron likeadas por el usuario
            mediaRepository.getAllWithOutUserId(user.getUserId()).forEach(media -> {
                if (likeRepository.getLikeOfMediaLiked(media.getMediaId(), user.getUserId())){
                    mediaList.add(media);
                }
            });
            Set<Media> mediaSet = new LinkedHashSet<>(mediaList);
            mediaList.clear();
            mediaList.addAll(mediaSet);
            response.setMediaList(mediaList);

        }else {
            response.setMediaList(mediaRepository.getAllWithUserId(user.getUserId()));
        }

        return response;
    }

    public void saveMedia(MediaRequest request){

        User user = userRepository.findByEmail(request.getEmail());
        Media reqToSave = request.getMedia();
        reqToSave.setUserId(user.getUserId());
        if (reqToSave.getMediaId() != null){
            if (mediaRepository.existsMedia(reqToSave.getMediaId())) {
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
