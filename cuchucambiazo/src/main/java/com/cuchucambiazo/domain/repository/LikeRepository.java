package com.cuchucambiazo.domain.repository;

import api.cuchucambiazo.controller.like.model.Like;

import java.util.List;

public interface LikeRepository {
    void saveLike(Like like);
    List<Like> getLikesToMatch(Like like);
    void deleteLike(Like like);
    List<Like> getLikesByUserReceiver(Integer userId);
}
