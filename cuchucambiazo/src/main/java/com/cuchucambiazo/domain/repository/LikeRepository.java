package com.cuchucambiazo.domain.repository;

import api.cuchucambiazo.controller.like.model.Like;
import io.swagger.models.auth.In;

import java.util.List;
import java.util.Optional;

public interface LikeRepository {
    void saveLike(Like like);
    List<Like> getLikesToMatch(Like like);
    void deleteLike(Like like);
    List<Like> getLikesByUserReceiver(Integer userId);
    Boolean getLikeOfMediaLiked(Integer idMedia, Integer idUserIssuing);
}
