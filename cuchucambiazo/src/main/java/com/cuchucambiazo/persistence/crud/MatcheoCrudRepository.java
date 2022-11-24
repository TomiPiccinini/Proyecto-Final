package com.cuchucambiazo.persistence.crud;



import com.cuchucambiazo.persistence.entity.Matcheo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MatcheoCrudRepository extends CrudRepository <Matcheo, Integer> {

    @Query(
            value = "SELECT * FROM matcheo m WHERE (m.id_publicacion1 = :idPublicacion OR " +
                    "m.id_publicacion2 = :idPublicacion) AND estado = 'Activo'",
            nativeQuery = true
    )
    List<Matcheo> getMatchPublicacionId(@Param("idPublicacion") Integer idPublicacion);

    @Query(
            value = "SELECT * FROM matcheo WHERE matcheo.id_match = :matchId",
            nativeQuery = true
    )
    Matcheo getMatchByIdMatch(@Param("matchId") Integer matchId);
}
