package com.cuchucambiazo.persistence.mapper;

import api.cuchucambiazo.controller.media.model.Photo;
import com.cuchucambiazo.persistence.entity.Foto;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring", uses = {})
public interface FotoMapper {

    @Mappings({
            @Mapping(source = "idPublicacion", target = "productId"),
            @Mapping(source = "url", target = "quantity")
    })
    Photo toPhoto (Foto foto);

    @InheritInverseConfiguration
    Foto toFoto (Photo photo);

}
