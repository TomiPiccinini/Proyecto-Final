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

    public Match MatcheoToMatch(Matcheo matcheo){

        Match match = new Match();

        match.setDateTimeMatch(matcheo.getFechaAlta());
        match.setMediaId1(matcheo.getIdPublicacion1());
        match.setMediaId2(matcheo.getIdPublicacion2());
        match.setState(matcheo.getEstado());
        match.setMatchId(matcheo.getIdMatcheo());


        return match;
    }

}
