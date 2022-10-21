package com.cuchucambiazo.domain.service;


import api.cuchucambiazo.controller.media.model.GetMediaRequest;
import api.cuchucambiazo.controller.media.model.GetMediaResponse;
import api.cuchucambiazo.controller.media.model.Media;
import api.cuchucambiazo.controller.user.model.User;
import com.cuchucambiazo.domain.repository.MediaRepository;
import com.cuchucambiazo.domain.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MediaService {

    @Autowired
    private MediaRepository mediaRepository;

    @Autowired
    private UserRepository userRepository;

    public GetMediaResponse getMedias(GetMediaRequest request){

        GetMediaResponse response = new GetMediaResponse();

        User user = userRepository.findByEmail(request.getEmail());

        if (request.getIsHome()){
            response.setMediaList(mediaRepository.getAllWithOutUserId(user.getUserId()));
        }else {
            response.setMediaList(mediaRepository.getAllWithUserId(user.getUserId()));
        }

        return response;
    }

    public void saveMedia(Media media){
        mediaRepository.save(media);
    }

}
