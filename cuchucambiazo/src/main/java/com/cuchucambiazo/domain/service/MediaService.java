package com.cuchucambiazo.domain.service;


import api.cuchucambiazo.controller.media.model.*;
import api.cuchucambiazo.controller.user.model.User;
import com.cuchucambiazo.domain.repository.LikeRepository;
import com.cuchucambiazo.domain.repository.MediaRepository;
import com.cuchucambiazo.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

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
            likeRepository.getLikesByUserReceiver(user.getUserId()).forEach(a -> mediaList.addAll(mediaRepository.getAllWithUserId(a.getUserIssuing())));
            mediaList.addAll(mediaRepository.getAllWithOutUserId(user.getUserId()));
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
        mediaRepository.save(reqToSave);
    }

    public void deleteMedia(Integer mediaId){
        mediaRepository.deleteMedia(mediaId);
    }

}
