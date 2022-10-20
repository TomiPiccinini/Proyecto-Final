package com.cuchucambiazo.persistence.crud;

import com.cuchucambiazo.persistence.entity.Publicacion;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PublicacionCrudRepository extends CrudRepository<Publicacion, Integer> {

    @Query(
            value = "SELECT * FROM publicacion p WHERE p.id_publicacion <> :idPublicacion",
            nativeQuery = true
    )
    List<Publicacion> findAllWithOutIdPublicacion(@Param("idPublicacion") Integer idPublicacion);

    List<Publicacion> findAllByIdPublicacion(Integer idPublicacion);


}
