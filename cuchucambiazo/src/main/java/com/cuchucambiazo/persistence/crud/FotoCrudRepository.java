package com.cuchucambiazo.persistence.crud;

import com.cuchucambiazo.persistence.entity.Foto;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface FotoCrudRepository extends CrudRepository<Foto, Integer> {

    @Query(
            value = "UPDATE foto SET id_publicacion = idPublicacion, url = :url" +
                    "WHERE id_foto = idFoto",
            nativeQuery = true
    )
    void updateFoto (@Param("idFoto") Integer idFoto,
                     @Param("idPublicacion") Integer idPublicacion,
                     @Param("url") String url);

}
