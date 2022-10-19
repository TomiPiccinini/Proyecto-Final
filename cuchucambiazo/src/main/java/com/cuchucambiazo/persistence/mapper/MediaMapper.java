package com.cuchucambiazo.persistence.mapper;

import api.cuchucambiazo.controller.media.model.Media;
import com.cuchucambiazo.persistence.entity.Publicacion;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface MediaMapper {

    @Mappings({
            @Mapping(target = "userId", source = "usuarioId"),
            @Mapping(target = "state", source = "usuarioId"),
            @Mapping(target = "userId", source = "usuarioId"),
            @Mapping(target = "userId", source = "usuarioId")
    })
    Media toMedia(Publicacion publicacion);

    @InheritInverseConfiguration
    Publicacion toPublicacion(Media media);

}
