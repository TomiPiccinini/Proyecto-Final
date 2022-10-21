package com.cuchucambiazo.persistence;

import api.cuchucambiazo.controller.match.model.Match;
import com.cuchucambiazo.domain.repository.MatchRepository;
import com.cuchucambiazo.persistence.builds.MatchBuilds;
import com.cuchucambiazo.persistence.crud.MatcheoCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class MatcheoRepository implements MatchRepository {

    @Autowired
    private MatcheoCrudRepository repository;

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
}
