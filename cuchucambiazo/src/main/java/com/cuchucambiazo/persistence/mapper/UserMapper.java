package com.cuchucambiazo.persistence.mapper;

import api.cuchucambiazo.controller.user.model.User;
import com.cuchucambiazo.persistence.entity.Usuario;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

//@Mapper(componentModel = "spring")
public interface UserMapper {
/*
    @Mappings({
            @Mapping(target = "nombre", source = "name"),
            @Mapping(target = "contrasenia", source = "password")
    })
    User toUser(Usuario usuario);

    @InheritInverseConfiguration
    Usuario toUsuario(User user);
*/
}
