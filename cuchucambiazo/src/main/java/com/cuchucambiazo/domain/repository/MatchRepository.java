package com.cuchucambiazo.domain.repository;

import api.cuchucambiazo.controller.match.model.Match;

import java.util.Optional;

public interface MatchRepository {
    Optional<Match> verifyMatch(Match match);
    void saveMatch(Match match);
}
