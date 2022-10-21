package com.cuchucambiazo.persistence.crud;



import com.cuchucambiazo.persistence.entity.Matcheo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface MatcheoCrudRepository extends CrudRepository <Matcheo, Integer> {
    /*
    @Query(
            value = "SELECT * FROM matcheo m WHERE (m.id_Publicacion1 = :idPublicacion1 AND" +
                    " m.id_Publicacion2 = :idPublicacion2) OR (m.id_Publicacion1 = :idPublicacion2 AND" +
                    "m.id_Publicacion2 = :idPublicacion1)",
            nativeQuery = true
    )
    Matcheo verifyMatch(@Param("idPublicacion1") Integer idPublicacion1,
                               @Param("idPublicacion2") Integer idPublicacion2);*/

}
