package com.cuchucambiazo.persistence.builds;

import api.cuchucambiazo.controller.media.model.Photo;
import com.cuchucambiazo.persistence.entity.Foto;
import org.springframework.stereotype.Component;

@Component
public class FotoBuilds {

    public Foto buildPhototoFoto (Photo photo){

        Foto foto = new Foto();

        foto.setIdFoto(foto.getIdFoto());
        foto.setUrl(foto.getUrl());
        foto.setIdPublicacion(photo.getMediaId());
        return foto;
    }

}
