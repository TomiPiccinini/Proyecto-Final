package com.cuchucambiazo.persistence;

import api.cuchucambiazo.controller.like.model.Like;
import com.cuchucambiazo.domain.repository.LikeRepository;
import com.cuchucambiazo.persistence.builds.LikeBuilds;
import com.cuchucambiazo.persistence.crud.LikeCrudRepository;
import com.cuchucambiazo.persistence.entity.MeGusta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class MeGustaRepository implements LikeRepository {

    @Autowired
    private LikeCrudRepository repository;

    @Autowired
    private LikeBuilds builds;

    @Override
    public void saveLike(Like like) {

        repository.save(builds.LikeToMeGusta(like));

    }

    @Override
    public List<Like> getLikesToMatch(Like like) {

        List<Like> likes = new ArrayList<>();

        repository.getMeGustasToMatch(like.getUserIssuing(), like.getUserReceiver()).forEach(
        a -> {
            likes.add(builds.MeGustaToLike(a));
        });

        return likes;
    }

    @Override
    public void deleteLike(Like like) {
        repository.deleteById(like.getLikeId());
    }

    @Override
    public List<Like> getLikesByUserReceiver(Integer userId) {

        List<Like> likes = new ArrayList<>();
        repository.getLikesByUserReceiver(userId).forEach(a -> likes.add(builds.MeGustaToLike(a)));
        return likes;
    }

    @Override
    public Boolean getLikeOfMediaLiked(Integer idMedia, Integer idUserIssuing){
        return repository.findLikeOfMediaLiked(idMedia, idUserIssuing).isPresent();
    }
}
