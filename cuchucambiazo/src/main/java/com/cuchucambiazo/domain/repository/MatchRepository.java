package com.cuchucambiazo.domain.repository;

import api.cuchucambiazo.controller.match.model.Match;

import java.util.List;
import java.util.Optional;

public interface MatchRepository {
    Optional<Match> verifyMatch(Match match);
    void saveMatch(Match match);
    List<Match> getMatchs(Integer mediaId);
    void closeMatch(Integer matchId);
    Match getMatchById(Integer matchId);
}
