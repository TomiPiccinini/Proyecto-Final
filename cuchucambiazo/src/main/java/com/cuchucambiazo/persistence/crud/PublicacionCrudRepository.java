package com.cuchucambiazo.persistence.crud;

import com.cuchucambiazo.persistence.entity.Publicacion;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PublicacionCrudRepository extends CrudRepository<Publicacion, Integer> {

    @Query(
            value = "SELECT * FROM publicacion p WHERE p.id_usuario <> :idUsuario",
            nativeQuery = true
    )
    List<Publicacion> findAllWithOutIdUsuario(@Param("idUsuario") Integer idUsuario);

    List<Publicacion> findAllByIdUsuario(Integer idUsuario);

    @Query(
            value = "UPDATE FROM publicacion SET color = :color, descripcion = :descripcion, estado = :estado," +
                    "fecha_modificacion = :fechaModificacion, marca = :marca, medidas = :medidas, tag = :tag," +
                    "titulo = :titulo" +
                    "WHERE id_publicacion = :idPublicacion",
            nativeQuery = true
    )
    void updatePublicacion(@Param("color") String color, @Param("descripcion") String descripcion,
                           @Param("estado") String estado, @Param("fechaModificacion") String fechaModificacion,
                           @Param("marca") String marca, @Param("medidas") String medidas,
                           @Param("tag") String tag, @Param("titulo") String titulo,
                           @Param("idPublicacion") Integer idPublicacion);


}
