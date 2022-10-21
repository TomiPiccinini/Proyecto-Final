package com.cuchucambiazo.persistence.builds;

import api.cuchucambiazo.controller.match.model.Match;
import com.cuchucambiazo.persistence.entity.Matcheo;
import org.springframework.stereotype.Component;

@Component
public class MatchBuilds {

    public Matcheo MatchToMatcheo(Match match){

        Matcheo matcheo = new Matcheo();

        matcheo.setEstado(match.getState());
        matcheo.setFechaAlta(match.getDateTimeMatch());
        matcheo.setIdPublicacion1(match.getMediaId1());
        matcheo.setIdPublicacion2(match.getMediaId2());

        return matcheo;
    }

}
