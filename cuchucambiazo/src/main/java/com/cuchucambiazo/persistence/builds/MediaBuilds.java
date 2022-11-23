package com.cuchucambiazo.persistence.builds;

import api.cuchucambiazo.controller.media.model.Media;
import api.cuchucambiazo.controller.media.model.Photo;
import com.cuchucambiazo.persistence.entity.Foto;
import com.cuchucambiazo.persistence.entity.Publicacion;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class MediaBuilds {

    public Media PublicacionToMedia(Publicacion publicacion){
        Media media = new Media();

        media.setMediaId(publicacion.getIdPublicacion());
        media.setBrand(publicacion.getMarca());
        media.setColor(publicacion.getColor());
        media.setTitle(publicacion.getTitulo());
        media.setUserId(publicacion.getIdUsuario());
        media.setDescription(publicacion.getDescripcion());
        media.setMeasure(publicacion.getMedidas());
        media.setState(publicacion.getEstado());
        media.setTag(publicacion.getTag());

        List<Photo> photoList = new ArrayList<>();

        publicacion.getFotos().forEach(a -> {
            Photo photo = new Photo();
            photo.setPhotoId(a.getIdFoto());
            photo.setMediaId(a.getIdPublicacion());
            photo.setUrl(a.getUrl());
            photoList.add(photo);
        });

        media.setPhotoList(photoList);
        media.setDischargeDate(publicacion.getFechaBaja());
        media.setUpdateDate(publicacion.getFechaModificacion());


        return media;
    }

    public Publicacion MediaToPublicacion (Media media){

        Publicacion publicacion = new Publicacion();

        publicacion.setIdUsuario(media.getUserId());
        publicacion.setColor(media.getColor());
        publicacion.setMarca(media.getBrand());
        publicacion.setTitulo(media.getTitle());
        publicacion.setDescripcion(media.getDescription());
        publicacion.setMedidas(media.getMeasure());
        publicacion.setEstado(media.getState());
        publicacion.setFechaModificacion(media.getUpdateDate());
        publicacion.setFechaBaja(media.getDischargeDate());
        publicacion.setTag(media.getTag());

        List<Foto> fotos = new ArrayList<>();

        media.getPhotoList().forEach(a -> {
            Foto foto = new Foto();
            foto.setIdPublicacion(a.getMediaId());
            foto.setIdFoto(a.getPhotoId());
            foto.setUrl(a.getUrl());
            fotos.add(foto);
        });

        publicacion.setFotos(fotos);

        return publicacion;
    }

}
