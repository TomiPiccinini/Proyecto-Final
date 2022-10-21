package com.cuchucambiazo.domain.service;


import api.cuchucambiazo.controller.media.model.GetMediaRequest;
import api.cuchucambiazo.controller.media.model.GetMediaResponse;
import api.cuchucambiazo.controller.media.model.Media;
import com.cuchucambiazo.domain.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MediaService {

    @Autowired
    private MediaRepository repository;

    public GetMediaResponse getMedias(GetMediaRequest request){

        GetMediaResponse response = new GetMediaResponse();

        if (request.getIsHome()){
            response.setMediaList(repository.getAllWithOutUserId(request.getUserId()));
        }else {
            response.setMediaList(repository.getAllWithUserId(request.getUserId()));
        }

        return response;
    }

    public void saveMedia(Media media){
        repository.save(media);
    }

}
