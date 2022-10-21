package com.cuchucambiazo.persistence.mapper;

import api.cuchucambiazo.controller.media.model.Photo;
import com.cuchucambiazo.persistence.entity.Foto;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

//@Mapper(componentModel = "spring", uses = {MediaMapper.class})
public interface FotoMapper {
/*
    @Mappings({
            @Mapping(source = "idFoto", target = "mediaId"),
            @Mapping(source = "idPublicacion", target = "mediaId")
    })
    Photo toPhoto (Foto foto);

    @InheritInverseConfiguration
    @Mapping(target = "publicacion", ignore = true)
    Foto toFoto (Photo photo);
*/
}
