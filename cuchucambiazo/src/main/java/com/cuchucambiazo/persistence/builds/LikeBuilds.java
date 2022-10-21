package com.cuchucambiazo.persistence.builds;

import api.cuchucambiazo.controller.like.model.Like;
import com.cuchucambiazo.persistence.entity.MeGusta;
import org.springframework.stereotype.Component;

@Component
public class LikeBuilds {

    public MeGusta LikeToMeGusta(Like like){
        MeGusta meGusta = new MeGusta();

        meGusta.setIdUsuarioEmisor(like.getUserIssuing());
        meGusta.setIdPublicacion(like.getMediaId());
        meGusta.setIdUsuarioReceptor(like.getUserReceiver());

        return meGusta;
    }

    public Like MeGustaToLike(MeGusta meGusta){
        Like like = new Like();

        like.setUserIssuing(meGusta.getIdUsuarioEmisor());
        like.setMediaId(meGusta.getIdPublicacion());
        like.setUserReceiver(meGusta.getIdUsuarioReceptor());
        return like;
    }

}
