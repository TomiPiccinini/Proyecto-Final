package com.cuchucambiazo.domain.repository;

import api.cuchucambiazo.controller.media.model.Media;

import java.util.List;

public interface MediaRepository {
    void save(Media media);
    List<Media> getAllWithUserId(Integer userId);
    List<Media> getAllWithOutUserId(Integer userId);
}
