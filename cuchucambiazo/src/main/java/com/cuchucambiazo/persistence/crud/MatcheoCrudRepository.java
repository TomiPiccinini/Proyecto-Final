package com.cuchucambiazo.persistence.crud;



import com.cuchucambiazo.persistence.entity.Matcheo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MatcheoCrudRepository extends CrudRepository <Matcheo, Integer> {

    @Query(
            value = "SELECT * FROM matcheo m WHERE m.id_publicacion1 = :idPublicacion OR" +
                    "m.id_publicacion2 = :idPublicacion",
            nativeQuery = true
    )
    List<Matcheo> getMatchPublicacionId(@Param("idPublicacion") Integer idPublicacion);

    @Query(
            value = "UPDATE TABLE matcheo m SET m.fecha_baja = :fechaBaja, m.estado = :reason" +
                    "WHERE m.id_match = :matchId",
            nativeQuery = true
    )
    void closeMatch(@Param("matchId") Integer matchId, @Param("reason") String reason,
                    @Param("fechaBaja") String fechaBaja);
}
