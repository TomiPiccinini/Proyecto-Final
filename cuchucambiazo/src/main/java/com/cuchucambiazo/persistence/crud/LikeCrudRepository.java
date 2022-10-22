package com.cuchucambiazo.persistence.crud;

import com.cuchucambiazo.persistence.entity.MeGusta;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LikeCrudRepository extends CrudRepository <MeGusta, Integer> {

    @Query(
            value = "SELECT * FROM me_gusta mg WHERE mg.id_usuario_receptor = :idUsuarioEmisor AND" +
                    " mg.id_usuario_emisor = :idUsuarioReceptor",
            nativeQuery = true
    )
    List<MeGusta> getMeGustasToMatch(@Param("idUsuarioEmisor") Integer idUsuarioEmisor,
                                     @Param("idUsuarioReceptor") Integer idUsuarioReceptor);

    @Query(
            value = "SELECT * FROM me_gusta mg WHERE mg.id_usuario_receptor = :idUsuarioReceptor",
            nativeQuery = true
    )
    List<MeGusta> getLikesByUserReceiver(@Param("idUsuarioReceptor") Integer idUsuarioReceptor);

}
