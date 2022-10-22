package com.cuchucambiazo.persistence;

import api.cuchucambiazo.controller.match.model.Match;
import com.cuchucambiazo.domain.repository.MatchRepository;
import com.cuchucambiazo.persistence.builds.MatchBuilds;
import com.cuchucambiazo.persistence.crud.MatcheoCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
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

    @Override
    public List<Match> getMatchs(Integer mediaId) {

        List<Match> matches = new ArrayList<>();
        repository.getMatchPublicacionId(mediaId).forEach(a -> {
            matches.add(builds.MatcheoToMatch(a));
        });

        return matches;
    }

    @Override
    public void closeMatch(Integer matchId, String reason) {
        Date date = new Date();
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

        repository.closeMatch(matchId, reason, formatter.format(date));
    }
}
