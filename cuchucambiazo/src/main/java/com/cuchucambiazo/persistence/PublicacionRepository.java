package com.cuchucambiazo.persistence;

import api.cuchucambiazo.controller.media.model.Media;
import com.cuchucambiazo.domain.repository.MediaRepository;
import com.cuchucambiazo.persistence.builds.MediaBuilds;
import com.cuchucambiazo.persistence.crud.FotoCrudRepository;
import com.cuchucambiazo.persistence.crud.PublicacionCrudRepository;
import com.cuchucambiazo.persistence.entity.Publicacion;
import com.cuchucambiazo.persistence.mapper.MediaMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class PublicacionRepository implements MediaRepository {

    @Autowired
    private PublicacionCrudRepository publicacionCrudRepository;

    @Autowired
    private FotoCrudRepository fotoCrudRepository;

    @Autowired
    private MediaBuilds mediaBuilds;


    @Override
    public void save(Media media) {
        Publicacion response = publicacionCrudRepository.save(mediaBuilds.MediaToPublicacion(media));
        response.getFotos().forEach(a -> {
            a.setIdPublicacion(response.getIdPublicacion());
            fotoCrudRepository.save(a);
        });
    }

    @Override
    public List<Media> getAllWithUserId(Integer userId) {

        List<Media> listMedias = new ArrayList<>();
        publicacionCrudRepository.findAllByIdUsuario(userId).forEach(a -> {
            listMedias.add(mediaBuilds.PublicacionToMedia(a));
        });

        return listMedias;
    }

    @Override
    public List<Media> getAllWithOutUserId(Integer userId) {

        List<Media> listMedias = new ArrayList<>();
        publicacionCrudRepository.findAllWithOutIdUsuario(userId).forEach(a -> {
            listMedias.add(mediaBuilds.PublicacionToMedia(a));
        });

        return listMedias;
    }

    @Override
    public Media getMediaByMediaId(Integer mediaId) {
        return mediaBuilds.PublicacionToMedia(publicacionCrudRepository.findById(mediaId).get());
    }
}
