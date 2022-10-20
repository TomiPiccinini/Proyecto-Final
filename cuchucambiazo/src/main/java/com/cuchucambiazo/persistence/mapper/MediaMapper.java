package com.cuchucambiazo.persistence.mapper;

import api.cuchucambiazo.controller.media.model.Media;
import com.cuchucambiazo.persistence.entity.Publicacion;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MediaMapper {

    @Mappings({
            @Mapping(target = "userId", source = "usuarioId"),
            @Mapping(target = "description", source = "descripcion"),
            @Mapping(target = "measure", source = "medida"),
            @Mapping(target = "state", source = "estado")
    })
    Media toMedia(Publicacion publicacion);
    List<Media> toMedias(List<Publicacion> publicacions);

    @InheritInverseConfiguration
    @Mappings({
            @Mapping(target = "fechaModificacion", ignore = true),
            @Mapping(target = "fechaBaja", ignore = true)
    })
    Publicacion toPublicacion(Media media);

}
