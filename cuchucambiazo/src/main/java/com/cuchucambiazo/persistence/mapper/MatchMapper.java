package com.cuchucambiazo.persistence.mapper;

import api.orange.business.controller.match.model.Match;
import com.cuchucambiazo.persistence.entity.Matcheo;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface MatchMapper {

    @Mappings({
            @Mapping(source = "fecha", target = "dateTimeMatch"),
            @Mapping(source = "usuarioId1", target = "userId1"),
            @Mapping(source = "usuarioId2", target = "userId2"),
            @Mapping(source = "usuarioId3", target = "userId3"),
            @Mapping(source = "estado", target = "state")
    })
    Match toMatch(Matcheo matcheo);

    @InheritInverseConfiguration
    Matcheo toMatcheo(Match match);

}
