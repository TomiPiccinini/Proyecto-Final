package com.cuchucambiazo.persistence;

import api.cuchucambiazo.controller.match.model.Match;
import com.cuchucambiazo.domain.repository.MatchRepository;
import com.cuchucambiazo.persistence.builds.MatchBuilds;
import com.cuchucambiazo.persistence.crud.MatcheoCrudRepository;
import com.cuchucambiazo.persistence.crud.MensajeCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class MatcheoRepository implements MatchRepository {

    @Autowired
    private MatcheoCrudRepository repository;

    @Autowired
    private MensajeCrudRepository mensajeCrudRepository;

    @Autowired
    private MatchBuilds builds;

    @Override
    public Optional<Match> verifyMatch(Match match) {

        return Optional.empty();
    }

    @Override
    public void saveMatch(Match match) {
        repository.save(builds.MatchToMatcheo(match));
    }

    @Override
    public List<Match> getMatchs(Integer mediaId) {

        List<Match> matches = new ArrayList<>();
        repository.getMatchPublicacionId(mediaId).forEach(a -> {
            matches.add(builds.MatcheoToMatch(a));
        });

        return matches;
    }

    @Override
    public void closeMatch(Integer matchId) {
        mensajeCrudRepository.findAllByIdMatcheo(matchId).forEach(mensaje -> {
            mensajeCrudRepository.delete(mensaje);
        });
        repository.deleteById(matchId);
    }

    @Override
    public Match getMatchById(Integer matchId) {
        return builds.MatcheoToMatch(repository.getMatchByIdMatch(matchId));
    }
}
