package com.cuchucambiazo.persistence;

import api.cuchucambiazo.controller.media.model.Media;
import com.cuchucambiazo.domain.repository.MediaRepository;
import com.cuchucambiazo.persistence.builds.FotoBuilds;
import com.cuchucambiazo.persistence.builds.MediaBuilds;
import com.cuchucambiazo.persistence.crud.FotoCrudRepository;
import com.cuchucambiazo.persistence.crud.PublicacionCrudRepository;

import com.cuchucambiazo.persistence.entity.Foto;
import com.cuchucambiazo.persistence.entity.Publicacion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Repository
@Transactional
public class PublicacionRepository implements MediaRepository {

    @Autowired
    private PublicacionCrudRepository publicacionCrudRepository;

    @Autowired
    private FotoCrudRepository fotoCrudRepository;

    @Autowired
    private MediaBuilds mediaBuilds;

    @Autowired
    private FotoBuilds fotoBuilds;


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

    @Override
    public void deleteMedia(Integer mediaId) {
        publicacionCrudRepository.deleteById(mediaId);
    }

    @Override
    public Boolean existsMedia(Integer idMedia) {
        return publicacionCrudRepository.findById(idMedia).isPresent();
    }

    @Override
    public void updateMedia(Media media) {

        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");


        publicacionCrudRepository.updatePublicacion(media.getColor(), media.getDescription(), media.getState(),
                formatter.format(date), media.getBrand(), media.getMeasures(), media.getTag(), media.getTitle(),
                media.getMediaId());
        media.getPhotoList().forEach(pic -> {
            Foto foto = fotoBuilds.buildPhototoFoto(pic);
            fotoCrudRepository.updateFoto(foto.getIdFoto(), foto.getIdPublicacion(), foto.getUrl());
        });
    }
}
