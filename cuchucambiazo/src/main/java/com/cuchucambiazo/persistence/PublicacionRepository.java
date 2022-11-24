package com.cuchucambiazo.persistence;

import api.cuchucambiazo.controller.match.model.MatchRequest;
import api.cuchucambiazo.controller.media.model.Media;
import com.cuchucambiazo.domain.repository.MediaRepository;
import com.cuchucambiazo.domain.service.MatchService;
import com.cuchucambiazo.persistence.builds.FotoBuilds;
import com.cuchucambiazo.persistence.builds.MediaBuilds;
import com.cuchucambiazo.persistence.crud.FotoCrudRepository;
import com.cuchucambiazo.persistence.crud.LikeCrudRepository;
import com.cuchucambiazo.persistence.crud.MatcheoCrudRepository;
import com.cuchucambiazo.persistence.crud.PublicacionCrudRepository;

import com.cuchucambiazo.persistence.entity.Foto;
import com.cuchucambiazo.persistence.entity.Matcheo;
import com.cuchucambiazo.persistence.entity.MeGusta;
import com.cuchucambiazo.persistence.entity.Publicacion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public class PublicacionRepository implements MediaRepository {

    @Autowired
    private PublicacionCrudRepository publicacionCrudRepository;

    @Autowired
    private FotoCrudRepository fotoCrudRepository;

    @Autowired
    private LikeCrudRepository likeCrudRepository;

    @Autowired
    private MatcheoCrudRepository matcheoCrudRepository;

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

        Optional<Publicacion> publicacion = publicacionCrudRepository.findById(mediaId);

        if (publicacion.isPresent()){
            Media response = mediaBuilds.PublicacionToMedia(publicacion.get());
            System.out.println("Media encontrada: " + response);
            return response;

        }else {
            return new Media();
        }
    }

    @Override
    public void deleteMedia(Integer mediaId) {
        Publicacion publicacion = publicacionCrudRepository.findById(mediaId).get();

        System.out.println("borro las fotos");
        List<Foto> fotos = fotoCrudRepository.findAllByIdPublicacion(mediaId);
        fotos.forEach(foto -> fotoCrudRepository.delete(foto));
        System.out.println("borro los Me Gustas");
        List<MeGusta> meGustas = likeCrudRepository.getLikesByUserReceiver(publicacion.getIdUsuario());
        meGustas.forEach(meGusta -> likeCrudRepository.delete(meGusta));

        List<Matcheo> matcheos = matcheoCrudRepository.getMatchPublicacionId(mediaId);

        matcheos.forEach(matcheo -> {
            matcheoCrudRepository.deleteById(matcheo.getIdMatcheo());
        });


        System.out.println("borro las medias");
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
                formatter.format(date), media.getBrand(), media.getMeasure(), media.getTag(), media.getTitle(),
                media.getMediaId());
        media.getPhotoList().forEach(pic -> {
            Foto foto = fotoBuilds.buildPhototoFoto(pic);
            fotoCrudRepository.updateFoto(foto.getIdFoto(), foto.getIdPublicacion(), foto.getUrl());
        });
    }
}
