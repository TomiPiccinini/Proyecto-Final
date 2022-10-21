package com.cuchucambiazo.persistence.mapper;

import api.cuchucambiazo.controller.media.model.Media;
import com.cuchucambiazo.persistence.entity.Publicacion;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

//@Mapper(componentModel = "spring")
public interface MediaMapper {
/*
    @Mappings({
            @Mapping(target = "idPublicacion", source = "mediaId"),
            @Mapping(target = "idUsuario", source = "userId"),
            @Mapping(target = "descripcion", source = "description"),
            @Mapping(target = "medidas", source = "measures"),
            @Mapping(target = "fotos", source = "photoList"),
            @Mapping(target = "estado", source = "state")
    })
    Media toMedia(Publicacion publicacion);
    List<Media> toMedias(List<Publicacion> publicacions);

    @InheritInverseConfiguration
    @Mappings({
            @Mapping(target = "usuario", ignore = true)
    })
    Publicacion toPublicacion(Media media);
*/
}
