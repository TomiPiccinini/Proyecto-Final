package com.cuchucambiazo.persistence;

import api.cuchucambiazo.controller.media.model.Media;
import com.cuchucambiazo.domain.repository.MediaRepository;
import com.cuchucambiazo.persistence.crud.PublicacionCrudRepository;
import com.cuchucambiazo.persistence.mapper.MediaMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PublicacionRepository implements MediaRepository {

    @Autowired
    private PublicacionCrudRepository publicacionCrudRepository;

    @Autowired(required = false)
    private MediaMapper mapper;


    @Override
    public void save(Media media) {
        publicacionCrudRepository.save(mapper.toPublicacion(media));
    }

    @Override
    public List<Media> getAllWithUserId(Integer userId) {

        return mapper.toMedias(publicacionCrudRepository.findAllByIdPublicacion(userId));
    }

    @Override
    public List<Media> getAllWithOutUserId(Integer userId) {
        return mapper.toMedias(publicacionCrudRepository.findAllWithOutIdPublicacion(userId));
    }
}
