package com.cuchucambiazo.persistence.mapper;

import api.cuchucambiazo.controller.like.model.Like;
import api.cuchucambiazo.controller.media.model.Photo;
import com.cuchucambiazo.persistence.entity.Foto;
import com.cuchucambiazo.persistence.entity.MeGusta;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

//@Mapper(componentModel = "spring")
public interface LikeMapper {
/*
    @Mappings({
            @Mapping(source = "id.idPublicacion", target = "idPublicacion")
    })
    Like toPhoto (MeGusta meGusta);

    @InheritInverseConfiguration
    @Mappings({
            @Mapping(target = "publicacion", ignore = true),
            @Mapping(target = "usuario", ignore = true)
    })
    Foto toFoto (Photo photo);
*/
}
